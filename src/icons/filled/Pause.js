import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Pause = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></Svg>
  );
};

