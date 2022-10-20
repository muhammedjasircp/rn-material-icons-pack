import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Pentagon = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="m2 9 4 12h12l4-12-10-7z"/></Svg>
  );
};

