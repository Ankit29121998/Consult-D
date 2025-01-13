import React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

const MicrophoneIcon = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Microphone body */}
      <Rect
        x="11"
        y="4"
        width="6"
        height="12"
        rx="3"
        stroke="#6C757D" // Adjust color
        strokeWidth="2"
      />
      {/* Base of the microphone */}
      <Path
        d="M14 18V22"
        stroke="#6C757D" // Adjust color
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Support */}
      <Path
        d="M10 22H18"
        stroke="#6C757D" // Adjust color
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Outer arc for sound range */}
      <Path
        d="M8 12C8 15.866 11.134 19 15 19C18.866 19 22 15.866 22 12"
        stroke="#6C757D" // Adjust color
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default MicrophoneIcon;
