import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Man = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2z"/><circle cx="12" cy="4" r="2"/></Svg>
  );
};
