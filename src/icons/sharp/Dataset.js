import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Dataset = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M21 3H3v18h18V3zM11 17H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"/></Svg>
  );
};

