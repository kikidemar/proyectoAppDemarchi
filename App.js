import { useFonts } from 'expo-font'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Desafio from './src/components/Desafio/Desafio'
import Header from './src/components/Header'
import Home from './src/screens/Home.js'
import ItemListCategories from './src/screens/ItemListCategory.js'

const  App = () => {

  const [categorySelected, setCategorySelected] = useState('')

  const [fontLoaded] = useFonts({
    Lobster:require("./assets/fonts/Lobster-Regular.ttf")
  })

  if(!fontLoaded) return null

  return (
    <View style={styles.container}>
      {categorySelected ?
        <ItemListCategories category = {categorySelected}/>
        :
        <Home setCategorySelected={setCategorySelected}/>
      }
     
    </View>
  )
}


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
