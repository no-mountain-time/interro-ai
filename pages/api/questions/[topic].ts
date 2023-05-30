import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 //needs types and query done
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    
    const questions = await client.sql`SELECT 
    questions.id,
    questions.text,
    questions.difficulty_level,
    questions.time_allotted,
    topics.name AS topic_name,
    users_answers.grade AS user_grade,
  FROM 
    questions
  INNER JOIN 
    question_topics ON questions.id = question_topics.question_id
  INNER JOIN 
    topics ON question_topics.topic_id = topics.id
  LEFT JOIN
    users_answers ON questions.id = users_answers.question_id;
  `;
    return response.status(200).json({ questions });

  } catch (error) {
    return response.status(500).json({ error });
  }
}