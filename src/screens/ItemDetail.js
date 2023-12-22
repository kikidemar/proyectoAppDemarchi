import React, { useEffect, useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import { Text, PricingCard } from 'react-native-elements';
import allProduct from "../data/products.json";
import { colors } from '../global/colors';

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFound = allProduct.find(p => p.id === id);
    setProduct(productFound);
  }, [id]);

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
        button={{ title: 'Buy Now', icon: 'shopping-cart' }}
        onButtonPress={() => {
          console.log('Buy Now pressed')
        }}
      />
    </View>
  );
};

export default ItemDetail;
