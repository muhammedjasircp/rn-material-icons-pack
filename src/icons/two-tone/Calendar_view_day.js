import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Calendar_view_day = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z"/><Path d="M5 12h14v1H5z" opacity=".3"/></Svg>
  );
};

