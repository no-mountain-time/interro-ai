import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from "../../auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
//done?
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    const { answerId, feedback, grade} = request.body;

    const session = await getServerSession(request, response, authOptions)
    if (!session) return response.send('Answer may not be saved since the user is not signed in.')

    if (answerId === null || answerId === undefined) return response.status(400).json('Answer was not saved. Feedback could not be saved.')


    await client.sql`
    UPDATE users_answers 
    SET feedback = ${feedback}, grade = ${grade}
    WHERE answer_id = ${answerId};`
  
  return response.status(200).json('Feedback saved successfully.');

  } catch (error) {
    return response.status(500).json({ error });
  }
}