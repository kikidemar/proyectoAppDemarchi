import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search.js'
import ProductItem from '../components/ProductItem.js'
import { useSelector} from 'react-redux'

const ItemListCategory = ({navigation, route}) => {

  const productsFilteredByCategory = useSelector(state => state.shop.value.productsFilteredByCategory)

  const [keyword, setKeyword] = useState('')
  const [products, setProducts] = useState(productsFilteredByCategory)



  useEffect(()=> {
    
    const productsFiltered = productsFilteredByCategory.filter(product => product.title.includes(keyword))
    setProducts(productsFiltered)

  }, [keyword, productsFilteredByCategory])

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