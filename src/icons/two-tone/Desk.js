import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Desk = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M16 8h4v2h-4zm0 4h4v2h-4z" opacity=".3"/><Path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 8h-4v-2h4v2zm0-4h-4V8h4v2z"/></Svg>
  );
};

