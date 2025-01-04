import React from 'react';
import Svg, { Rect, G, Defs, Pattern, Use, Mask, Image } from 'react-native-svg';

const RegistrationSuccessful = () => {
    return (
         <Svg width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <Rect width="122" height="122" rx="61" fill="#E6FCF0" />

        {/* Inner Green Rectangle */}
        <Rect x="16" y="16" width="90" height="90" rx="45" fill="#00E66B" />

        {/* Mask */}
        <Defs>
          <Pattern id="pattern0_1_3321" patternContentUnits="objectBoundingBox" width="1" height="1">
            <Use href="#image0_1_3321" transform="scale(0.015625)" />
          </Pattern>
          <Image
            id="image0_1_3321"
            width="64"
            height="64"
            href={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAF1QTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA10AP0gAAAB50Uk5TAA4VFhcYJDAxMlVfYXB+h4+QuMLT1NXW19ri7vL9XHc1dQAAAMJJREFUWMPtlMkSgjAQRBNBUNkUFQWh//8zOVjGiMrS483pa+q9yjZtjEYjS5wlVsLnHdBEPF8AAEohj1bIoxbySIV8obzyyiv/S353rPZWwKcAcF3z+68xYZg6f3tfvYTs/ZUYNUzff3QbM8x5v+3DUIUU7xsCiv9umP//nOEcUPxnw7L//25YOj/OcFpR/NDAzK9v4Ob/aTiQ/eEMdP8MDER/vRio/vMMZH86A8k7A80bs2mALud5Y2ySxRJe84/pAcJMQDPRG9AAAAAAAElFTkSuQmCC',
            }}
          />

          {/* Masking the white rectangle */}
          <Mask id="mask0_1_3321" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="47" y="47" width="28" height="28">
            <Rect x="47" y="47" width="28" height="28" fill="url(#pattern0_1_3321)" />
          </Mask>
        </Defs>

        {/* White Rectangle inside the masked area */}
        <G mask="url(#mask0_1_3321)">
          <Rect x="46.0667" y="43.2667" width="29.8667" height="29.8667" fill="white" />
        </G>
      </Svg>
            
      
    );
};

export default RegistrationSuccessful;
