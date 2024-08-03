import { Client } from "@notionhq/client";
import dotenv from 'dotenv';

dotenv.config()

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const database_id = process.env.NOTION_DATABASE_ID

async function getRows(req, res){
    const response = await notion.databases.query({
        database_id: database_id,
        // filter_properties: ["title", "AsVi", "%3Fh%60_"]
    })
    res.status(200).json(response)
    // console.log(response.results[0].properties.Author.title[0].plain_text)
    // console.log(response.results[0].properties.Excerpt.rich_text[0].plain_text)
    // console.log(response.results[0].properties.Year.number)
     
    

}

export default getRows