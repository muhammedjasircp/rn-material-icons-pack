import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Upload = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity=".3"/><Path d="m12 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2V8H9.83L12 5.83 14.17 8H13zM5 18h14v2H5z"/></Svg>
  );
};

