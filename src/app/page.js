"use client";

import React, { useEffect } from 'react';
import Randomizer from '../../pages/index/randomizer'; // Adjust path if needed

const HomePage = () => {
  useEffect(() => {
    // Set up interval to refresh the page every 30 seconds
    const interval = setInterval(() => {
      window.location.reload(); // Reloads the entire page
    }, 30000); // 30000 milliseconds = 30 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Quote of The Day</h1>
      <Randomizer />
    </div>
  );
};

export default HomePage;
