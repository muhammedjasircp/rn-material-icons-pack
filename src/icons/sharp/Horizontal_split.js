import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Horizontal_split = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></Svg>
  );
};

