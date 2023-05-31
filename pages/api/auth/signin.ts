import { db, QueryResultRow } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { requestToBodyStream } from 'next/dist/server/body-streams';


export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {

  try {
    
    return response.status(200).json({});

  } catch (error) {
    //@ts-expect-error
    return response.status(500).json({ error: error.message });
  }
}
