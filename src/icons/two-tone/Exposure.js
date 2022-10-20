import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Exposure = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M19 19V5L5 19h14zm-4.5-4.5v-2H16v2h2V16h-2v2h-1.5v-2h-2v-1.5h2z" opacity=".3"/><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 7h5v1.5H6V7zm13 12H5L19 5v14zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16z"/></Svg>
  );
};

