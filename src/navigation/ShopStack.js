import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home.js'
import ItemListCategories from '../screens/ItemListCategory.js'
import Desafio from '../components/Desafio/Desafio'
import Header from '../components/Header'
import ItemDetail from '../screens/ItemDetail.js'


const Stack = createNativeStackNavigator()

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={
        ({ route }) => {
          return {
            header: () => <Header title={
              route.name === 'Home' ? 'Categorias' :
                route.name === 'Category' ? route.params.category :
                  'Detalle'
            } />
          }
        }
      }
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Category' component={ItemListCategories} />
      <Stack.Screen name='Product' component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({})