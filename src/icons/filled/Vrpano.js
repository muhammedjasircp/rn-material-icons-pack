import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Vrpano = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M20.69 4.05C18.66 4.73 15.86 5.5 12 5.5c-3.89 0-6.95-.84-8.69-1.43A.993.993 0 0 0 2 5.02V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45A.999.999 0 0 0 22 19V5c0-.68-.66-1.16-1.31-.95zM12 15c-2.34 0-4.52.15-6.52.41l3.69-4.42 2 2.4L14 10l4.51 5.4c-1.99-.25-4.21-.4-6.51-.4z"/></Svg>
  );
};

