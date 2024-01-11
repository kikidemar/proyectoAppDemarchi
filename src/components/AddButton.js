import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colors } from '../global/colors'


const AddButton = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}


export default AddButton


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackground, 
    width: '70%',
    paddingVertical: 8,
    margin: 10,
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: colors.textPrimary, 
    textAlign: 'center',
    fontSize: 18,
  },
});