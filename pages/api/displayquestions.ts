import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const client = await db.connect();
 
  try {
    
    await client.sql`CREATE TABLE );`;
    const names = ['Fiona', 'Lucy'];
    await client.sql`INSERT INTO Pets (Name, Owner) VALUES (${names[0]}, ${names[1]});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const questions = await client.sql`SELECT 
    questions.id,
    questions.text,
    questions.difficulty_level,
    questions.time_allotted,
    topics.name AS topic_name
FROM 
    questions
INNER JOIN 
    question_topics ON questions.id = question_topics.question_id
INNER JOIN 
    topics ON question_topics.topic_id = topics.id;
`;
  return response.status(200).json({ questions });
}