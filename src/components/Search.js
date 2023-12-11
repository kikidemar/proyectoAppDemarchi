import { colors } from '../global/colors.js'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'


const Search = ({setKeyword}) => {

  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const search= ()=> {

    const expression = /.*[0-9].*/
    

    if(expression.test(input)) {
      setError('no debe contener numeros')
    } else {
    setKeyword(input)
  }
  }

  const removeItem = () => {
    setInput('')
    setError('')
  }

  return (
    <View style={styles.container}>
        <TextInput
          placeholder='Buscar Producto' 
          style={styles.input}
          value={input}
          onChangeText={(t)=> setInput(t)}
          />
        <Pressable onPress={()=>search()}>
          <AntDesign name='search1' color='black' size={25} />
        </Pressable>
        <Pressable onPress={()=>{removeItem()}}>
          <Entypo name='circle-with-cross' color='black' size={25} />
        </Pressable>
      </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor:colors.green1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10

  },
  input: {
    backgroundColor: colors.green2,
    width: '75%',
    borderWidth:2,
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:5,
    margin:10,

  }
})