import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Play_disabled = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M8 5.19V5l11 7-2.55 1.63L8 5.19zm12 14.54-5.11-5.11L8 7.73 4.27 4 3 5.27l5 5V19l5.33-3.4 5.4 5.4L20 19.73z"/></Svg>
  );
};

