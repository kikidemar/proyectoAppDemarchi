import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Text, PricingCard } from 'react-native-elements';
import { useSelector } from 'react-redux'
import { colors } from '../global/colors';

const ItemDetail = () => {
 
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
        button={{ title: 'Buy Now', icon: 'shopping-cart' }}
        onButtonPress={() => {
          console.log('Buy Now pressed')
        }}
      />
    </View>
  );
};

export default ItemDetail;
