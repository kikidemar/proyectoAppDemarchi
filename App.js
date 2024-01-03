import { useFonts } from 'expo-font'
import { StyleSheet, StatusBar } from 'react-native'
import { fonts } from './src/global/fonts'
import TabNavigator from './src/navigation/TabNavigator'
import { store } from './src/store'
import { Provider } from 'react-redux'

const App = () => {


  const [fontLoaded] = useFonts(fonts)

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar/>
      <Provider store={store} >
        <TabNavigator />
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
