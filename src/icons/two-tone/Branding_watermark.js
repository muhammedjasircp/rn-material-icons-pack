import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Branding_watermark = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M3 19h18V5H3v14zm8-7h9v6h-9v-6z" opacity=".3"/><Path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/></Svg>
  );
};
