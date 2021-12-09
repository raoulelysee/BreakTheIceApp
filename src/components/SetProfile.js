import React, { Component } from 'react';
import { Keyboard,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Dimensions,
  Picker,
  Button,
  Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { directToUserList } from '../actions';
import { Buttonss, Spinnar, CircularFrame } from './common';


const SCREEN_HEIGHT = Dimensions.get('window').height;

class SetProfile extends Component {
  state = {
  image: null,
};

componentDidMount() {
  this.getPermissionAsync();
}

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL) && await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
}

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
  });

  console.log(result);

  if (!result.cancelled) {
    this.setState({ image: result.uri });
  }
};

moveToNextScreen() {
  Actions.userlist();
}

  render() {
    let { image } = this.state;

    return (

      <KeyboardAvoidingView behavior="padding" style={styles.containerView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
          <View style={styles.imageContainer}>
          <Button
         title="Pick an image from camera roll"
         onPress={this._pickImage}
       />
       {image &&
         <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 5 }} />}
          </View>

          <Text style={styles.userNameStyle}>Ray</Text>
          <Text style={styles.userGenderStyle}>Male </Text>

          <Text style={styles.authInputLabel}>Choose your breaker interest</Text>

          <Picker>
            <Picker.Item label="Want to have a drink" value="drink" />
            <Picker.Item label="Want to have conversation" value="chat" />
            <Picker.Item label="Want to dance" value="dance" />
            <Picker.Item label="Want to go with the flow" value="discovery" />
            <Picker.Item label="Want to make new friends" value="friend" />
            <Picker.Item label="Want to hangout" value="bored" />
        </Picker>

            <Buttonss
              style={{ marginTop: 10 }}
              onPress={this.moveToNextScreen.bind(this)}>
              Go to List of user
              </Buttonss>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  containerView: {
    flex: 1
  },
  loginScreenContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  userNameStyle: {
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 15,
    fontSize: 18,
//    marginTop: SCREEN_HEIGHT * 0.27,
  },
  userGenderStyle: {
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 15,
    fontSize: 18,
//    marginTop: SCREEN_HEIGHT * 0.29,
  },
  authInputLabel: {
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 15,
    fontSize: 18,
  //  marginTop: SCREEN_HEIGHT * 0.31,
  },
  imageContainer: {
    marginTop: SCREEN_HEIGHT * 0.15,
    textAlign: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: SCREEN_HEIGHT * 0.25
  }
};

const mapStateToProps = ({ user }) => {
  const { username, pasword } = user;
  return {username, pasword };
};

export default connect(mapStateToProps, { directToUserList }) (SetProfile);
