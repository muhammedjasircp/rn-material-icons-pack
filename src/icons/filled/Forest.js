import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Forest = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M16 12 9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z"/><Path d="M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"/></Svg>
  );
};

