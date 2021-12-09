import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Inputt = ({ value, onChangeText, placeholderprop, secureTextEntry }) => {
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
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  },
  inputStyle: {
    fontSize: 16,
    color: '#000',
},
};

export { Inputt };
