import { StyleSheet, Text, View } from 'react-native'
import Desafio from './src/components/Desafio/Desafio'
import Header from './src/components/Header'

const  App = () => {
  return (
    <View style={styles.container}>
      <Header title='titulo' />
      <Text>Bienvenido</Text>
      <Desafio />
    </View>
  )
}


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
