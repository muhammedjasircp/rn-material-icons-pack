import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Scoreboard = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M18 9h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5H16v-3h1.5v3zm-8 1.5H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h3V15zm3.25-4h-1.5V9.5h1.5V11zm0 3.5h-1.5V13h1.5v1.5zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3V2h2v2h6V2h2v2h3c1.1 0 2 .9 2 2zm-2 12V6h-7.25v1.5h-1.5V6H4v12h7.25v-1.5h1.5V18H20z"/></Svg>
  );
};

