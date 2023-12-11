import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header.js'
import Categories from '../components/Categories.js'

export default function Home({setCategorySelected}) {
  return (
    <>
      <Header title='Categories'/>
      <Categories setCategorySelected={setCategorySelected} />
    </>
  )
}

const styles = StyleSheet.create({
})