import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Church = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M18 12.22v-1.99a2 2 0 0 0-1.11-1.79L13 6.5V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1.5L7.11 8.45A2 2 0 0 0 6 10.24v1.99l-2.81 1.25C2.47 13.79 2 14.51 2 15.3V20c0 1.1.9 2 2 2h6v-2.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 19v3h6c1.1 0 2-.9 2-2v-4.7c0-.79-.47-1.51-1.19-1.83L18 12.22zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></Svg>
  );
};

