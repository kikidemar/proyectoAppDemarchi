import { useFonts } from 'expo-font'
import { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'

import { colors } from './src/global/colors'
import { fonts } from './src/global/fonts'
import Navigator from './src/navigation/Navigator'

const App = () => {


  const [fontLoaded] = useFonts(fonts)

  if (!fontLoaded) return null

  return (
    <>
      <StatusBar
        backgroundColor={colors.green1}
      />
      <Navigator />
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
