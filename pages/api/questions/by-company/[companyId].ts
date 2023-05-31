import { db, QueryResultRow } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
//needs types and query
type Question = {
  id: number;
  text: string;
  difficulty_level: string;
  time_allotted: string;
  topic_name: string;
  user_grade: string | null;
}

type Questions = {
  questions: Question[];
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Questions>,
) {
  const client = await db.connect();

  const companyId = Array.isArray(request.query.companyId) ? request.query.companyId[0] : request.query.companyId;

  try {
    const questions = await client.sql`
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
        companies.id = ${companyId};
    `;

    const formattedQuestions = questions.rows.map(row => {
      return {
        id: row.id,
        text: row.text,
        difficulty_level: row.difficulty_level,
        time_allotted: row.time_allotted,
        topic_name: row.topic_name,
        user_grade: row.user_grade ? row.user_grade : null
      };
    });

    return response.status(200).json({ questions: formattedQuestions });

  } catch (error) {
    //@ts-expect-error
    return response.status(500).json({ error: error.message });
  }
}
