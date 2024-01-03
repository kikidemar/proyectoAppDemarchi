import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import CardShadow from '../wrappers/CardShadow'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory } from '../features/shop/shopSlice'

const CategoryItem = ({ category, navigation }) => {

  const dispatch = useDispatch()

  return (
    <Pressable onPress={() => {
      dispatch(setProductsFilteredByCategory(category))
      navigation.navigate('Category', { category })
      }}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: colors.secondaryBackground,  // Cambiado a colors.secondaryBackground
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,  // Añadido un borde redondeado para estética
    shadowColor: colors.textSecondary,  // Añadido color de sombra basado en la paleta
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,  // Elevación para Android
  },
  text: {
    color: colors.textPrimary,  // Cambiado a colors.textPrimary
    fontSize: 18,
    fontWeight: 'bold',  // Fuente en negrita
  }
})
