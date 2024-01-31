import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, PricingCard } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { addItem } from '../features/cart/cartSlice';
import { useGetProductQuery } from '../app/services/shopServices';
import { colors } from '../global/colors';

const ItemDetail = ({ route }) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: `${product.title} agregado al carrito con éxito`,
    });
  };

  const dispatch = useDispatch();
  const { productId } = route.params;
  const { data: product, isLoading, error } = useGetProductQuery(productId);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>Error al cargar el producto.</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.thumbnail }}
          resizeMode="cover"
        />
        <Text h2>{product.title}</Text>
        <Text>{product.description}</Text>
        <PricingCard
          color={colors.green1}
          title={`$${product.price}`}
          titleStyle={styles.priceTitle}
          containerStyle={styles.pricingCardContainer}
          button={{
            title: 'Comprar ahora',
            icon: 'shopping-cart',
            buttonStyle: styles.buyButton,
          }}
          onButtonPress={() => {
            if (dispatch(addItem(product))) showToast();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 15,
  },
  pricingCardContainer: {
    height: '26%',
  },
  buyButton: {
    marginTop: 10,
  },
  priceTitle: {
    marginBottom: -55,
  },
});

export default ItemDetail;
