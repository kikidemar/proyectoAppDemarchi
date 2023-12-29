import { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CartItem from '../components/CartItem'
import allCarts from '../data/cart.json'
import { colors } from '../global/colors'

const Cart = () => {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setCart(allCarts)
  }, [])

  useEffect(() => {
    const calculatedTotal = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
    setTotal(calculatedTotal)
  }, [cart])

  return (
    <View style={styles.container}>
      <FlatList 
        data={allCarts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Confirmar</Text>
        </Pressable>
        <Text style={styles.text}>Total: $ {total.toFixed(2)}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 130,
    backgroundColor: 'white',
  },
  confirmContainer: {
    backgroundColor: colors.secondaryBackground,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.accent,
    padding: 15,
    borderRadius: 8,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 18,
  },
})
