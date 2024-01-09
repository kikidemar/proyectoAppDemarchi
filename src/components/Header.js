import React from 'react';
import { Header as RNEHeader, Text } from 'react-native-elements';
import { colors } from '../global/colors.js';

const Header = ({ title }) => {
  return (
    <RNEHeader
      containerStyle={{ 
        backgroundColor: colors.primaryBackground, 
        justifyContent: 'space-around', 
        height: 80,
        borderBottomWidth: 0, 
        shadowColor: colors.textPrimary, 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2 
      }}
      centerComponent={<Text style={{ fontSize: 20, color: colors.textPrimary }}>{title}</Text>} 
    />
  );
};

export default Header;
