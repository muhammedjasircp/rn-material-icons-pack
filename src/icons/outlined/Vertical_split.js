import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Vertical_split = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm16 2v10h-4V7h4m2-2h-8v14h8V5z"/></Svg>
  );
};

