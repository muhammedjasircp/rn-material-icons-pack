import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const View_quilt = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33v-4h3.33v4zM19 17h-3.33v-4H19v4zm0-6h-8.67V7H19v4z"/></Svg>
  );
};

