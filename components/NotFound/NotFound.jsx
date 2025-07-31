"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import FuzzyText with no SSR to avoid server-side rendering issues
const FuzzyText = dynamic(() => import('./FuzzyText'), {
  ssr: false,
  loading: () => <div className="text-8xl font-black text-white">404</div>
});

const NotFound = () => {
  // Define the missing variables
  const [hoverIntensity] = useState(0.8);
  const [enableHover] = useState(true);

  return (
    <div className="flex items-center justify-center  py-60 bg-white">
      <div className="text-center">
        <FuzzyText 
          baseIntensity={0.2} 
          hoverIntensity={hoverIntensity} 
          enableHover={enableHover}
          fontSize="clamp(4rem, 15vw, 12rem)"
          color="#076a60"
        >
          404
        </FuzzyText>
        <p className="mt-8 text-xl text-gray-400">Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;