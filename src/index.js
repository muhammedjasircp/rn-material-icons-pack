import React from 'react';
import {Access_time} from './icons/round/Access_time';

const MaterialIcon = ({
  name = 'abc',
  color = 'black',
  size = 24,
  type = 'filled',
}) => {
  return <Access_time height={size} width={size} fill={color} />;
};

export default MaterialIcon;
