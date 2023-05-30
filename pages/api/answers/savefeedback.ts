import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 //needs types, query done
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    const { answerId, feedback, grade} = request.body;

    await client.query(`
    UPDATE users_answers 
    SET feedback = $2, grade = $3
    WHERE answer_id = $1
  `, [answerId, feedback, grade]);
    return response.status(200).json('Feedback saved successfully.');

  } catch (error) {
    return response.status(500).json({ error });
  }
}