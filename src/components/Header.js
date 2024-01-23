import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { deleteAllSession } from '../db/index.js';
import { colors } from '../global/colors.js';

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const localId = useSelector(state => state.auth.value.localId);

  const onLogoutPress = () => {
    deleteAllSession().then(result => console.log(result));
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {localId && (
        <Pressable onPress={onLogoutPress} style={styles.logoutIcon}>
          <MaterialIcons name="logout" size={30} color={colors.textPrimary} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: colors.primaryBackground,
    borderBottomWidth: 0,
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  centerContainer: {
    flex: 1,  
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  logoutIcon: {
    marginRight: 10,
  },
});

export default Header;
