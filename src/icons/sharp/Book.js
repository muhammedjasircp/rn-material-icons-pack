import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Book = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z"/></Svg>
  );
};

