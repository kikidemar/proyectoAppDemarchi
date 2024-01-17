import { StyleSheet, Image, ActivityIndicator } from 'react-native'
import { googleApi } from '../firebase/googleApi'

const MapPreview = ({latitude,longitude}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
    &zoom=15
    &size=700x300
    &maptype=roadmap
    &markers=color:red%7Clabel:D%7C${latitude},${longitude}
    &key=${googleApi.mapStatic}`

    return (
      <>
        {latitude ? (
          <Image source={{ uri: mapPreviewUrl }} style={styles.image} />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" style={styles.spinner} />
        )}
      </>
    );
  };
  
  export default MapPreview;
  
  const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 300,
    },
    spinner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });