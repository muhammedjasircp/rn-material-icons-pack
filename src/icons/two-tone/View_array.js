import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const View_array = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M9 7h6v10H9z" opacity=".3"/><Path d="M15 7v10H9V7h6zm6-2h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z"/></Svg>
  );
};

