"use client";

import React, { useEffect } from 'react';
//import Randomizer from './randomizer/page.jsx'; // Adjust path if needed
import Card from "../../pages/index/card.jsx"
import Link from 'next/link.js'

const HomePage = () => {
  useEffect(() => {
    // Set up interval to refresh the page every 30 seconds
    const interval = setInterval(() => {
      window.location.reload(); // Reloads the entire page
    }, 300000); // 30000 milliseconds = 30 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-items-center">
      <h1>Quote of The Day</h1>
      <li>
        <Link href="/randomizer">randomizer</Link>
      </li>
      <Card />
      
    </div>
  );
};

export default HomePage;
