import React from 'react';
import {Text} from 'react-native';
import {
  roundIcons,
  filledIcons,
  outlinedIcons,
  sharpIcons,
  twoToneIcons,
} from './icons';
import {convertName} from './utils/stringUtils';

const MaterialIcon = ({
  name = 'abc',
  color = 'black',
  size = 24,
  type = 'round',
}) => {
  const iconName = convertName(name);
  let Component;

  if (type === 'round') {
    Component = roundIcons[iconName];
  } else if (type === 'filled') {
    Component = filledIcons[iconName];
  } else if (type === 'outlined') {
    Component = outlinedIcons[iconName];
  } else if (type === 'sharp') {
    Component = sharpIcons[iconName];
  } else {
    Component = twoToneIcons[iconName];
  }

  return Component ? (
    <Component height={size} width={size} fill={color} />
  ) : (
    <Text>Invalid Icon Name</Text>
  );
};

export default MaterialIcon;
