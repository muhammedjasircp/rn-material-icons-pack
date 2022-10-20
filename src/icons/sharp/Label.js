import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Label = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M17.03 5 3 5.01v13.98l14.03.01L22 12l-4.97-7z"/></Svg>
  );
};

