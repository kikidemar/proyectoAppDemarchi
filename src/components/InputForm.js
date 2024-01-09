import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colors } from '../global/colors';

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        style={[
          styles.input,
          isFocused ? { borderBottomColor: colors.textPrimary } : { borderBottomColor: colors.secondaryBackground },
        ]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error ? <View><Text style={styles.error}>{error}</Text></View> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '90%',
    borderWidth: 0,
    borderBottomWidth: 3,
    padding: 2,
    fontSize: 14,
    marginHorizontal: '5%',
    marginVertical: 10,
    color: colors.textPrimary,
  },
  titleInput: {
    width: '90%',
    marginHorizontal: '5%',
    fontSize: 16,
    color: colors.textSecondary,
  },
  error: {
    fontSize: 16,
    color: colors.accent,
    marginLeft: 20,
  },
});