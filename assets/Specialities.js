import React from 'react';

import Svg, { Path ,Rect} from 'react-native-svg';

const Specialities = ({fill,insidefill}) => {
    return (
        <Svg
        width={55}
        height={55}
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect
          x={0.159424}
          y={0.5}
          width={54}
          height={54}
          rx={27}
          fill={fill}
        />
        <Path
          d="M23.827 26.667A4.167 4.167 0 0119.66 22.5v-3.333a.833.833 0 01.833-.833h.834a.833.833 0 100-1.667h-.834a2.5 2.5 0 00-2.5 2.5V22.5a5.818 5.818 0 002.517 4.784 7.332 7.332 0 012.483 5.216 5.833 5.833 0 1011.667 0v-.95a3.334 3.334 0 10-1.667 0v.95a4.167 4.167 0 11-8.333 0 7.332 7.332 0 012.5-5.216 5.817 5.817 0 002.5-4.784v-3.333a2.5 2.5 0 00-2.5-2.5h-.833a.833.833 0 000 1.667h.833a.833.833 0 01.833.833V22.5a4.166 4.166 0 01-4.166 4.167zm10 3.333a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z"
          fill={insidefill}
        />
      </Svg>



    );
};

export default Specialities;