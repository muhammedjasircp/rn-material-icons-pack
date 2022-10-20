import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Minimize = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M6 19h12v2H6v-2z"/></Svg>
  );
};

