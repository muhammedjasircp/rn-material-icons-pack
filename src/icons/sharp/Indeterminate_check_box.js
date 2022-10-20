import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Indeterminate_check_box = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M21 3H3v18h18V3zm-4 10H7v-2h10v2z"/></Svg>
  );
};

