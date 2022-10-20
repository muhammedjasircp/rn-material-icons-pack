import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Picture_in_picture = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2z"/><Path d="M13 9h4v2h-4z" opacity=".3"/><Path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/></Svg>
  );
};
