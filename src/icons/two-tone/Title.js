import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Title = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M5 7h5.5v12h3V7H19V4H5z"/></Svg>
  );
};

