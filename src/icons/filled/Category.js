import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Category = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="m12 2-5.5 9h11z"/><circle cx="17.5" cy="17.5" r="4.5"/><Path d="M3 13.5h8v8H3z"/></Svg>
  );
};

