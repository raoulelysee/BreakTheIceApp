import React, { Component } from 'react';
import { Keyboard,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Input2, Buttonss, Spinnar } from './common';
import { userNameCreated, userNameChanged } from '../actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class SetupName extends Component {

  onUserNameChange(text) {
    this.props.userNameChanged(text);
  }

  onButtonPress() {
    const { username } = this.props;
    this.props.userNameCreated({ username });
  }

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

  render() {
    //console.log(this.props.employee);
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.containerView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>

          <Text style={styles.authInputLabel}>Enter your username</Text>
            <Input2
              placeholderprop="Choose a cool username"
              onChangeText={this.onUserNameChange.bind(this)}
              value={this.props.username}
            />

          <View style={styles.inputContainer}>
            {this.renderButton()}
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
    alignSelf: 'flex-start',
    marginLeft: 18,
    fontSize: 25,
    marginTop: SCREEN_HEIGHT * 0.25,
  },
  inputContainer: {
    marginTop: SCREEN_HEIGHT * 0.25
  }
};

const mapStateToProps = ({ user }) => {
  const { username, loading } = user;
  return { username };
};

export default connect(mapStateToProps, {
  userNameCreated, userNameChanged
 })(SetupName);
