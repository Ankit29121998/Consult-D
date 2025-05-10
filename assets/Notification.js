import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NotificationIcon=()=>{
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
    >
      <Path
        d="M20.017 10.563v3.943c0 .609.171 1.206.494 1.722l1.18 1.885a1.085 1.085 0 01-.919 1.658H5.228a1.084 1.084 0 01-.918-1.658l1.178-1.885a3.25 3.25 0 00.495-1.722V9.995a7.017 7.017 0 019.747-6.463"
        stroke="#6E8294"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.834 23.02h4.333"
        stroke="#6E8294"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M20.042 8.667a2.708 2.708 0 100-5.417 2.708 2.708 0 000 5.417z"
        fill="red"
      />
    </Svg>
  )
}

export default NotificationIcon;
