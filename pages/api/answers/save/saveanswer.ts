import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from "../../auth/[...nextauth]"
import { getServerSession } from "next-auth/next"

type ResponseType = {
  message: string;
  answerId?: number;
};
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseType>,
) {
  const client = await db.connect();
 
  try {
    const session = await getServerSession(request, response, authOptions)
    //@ts-expect-error
    if (!session) return response.send('Answer may not be saved since the user is not signed in.')
    const { userId, questionId, answer } = request.body;


    
    const result = await client.sql`
      INSERT INTO users_answers (user_id, question_id, answer) 
      VALUES (${userId}, ${questionId}, ${answer}) 
      RETURNING answer_id
    `;
    
    console.log('result', result);
    if (result.rows.length > 0) {
      const answerId = result.rows[0].answer_id;
      return response.status(200).json({ message: 'Answer saved successfully.', answerId });
    } else {
      return response.status(400).json({ message: 'Answer not saved.' });
    }

  } catch (error) {
    //@ts-expect-error
    return response.status(500).json({ error });
  }
}
