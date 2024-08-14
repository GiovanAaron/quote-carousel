
"use client";

import React, { useEffect, useState } from 'react';


const Randomizer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/api/getquotes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        
        JSON.stringify(result)

        
        
        const rows = result.results
        

        const quotes = rows.map((quote) => {

          let author = quote.properties.Author.title.length ? quote.properties.Author.title[0].plain_text : null;
          let quoteBody = quote.properties.Excerpt.rich_text.length ? quote.properties.Excerpt.rich_text[0].plain_text : null;
          let year = quote.properties.Year.number ? quote.properties.Year.number : null;
          let source = quote.properties.Source.rich_text.length ? quote.properties.Source.rich_text[0].plain_text : null;
          let pageID = quote.id
          let imgURL = "/images/anon-pic.jpg"

          
          if (quote.properties.Media.files.length) {
            switch (quote.properties.Media.files[0].type) {
              case "file": imgURL = quote.properties.Media.files[0].file.url
              break;
              case "external": imgURL = quote.properties.Media.files[0].external.url
              break;
              default: console.log("you haven't referenced properly")

            }
          }
          
          
        
          const quoteObj = {author: author,
            quoteBody: quoteBody,
            year: year,
            source: source,
            pageID:pageID,
            imgURL: imgURL
          }
          return quoteObj

        })

        
        let randomIndex = Math.floor(Math.random() * quotes.length)

        setData(quotes[randomIndex]);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-400 max-w-custom-30">
    <div className="bg-yellow-600">
      <p className="">
        {data.quoteBody}
      </p>
    </div>
    <div className="">
      <div className="">
        <div className="bg-pink-900">
          <p className="">-{data.author}, {data.source} </p>
        </div>
        <div className="">
          <p className="">{data.year ? `(${data.year})` : null}</p>
        </div>
        <img src={data.imgURL}></img>
      </div>
    </div>
  </div>
  );
};

export default Randomizer;
