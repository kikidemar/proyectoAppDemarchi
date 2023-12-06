import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemListCategory = () => {
  return (
    <View style={styles.container}>
      <Text>ItemListCategory</Text>
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})