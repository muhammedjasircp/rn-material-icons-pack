import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Bookmark = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="m7 17.97 5-2.15 5 2.15V5H7z" opacity=".3"/><Path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 14.97-5-2.14-5 2.14V5h10v12.97z"/></Svg>
  );
};

