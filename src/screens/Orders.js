import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import OrderItem from '../components/OrderItem';
import { useSelector, useDispatch } from 'react-redux';
import { useGetOrdersQuery, useDeleteOrderMutation } from '../app/services/shopServices';

const Orders = () => {
  
  const localId = useSelector((state) => state.auth.value.localId);
  const { data, isSuccess, isError, error, isLoading } = useGetOrdersQuery(localId);
  const [info, setInfo] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [deleteOrder] = useDeleteOrderMutation();

  useEffect(() => {
    if (isSuccess) {
      setInfo(data.length !== 0);
      setLoading(false);
    }
  
    if (isError && error) {
      setErrorMessage(error.error);
    }
  }, [data, isSuccess, isError, error])

  const handleDeleteOrder = async (orderId) => {
    try {
      await deleteOrder({ localId, orderId });
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  if (!info) return <View><Text style={styles.emptyContainer}>No se encuentran ordenes generadas.</Text></View>;
  if (errorMessage) return <View><Text>Error al cargar</Text></View>;
  if (loading) return <ActivityIndicator size="large" color="#0000ff" style={styles.spinner} />;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <OrderItem order={item} onDelete={handleDeleteOrder} />}
      extraData={data}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    fontSize:20
  }
});
