import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Border_outer = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18V3zm-2 16H5V5h14v14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z"/></Svg>
  );
};

