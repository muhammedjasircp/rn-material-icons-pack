import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Note = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z"/></Svg>
  );
};

