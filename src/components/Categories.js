import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import CategoryItem from './CategoryItem.js'

const Categories = ({navigation, route}) => {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={item => item}
      renderItem = {({item}) => <CategoryItem category={item} navigation={navigation} route={route} />}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: '100%',
  }
})