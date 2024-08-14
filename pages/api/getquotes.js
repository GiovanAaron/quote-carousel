import { Client } from "@notionhq/client";
import dotenv from 'dotenv';

dotenv.config()

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const database_id = process.env.NOTION_DATABASE_ID

async function getRows(req, res){
    const response = await notion.databases.query({
        database_id: database_id,
        
    })
    res.status(200).json(response)
    
     
    

}

export default getRows