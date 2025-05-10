import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Favourite=()=> {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={14}
      viewBox="0 0 18 18"
      fill="none"
    >
      <G clipPath="url(#clip0_366_6212)">
        <Path
          d="M17.942 5.916A4.934 4.934 0 0013.01.982 4.925 4.925 0 009 3.047 4.924 4.924 0 004.992.982 4.934 4.934 0 00.057 5.916c0 .386.05.76.133 1.12.685 4.257 5.418 8.748 8.81 9.98 3.392-1.232 8.125-5.723 8.808-9.979.085-.36.134-.734.134-1.12z"
          fill="#DD2E44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_366_6212">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Favourite;
