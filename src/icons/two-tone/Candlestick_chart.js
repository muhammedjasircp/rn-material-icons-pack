import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Candlestick_chart = props => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
        <Path fill='none' d='M0 0h24v24H0z' />
<Path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8z"/><Path d="M7 8h2v8H7zm8 2h2v3h-2z" opacity=".3"/><Path d="M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z"/></Svg>
  );
};

