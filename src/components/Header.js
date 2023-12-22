import React from 'react';
import { View } from 'react-native';
import { Header as RNEHeader, Text } from 'react-native-elements';
import { colors } from '../global/colors.js';

const Header = ({ title }) => {
  return (
    <RNEHeader
      containerStyle={{ backgroundColor: '#4CAF50', justifyContent: 'space-around', height: 80 }}
      centerComponent={<Text style={{ fontSize: 20, color: 'white' }}>{title}</Text>}
    />
  );
};

export default Header;