import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input2 = ({ value, onChangeText, placeholderprop, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholderprop}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const styles = {
  containerStyle: {

    marginLeft: 20,
    marginRight: 20,
  },
  inputStyle: {
    fontSize: 18,
    color: '#000',
},
};

export { Input2 };
