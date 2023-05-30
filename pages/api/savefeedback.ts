import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    const { answer_id, feedback, grade} = request.body

    await client.sql`INSERT INTO user_answers WHERE answer_id = ${answer_id} VALUES (feedback, grade)`;
    return response.status(200).json('feedback saved');

  } catch (error) {
    return response.status(500).json({ error });
  }
}