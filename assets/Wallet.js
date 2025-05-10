import React from 'react';
import Svg, { Rect,Path ,ClipPath,G,Defs} from 'react-native-svg';

const WalletIcon = () => {
  return (
<Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <Path
        d="M19 7.25h-.25V5A1.76 1.76 0 0017 3.25a.7.7 0 00-.24 0l-11.9 4h-.27l-.17.06h-.14l-.16.09-.12.17-.14.12-.11.1-.12.15a.4.4 0 00-.08.1 2 2 0 00-.1.18l-.06.11a2 2 0 00-.07.22.5.5 0 010 .11 2 2 0 000 .34v10A1.76 1.76 0 005 20.75h14A1.76 1.76 0 0020.75 19V9A1.76 1.76 0 0019 7.25zm-1.92-2.49a.26.26 0 01.17.24v2.25H9.62l7.46-2.49zM19.25 19a.25.25 0 01-.25.25H5a.25.25 0 01-.25-.25V9A.25.25 0 015 8.75h14a.25.25 0 01.25.25v10z"
        fill="#fff"
      />
      <Path
        d="M16.5 15.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        fill="#fff"
      />
    </Svg>

  );
};

export default WalletIcon;