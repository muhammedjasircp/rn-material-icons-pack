import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Rectangle = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M2 4h20v16H2z"/></Svg>
  );
};

