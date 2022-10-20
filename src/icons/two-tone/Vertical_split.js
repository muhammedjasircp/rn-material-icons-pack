import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Vertical_split = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M15 7h4v10h-4z" opacity=".3"/><Path d="M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z"/></Svg>
  );
};

