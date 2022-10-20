import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Square = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/></Svg>
  );
};

