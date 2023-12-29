import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { colors } from '../global/colors'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{item.title}</Text>
            <Text  style={styles.text2}>{item.brand}</Text>
            <Text  style={styles.text2}>$ {item.price}</Text>
        </View>
        <Entypo name='trash' size={25} color={colors.accent}/>
    </View>

  )
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackground,
    margin: 10,
    padding: 10,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primaryBackground,
  },
  textContainer: {
    width: "70%",
    gap: 5,
  },
  text1: {
    fontSize: 19,
    color: colors.textPrimary,
  },
  text2: {
    fontSize: 17,
    color: colors.textSecondary,
  },
})
