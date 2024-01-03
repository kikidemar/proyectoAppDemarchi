import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem.js'
import { useSelector} from 'react-redux'


const Categories = ({navigation, route}) => {

  const categories = useSelector((state) => state.shop.value.categories)

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