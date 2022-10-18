import React from 'react';
import {Text} from 'react-native';

import {convertName} from './utils/stringUtils';

import {filledIcons} from './icons/filledIcons';
import {outlinedIcons} from './icons/outlinedIcons';
import {roundIcons} from './icons/roundIcons';
import {sharpIcons} from './icons/sharpIcons';
import {twoToneIcons} from './icons/twoToneIcons';

const MaterialIcon = ({
  name = 'abc',
  color = 'black',
  size = 24,
  type = 'round',
}) => {
  const iconName = convertName(name);
  const Icon =
    type === 'round'
      ? roundIcons[iconName]
      : type === 'filled'
      ? filledIcons[iconName]
      : type === 'outlined'
      ? outlinedIcons[iconName]
      : type === 'sharp'
      ? sharpIcons[iconName]
      : twoToneIcons[iconName];

  return Icon ? (
    <Icon height={size} width={size} fill={color} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default MaterialIcon;
