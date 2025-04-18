import React from "react";

const useDistanceToCenter = (planetRef) => {
  const planetRect = planetRef.getBoundingClientRect();
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const distanceToCenterX = screenWidth / 2 - (planetRect.left + planetRect.width / 2);
  const distanceToCenterY = screenHeight / 2 - (planetRect.top + planetRect.height / 2);

  return { distanceToCenterX, distanceToCenterY };
};

export default useDistanceToCenter;
