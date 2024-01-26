import React from 'react';
import { View, Image } from 'react-native';
import { Text, PricingCard } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../global/colors';
import { addItem } from '../features/cart/cartSlice';
import Toast from 'react-native-toast-message';


const ItemDetail = () => {
 
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: `${product.title} agregado al carrito con exito`,
    })
  }

  const dispatch = useDispatch()
  const product = useSelector((state) => state.shop.value.productSelected)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 15 }}>
      <Image
        style={{ width: '100%', height: 300, marginBottom: 15 }}
        source={{ uri: product.thumbnail }}
        resizeMode="cover"
      />
      <Text h2>{product.title}</Text>
      <Text>{product.description}</Text>
      <PricingCard
        color={colors.green1}
        title={`$${product.price}`}
        button={{ title: 'Comprar ahora', icon: 'shopping-cart' }}
        onButtonPress={() => {
          if (dispatch(addItem(product)))
          showToast()
        }}
      />
    </View>
  );
};

export default ItemDetail;
