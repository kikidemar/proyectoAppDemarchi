import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({item, navigation, route}) => {
  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate("Product",{id:item.id})} >
      <Image 
        style={styles.image}
        resizeMode= 'cover'
        source={{uri:item.thumbnail}}
      />
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container:{
    width: '80%',
    backgroundColor: 'blue',
    marginHorizontal:"10%",
    marginVertical:10,
    paddingHorizontal:10,
    paddingVertical:15,
    borderRadius:5,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap:30
  },
  image:{
    width:50,
    height:50
  }
})