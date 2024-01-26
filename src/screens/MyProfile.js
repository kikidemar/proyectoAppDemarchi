import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../app/services/shopServices';
import AddButton from '../components/AddButton';

const MyProfile = ({ navigation }) => {
  const localId = useSelector(state => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);
  const { data: location } = useGetUserLocationQuery(localId);

  return (
    <View style={styles.container}>
      <Image
        source={data ? { uri: data.image } : require("../../assets/user.png")}
        style={styles.image}
        resizeMode='cover'
      />
      <AddButton
        title={data ? "Cambiar foto de perfil" : "Agregar foto de perfil"}
        onPress={() => navigation.navigate("ImageSelector")}
      />
      <AddButton
        title={location ? (location.address ? "Cambiar Ubicacion" : "Agregar Ubicacion") : "Agregar Ubicacion"}
        onPress={() => navigation.navigate("LocationSelector")}
      />
      <Text style={styles.locationText}>{location?.address}</Text>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  locationText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
