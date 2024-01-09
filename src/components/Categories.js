import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem.js'
import { useGetCategoriesQuery } from '../app/services/shopServices.js'



const Categories = ({navigation, route}) => {

  const {data:categories } = useGetCategoriesQuery()

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
    marginBottom:130
  }
})