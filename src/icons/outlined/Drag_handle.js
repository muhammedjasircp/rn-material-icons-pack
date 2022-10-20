import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Drag_handle = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/></Svg>
  );
};

