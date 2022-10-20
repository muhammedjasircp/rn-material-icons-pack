import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const View_carousel = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M2 7h4v10H2V7zm5 12h10V5H7v14zM18 7h4v10h-4V7z"/></Svg>
  );
};

