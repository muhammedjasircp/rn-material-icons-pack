import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Inbox = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M12.01 18c-1.48 0-2.75-.81-3.45-2H5v3h14v-3h-3.55a3.98 3.98 0 0 1-3.44 2z" opacity=".3"/><Path d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-5c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"/></Svg>
  );
};

