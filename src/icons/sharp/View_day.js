import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const View_day = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z"/></Svg>
  );
};

