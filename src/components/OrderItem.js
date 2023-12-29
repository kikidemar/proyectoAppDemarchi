import { StyleSheet, Text, View } from 'react-native'
import {Feather} from "@expo/vector-icons"
import { colors } from '../global/colors'

const OrderItem = ({order}) => {
    const total = order.items
        .reduce((acc,product)=> acc + (product.price * product.quantity),0)

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
            <Text style={styles.text1}>{new Date(order.createdAt).toLocaleString()}</Text>
            <Text style={styles.text2}>Total: $ {total.toFixed(2)}</Text>
      </View>
      <Feather name="search" size={25} color={colors.accent}/>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.secondaryBackground,  
      margin: 10,
      padding: 15,
      height: 120,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 12,
      borderWidth: 2,
      borderColor: colors.primaryBackground, 
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
  },
  textContainer: {
      width: "70%",
      marginLeft: 10,
  },
  text1: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.textPrimary,  
  },
  text2: {
      fontSize: 16,
      color: colors.textSecondary,  
  }
})