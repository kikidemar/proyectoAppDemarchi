import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search.js'
import ProductItem from '../components/ProductItem.js'
import { useGetProductsQuery } from '../app/services/shopServices.js'

const ItemListCategory = ({navigation, route}) => {
  const {category} = route.params
  const {data, isLoading, error} = useGetProductsQuery(category)

  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState(data)

  

  useEffect(()=> {

    if(!isLoading) {
      const dataArray = Object.values(data)
      const productsFiltered = dataArray.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }

  }, [keyword, data])

  return (
    <>
      <Search setKeyword={setKeyword} />
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductItem navigation={navigation} route={route} item={item} />}
      />
    </>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container:{
    width:'100%'
  }
})