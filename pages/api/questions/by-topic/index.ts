import { db, QueryResultRow } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

//Retrieve Topics

type Topic = {
  id: number;
  name: string;
}

type Topics = {
  topics: Topic[];
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Topics>,
) {
  const client = await db.connect();

  try {
    const topics = await client.sql`
      SELECT 
        *
      FROM 
        topics;
    `;

    const formatedTopics = topics.rows.map(row => {
      return {
        id: row.id,
        name: row.name,
      };
    });

    return response.status(200).json({ topics: formatedTopics });

  } catch (error) {
    //@ts-expect-error
    return response.status(500).json({ error });
  }
}
