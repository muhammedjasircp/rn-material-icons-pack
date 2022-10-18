import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Pin_invoke = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6h2zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM9.34 15.66c.39.39 1.02.39 1.41 0l2.12-2.12 1.27 1.27c.32.31.86.09.86-.36V10.5c0-.28-.22-.5-.5-.5h-3.95c-.45 0-.67.54-.35.85l1.27 1.27-2.12 2.12c-.4.39-.4 1.03-.01 1.42z"/></Svg>
  );
};

