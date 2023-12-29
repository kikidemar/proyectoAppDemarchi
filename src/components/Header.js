import React from 'react';
import { View } from 'react-native';
import { Header as RNEHeader, Text } from 'react-native-elements';
import { colors } from '../global/colors.js';

const Header = ({ title }) => {
  return (
    <RNEHeader
      containerStyle={{ 
        backgroundColor: colors.primaryBackground, // Utiliza el color primario de tu paleta
        justifyContent: 'space-around', 
        height: 80,
        borderBottomWidth: 0, // Elimina el borde inferior si no lo deseas
        shadowColor: colors.textPrimary, // Establece el color de la sombra si es necesario
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2 // Efecto de elevación para Android
      }}
      centerComponent={<Text style={{ fontSize: 20, color: colors.textPrimary }}>{title}</Text>} // Utiliza el color de texto primario de tu paleta
    />
  );
};

export default Header;
