import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Mark_as_unread = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z"/><Path d="M5 8v13h17V8H5zm15 4-6.5 3.33L7 12v-2l6.5 3.33L20 10v2z"/></Svg>
  );
};

