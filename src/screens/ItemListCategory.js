import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import  Header  from '../components/Header.js'
import Search from '../components/Search.js'
import allProducts from '../data/products.json'
import ProductItem from '../components/ProductItem.js'

const ItemListCategory = ({navigation, route}) => {

  const {category} = route.params
  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState(allProducts)



  useEffect(()=> {
    if(category){
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    } else {
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }


  }, [keyword])

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
    width:'100%',
  }

})