import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Bookmarks = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2zm0 14.97-4.21-1.81-.79-.34-.79.34L5 19.97V7h10v12.97z"/><Path d="m5 19.97 5-2.15 5 2.15V7H5z" opacity=".3"/></Svg>
  );
};

