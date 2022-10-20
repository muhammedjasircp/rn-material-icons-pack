import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Light_mode = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1-6v4h2V1h-2zm0 18v4h2v-4h-2zm12-8h-4v2h4v-2zM5 11H1v2h4v-2zm11.24 6.66 2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zM3.87 5.28l2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zm2.47 10.96-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41zM18.72 3.87l-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41z"/></Svg>
  );
};
