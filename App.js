import { useFonts } from 'expo-font'
import { StyleSheet, StatusBar } from 'react-native'
import { fonts } from './src/global/fonts'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'

const App = () => {


  const [fontLoaded] = useFonts(fonts)

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar/>
      <Provider store={store} >
        <MainNavigator />
      </Provider>
    </>
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
