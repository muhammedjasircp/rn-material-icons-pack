import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Crop = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M5 17c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7V1H5v4H1v2h4v10zm14-2V7c0-1.1-.9-2-2-2H9v2h8v8h2z"/></Svg>
  );
};

