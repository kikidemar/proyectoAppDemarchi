import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { useState } from 'react';

const Search = ({ setKeyword }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const search = () => {
    const expression = /.*[0-9].*/;

    if (expression.test(input)) {
      setError('No debe contener números');
    } else {
      setKeyword(input);
    }
  };

  const removeItem = () => {
    setInput('');
    setError('');
  };

  return (
    <View style={ styles.container }>
      <Input
        placeholder="Buscar Producto"
        value={input}
        onChangeText={(text) => setInput(text)}
        containerStyle={{ width: '70%', marginRight: 10 }}
      />
      <Button
        icon={<Icon name="search1" type="antdesign" color="black" />}
        type="clear"
        onPress={search}
      />
      <Button
        icon={<Icon name="circle-with-cross" type="entypo" color="black" />}
        type="clear"
        onPress={removeItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%'
  }
})


export default Search;

