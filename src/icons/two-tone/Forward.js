import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Forward = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity=".3"/><Path d="m20 12-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12 14 15.17V14H6z"/></Svg>
  );
};

