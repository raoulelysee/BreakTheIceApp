import React from 'react';
import {Modal, StyleSheet, View,TextInput, Text, TouchableOpacity, Button, Linking, Alert, Image} from 'react-native';
import Homescreen from './HomeScreen';
import { ImagePicker, Permissions } from 'expo';
import * as firebase from 'firebase';


export default class SaveScreen extends React.Component {


state = {
  photo: null,
}

  static navigationOptions = {
    title: 'Save Gift Idea'
  };

  async checkCameraRollPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
      Alert.alert(
        'Hey',
        'Hey! You might want to enable notifications for my app, they are good.',
        [
          { text: 'Settings', onPress: () => Linking.openURL('app-settings:') },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          }
        ]
      )
      this.setState({
        hasCameraRollPermissions: false
      })
      return false
    }
    this.setState({
      hasCameraRollPermissions: true
    })
    return true
  }

 _pickImage = async () => {

   const checkPermissions = await this.checkCameraRollPermission()
   console.log(checkPermissions, '--what is returned here determins the permissions');
    if (!checkPermissions) return

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ photo: result.uri })
      this.uploadImage(result.uri, "test-image");
    }
  };


  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);

  }





    render() {
      const { photo} = this.state;
      return (
        <View style= {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         {photo  && (
           <Image
           source={{uri: photo }}
           style= {{width: 150, height: 150}}/>
         )}
        <Button title= "Choose Photo" onPress={this._pickImage} />
       </View>
      );
    }
  }