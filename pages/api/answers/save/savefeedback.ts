import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
//done?
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    const { answerId, feedback, grade} = request.body;

    await client.sql`
    UPDATE users_answers 
    SET feedback = ${feedback}, grade = ${grade}
    WHERE answer_id = ${answerId};`
  
  return response.status(200).json('Feedback saved successfully.');

  } catch (error) {
    return response.status(500).json({ error });
  }
}