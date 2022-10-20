import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Play_disabled = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M10 12.83v2.53l1.55-.99z" opacity=".3"/><Path d="M2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41L2.81 2.81zM10 15.36v-2.53l1.55 1.55-1.55.98zM19 12 8 5v.17l8.45 8.45L19 12z"/></Svg>
  );
};

