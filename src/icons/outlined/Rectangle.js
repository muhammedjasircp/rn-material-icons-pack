import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Rectangle = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M2 4v16h20V4H2zm18 14H4V6h16v12z"/></Svg>
  );
};

