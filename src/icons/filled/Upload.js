import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Upload = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"/></Svg>
  );
};

