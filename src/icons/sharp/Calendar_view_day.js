import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Calendar_view_day = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z"/></Svg>
  );
};

