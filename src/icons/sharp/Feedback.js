import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Feedback = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M22 2H2.01L2 22l4-4h16V2zm-9 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></Svg>
  );
};

