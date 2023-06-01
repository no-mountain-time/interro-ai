import { db, QueryResultRow } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { requestToBodyStream } from 'next/dist/server/body-streams';
import { authOptions } from "../../auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
//need query and types
type History = {
  id: number,
  answer: string,
  created_at: any,
  grade: string,
  feedback: string,
  question_text: string,
  topic_name: string
}
type Histories = {
  histories: History[]
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Histories>,
) {
  const session = await getServerSession(request, response, authOptions)
  //@ts-expect-error
  if (!session) return response.send('Answer may not be saved since the user is not signed in.')
  
  const client = await db.connect();
  const questionId = Array.isArray(request.query.questionId) ? request.query.questionId[0] : request.query.questionId
  const { userId } = request.body;

  try {
    const histories = await client.sql`
    SELECT 
      users_answers.id,
      users_answers.answer,
      users_answers.created_at,
      users_answers.grade,
      users_answers.feedback,
      questions.text AS question_text,
      questions_topics.name AS topic_name
    FROM 
      users_answers
    INNER JOIN
      questions ON user_answers.question_id = questions.id
    INNER JOIN
      question_topics ON questions.id = questions_topics.question_id
    INNER JOIN
      topics ON questions_topics.topic_id = topics.id
    WHERE 
      users_answers.question_id = ${questionId};
    AND
      users_answers.user_id = ${userId}`

    if (histories.rows.length === 0) {
      //@ts-expect-error
      return response.status(404).json({ message: "User History not found" });
    }

    const formattedHistories = histories.rows.map(row => {
      return {
        id: row.id,
        answer: row.answer,
        created_at: row.created_at,
        grade: row.grade,
        feedback: row.feedback,
        question_text: row.question_text,
        topic_name: row.topic_name
      };
    });

    return response.status(200).json({histories: formattedHistories});

  } catch (error) {
    //@ts-expect-error
    return response.status(500).json({ error: error.message });
  }
}
