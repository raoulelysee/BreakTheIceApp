import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-elements';

const Buttonss = ({ onPress, children }) => {
  const { loginButton, textStyle } = styles;

  return (

    <Button
      onPress={onPress}
      title={children}
      buttonStyle={styles.loginButton}
    />
  );
};

const styles = {

  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
}

};

export { Buttonss };
