import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header.js'
import Categories from '../components/Categories.js'

export default function Home({navigation, route}) {
  return (
    <>
      <Categories navigation={navigation} route={route} />
    </>
  )
}

const styles = StyleSheet.create({
})