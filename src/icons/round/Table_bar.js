import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Table_bar = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26l-.99 2.47c-.23.61.21 1.27.87 1.27.38 0 .72-.23.86-.58L9.2 17h5.6l.97 2.42c.14.35.48.58.86.58.66 0 1.11-.66.86-1.27l-.99-2.47c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48z"/></Svg>
  );
};

