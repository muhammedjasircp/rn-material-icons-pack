import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const View_timeline = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M21 3H3v18h18V3zm-9 14H6v-2h6v2zm3-4H9v-2h6v2zm3-4h-6V7h6v2z"/></Svg>
  );
};

