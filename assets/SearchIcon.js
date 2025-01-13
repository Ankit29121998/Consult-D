import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <Circle
        cx="12"
        cy="12"
        r="8"
        stroke="#697C8C" // Adjust color here
        strokeWidth="2"
      />
      {/* Handle */}
      <Line
        x1="17"
        y1="17"
        x2="24"
        y2="24"
        stroke="#697C8C" // Adjust color here
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default SearchIcon;
