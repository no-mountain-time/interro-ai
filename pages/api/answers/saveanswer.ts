import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';


 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    const { userId, questionId, answer } = request.body;

    
    await client.sql`INSERT INTO users_answers (user_id, question_id, answer) VALUES ($1, $2, $3)`, [userId, questionId, answer];
    return response.status(200).json('added successfuly');

  } catch (error) {
    return response.status(500).json({ error });
  }
}