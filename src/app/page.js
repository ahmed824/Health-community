'use client';

import { useState, useEffect } from 'react';

import HomePage from "../pages/home/HomePage";
import { HealthPageLoader } from "../../components/ui";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <HealthPageLoader variant="heartbeat" size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
   
      <HomePage />
     
    </div>
  );
}
