
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config()


export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  try {

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Notion' });
  }
}
