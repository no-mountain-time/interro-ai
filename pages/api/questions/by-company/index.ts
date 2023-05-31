import { db, QueryResultRow } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
//need types and query
type Company = {
  id: number;
  name: string;
}

type Companies = {
  companies: Company[];
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Companies>,
) {
  const client = await db.connect();

  try {
    const companies = await client.sql`
      SELECT 
        *
      FROM
        companies;
    `;

    const formattedCompanies = companies.rows.map(row => {
      return {
        id: row.id,
        name: row.name,
      };
    });

    return response.status(200).json({ companies: formattedCompanies });

  } catch (error) {
    //@ts-expect-error
    return response.status(500).json({ error });
  }
}
