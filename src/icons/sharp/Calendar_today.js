import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Calendar_today = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20V3zm-2 18H4V8h16v13z"/></Svg>
  );
};

