import React from 'react';
import { View, Dimensions } from 'react-native';

const CircularFrame = () => (
    <View style={styles.containerStyle}>
      <Image />
    </View>
  );

const styles = {
  containerStyle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    backgroundColor:'#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000'
  }
};

export { CircularFrame };
