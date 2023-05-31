import { db, QueryResultRow } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
//need query and types
type History = {
  id: number,
  answer: string,
  created_at: any,
  grade: string,
  feedback: string
}
type Histories = {
  histories: History[]
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Histories>,
) {
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
      users_answers.feedback
    FROM 
      users_answers
    WHERE 
      users_answers.question_id = ${questionId}
    AND
      users_answers.user_id = ${userId};`

    if (histories.rows.length === 0) {
      //@ts-expect-error
      return response.status(404).json({ message: "User History not found" });
    }

    const formattedHistories = histories.rows.map(row => {
      return {
        id: row.id,
        answer: row.answer,
        created_at: row.created_at,
        text: row.created_at,
        grade: row.grade,
        feedback: row.feedback
      };
    });

    return response.status(200).json({histories: formattedHistories});

  } catch (error) {
    //@ts-expect-error
    return response.status(500).json({ error: error.message });
  }
}
