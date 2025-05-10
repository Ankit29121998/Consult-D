import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LocationIcon = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14 0C8.477 0 4 4.477 4 10C4 16.6667 14 28 14 28C14 28 24 16.6667 24 10C24 4.477 19.523 0 14 0ZM14 14C11.791 14 10 12.209 10 10C10 7.791 11.791 6 14 6C16.209 6 18 7.791 18 10C18 12.209 16.209 14 14 14Z"
        fill="#FFFFFF" // Adjust the color here
      />
    </Svg>
  );
};

export default LocationIcon;
