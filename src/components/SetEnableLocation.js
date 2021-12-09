import React, { Component } from 'react';
import { Keyboard,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  Platform,
  Picker
} from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Buttonss, Spinnar } from './common';
import { setLocation } from '../actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;



class SetEnableLocation extends Component {


  onButtonPress() {
    const { latitude, longitude } = this.props;
    if (Platform.OS === 'android' && !Constants.isDevice) {
    this.props.errorMessageDevice
  } else {
    this._getLocationAsync();
    this.props.setLocation({ latitude, longitude });
  }
}

_getLocationAsync = async () => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.props.errorMessage
  }

  const position = await Location.getCurrentPositionAsync({});
     latitude = position.coords.latitude;
     longitude = position.coords.longitude};

  renderButton() {
    if (this.props.loading) {
      return <Spinnar />;
    }
    return (
      <Buttonss onPress={this.onButtonPress.bind(this)}>
        CONTINUE
      </Buttonss>
    );
  }

  renderErrorMessage(){
    if (this.props.errorMessage) {
      return (
        <View>
        <Text style={styles.errorTextStyle}>
        {this.props.errorMessage}
        </Text>
        </View>
      );
    }
  }

  render() {
    //console.log(position);
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.containerView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
          <View style={styles.imageContainer}>
          <Image  source={require('./img/map.png')} />
          </View>
          <Text style={styles.authInputLabel}>Enable your Location</Text>

          <Text style={styles.descriptionText}> You'll need to enable your</Text>
          <Text style={styles.descriptionText}> location in order to use IceBreaker.</Text>


          <View style={styles.inputContainer}>
            {this.renderButton()}

            {this.renderErrorMessage()}
          </View>

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
  authInputLabel: {
    color: 'black',
    textAlign: 'center',
    marginLeft: 18,
    fontSize: 30,
    fontWeight: "600",
    marginTop: 25,
  },
  imageContainer: {
    marginTop: SCREEN_HEIGHT * 0.20,
    textAlign: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 45
  },
  descriptionText: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20
  },
  errorTextStyle: {
  fontSize: 20,
  alignSelf: 'center',
  color: 'red'
  }
};

const mapStateToProps = ({ user }) => {
  const { latitude, longitude, errorMessage } = user;
  return { latitude, longitude, errorMessage };
};

export default connect(mapStateToProps, {
  setLocation
})(SetEnableLocation);
