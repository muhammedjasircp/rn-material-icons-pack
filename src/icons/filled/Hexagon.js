import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Hexagon = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z"/></Svg>
  );
};

