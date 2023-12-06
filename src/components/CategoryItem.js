import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import CardShadow from '../wrappers/CardShadow'

const CategoryItem = ({category}) => {
  return (
    <Pressable onPress={()=> console.log(category)}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </CardShadow>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: colors.green2,
    margin:10,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',

  }
})