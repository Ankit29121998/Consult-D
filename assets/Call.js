import React from 'react';
import Svg, { Rect,Mask,G,Defs,Pattern,Use,Image } from 'react-native-svg';

const CallIcon = () => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
<Rect width="64" height="64" rx="32" fill="#F1F6FE"/>
<Mask id="mask0_83_1056" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="18" y="18" width="28" height="28">
<Rect x="18" y="18" width="28" height="28" fill="url(#pattern0_83_1056)"/>
</Mask>
<G mask="url(#mask0_83_1056)">
<Rect x="10.2217" y="10.2216" width="43.5556" height="43.5556" fill="#2C85C7"/>
</G>
<Defs>
<Pattern  id="pattern0_83_1056" patternContentUnits="objectBoundingBox" width="1" height="1">
<Use href="#image0_83_1056" transform="scale(0.015625)"/>
</Pattern>
<Image id="image0_83_1056" width="64" height="64" href="data:image/png;base64,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"/>
</Defs>
</Svg>

  );
};

export default CallIcon;
