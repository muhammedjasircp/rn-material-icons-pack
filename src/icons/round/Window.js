import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Window = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M11 11V3H5c-1.1 0-2 .9-2 2v6h8zm2 0h8V5c0-1.1-.9-2-2-2h-6v8zm-2 2H3v6c0 1.1.9 2 2 2h6v-8zm2 0v8h6c1.1 0 2-.9 2-2v-6h-8z"/></Svg>
  );
};

