import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Text, Card } from 'react-native-elements'

const ProductItem = ({ item, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Product", { id: item.id })}>
      <Card containerStyle={styles.container}>
        <View style={styles.content}>
          <Image 
            style={styles.image}
            resizeMode='cover'
            source={{ uri: item.thumbnail }}
          />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </Card>
    </Pressable>
  )
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10, 
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
