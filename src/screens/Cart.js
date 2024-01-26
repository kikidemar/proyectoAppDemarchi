import { FlatList, Pressable, StyleSheet, Text, View, Button } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../app/services/shopServices'
import { clearCart } from '../features/cart/cartSlice'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {

  const navigation = useNavigation()
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Orden creada con exito',
    })
  }

  const errorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'El carrito está vacío. Por favor agregar productos al carrito',
    })
  }

  const localId = useSelector(state => state.auth.value.localId)
  const cart = useSelector(state => state.cart.value)
  const [triggerPostOrder,{data,isSuccess,isError,error}] = usePostOrdersMutation()
  const dispatch = useDispatch()

  const handleConfirmOrder = async () => {
    try {
      if (cart.items.length === 0) {
        errorToast()
        return;
      }
  
      await triggerPostOrder({ localId, order: cart });
      dispatch(clearCart());
      navigation.navigate('OrdersStack', { screen: 'Orders' });
      showToast();
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  }

  if (cart.items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>El carrito está vacío. Por favor, agregar productos al carrito.</Text>
        <Button
          title="Ir a Productos"
          onPress={() => navigation.navigate('ShopStack')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable onPress={handleConfirmOrder} style={styles.button}>
          <Text style={styles.text}>Confirmar</Text>
        </Pressable>
        <Text style={styles.text}>Total: $ {cart.total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 130,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
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
});