import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardShadow = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default CardShadow

const styles = StyleSheet.create({
  container: {
    /* ANDROID (sombra)*/
    elevation:10,
    /* IOS (sombra)*/
    shadowColor: 'black',
    shadowOffset: {width:3, height:5},
    shadowRadius: 1,
    shadowOpacity: 1
  }

})