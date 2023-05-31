import { db, QueryResultRow } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

//Access a specific question and user grade for each question

type Question = {
  id: number;
  text: string;
  difficulty_level: string;
  time_allotted: string;
  topic_name: string;
  user_grade: string | null;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Question>,
) {
  const client = await db.connect();

  const questionId = Array.isArray(request.query.questionId) ? request.query.questionId[0] : request.query.questionId;
  
  if (typeof questionId === 'undefined') {
    //@ts-expect-error
    return response.status(400).json({ message: 'Bad request.' });
  }

  try {
    const result = await client.sql`
      SELECT 
        questions.id,
        questions.text,
        questions.difficulty_level,
        questions.time_allotted,
        topics.name AS topic_name,
        users_answers.grade AS user_grade
      FROM 
        questions
      INNER JOIN 
        question_topics ON questions.id = question_topics.question_id
      INNER JOIN 
        topics ON question_topics.topic_id = topics.id
      LEFT JOIN
        users_answers ON questions.id = users_answers.question_id
      WHERE 
        questions.id = ${questionId};`

    if (result.rows.length === 0) {
      //@ts-expect-error
      return response.status(404).json({ message: "Question not found" });
    }

    const row = result.rows[0];
    const question = {
      id: row.id,
      text: row.text,
      difficulty_level: row.difficulty_level,
      time_allotted: row.time_allotted,
      topic_name: row.topic_name,
      user_grade: row.user_grade
    };

    return response.status(200).json(question);

  } catch (error) {
    //@ts-expect-error
    return response.status(500).json({ error: error.message });
  }
}
