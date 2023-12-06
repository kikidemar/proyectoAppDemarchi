import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header.js'
import Categories from '../components/Categories.js'

export default function Home() {
  return (
    <>
      <Header title='Categories'/>
      <Categories />
    </>
  )
}

const styles = StyleSheet.create({})