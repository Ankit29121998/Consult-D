import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const RegistrationSuccessful = () => {
  return (
    <Svg
      width={122}
      height={122}
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <Rect width={122} height={122} rx={61} fill="#E6FCF0" />
      <Rect x={16} y={16} width={90} height={90} rx={45} fill="#00E66B" />
      <Path
        d="M75.875 55.969a2.188 2.188 0 00-3.093-3.093L56.813 68.844l-7.219-7.218a2.187 2.187 0 00-3.093 3.093l8.75 8.75a2.187 2.187 0 003.093 0l17.5-17.5h.031z"
        fill="#fff"
      />
    </Svg>
  )
}

export default RegistrationSuccessful
