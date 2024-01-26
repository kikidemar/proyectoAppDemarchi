import { StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native'
import { colors } from '../global/colors'
import { Entypo } from "@expo/vector-icons"
import { useState } from 'react'
import Toast from 'react-native-toast-message'

const OrderItem = ({ order, onDelete }) => {

  const [loading, setLoading] = useState(false)

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Orden eliminada con exito',
    })
  }

  const handleDeletePress = async () => {
    setLoading(true);
    try {
      await onDelete(order.id)
      showToast()
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{order.updateAt}</Text>
        <Text style={styles.text2}>Total: $ {order.total}</Text>
      </View>
      <Pressable onPress={handleDeletePress} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.accent} />
        ) : (
          <Entypo name="trash" size={25} color={colors.accent} />
        )
        }
      </Pressable>
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