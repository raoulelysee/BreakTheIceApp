import React, { Component } from 'react';
import { Keyboard,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { resetCaches, emailChanged, passwordChanged, loginUser, directToSignUp } from '../actions';
import { Card, CardSection, Inputt, Buttonss, Spinnar } from './common';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  goToSignUp() {
   const { email, password } = this.props;

   this.props.directToSignUp({ email, password });
 }

  renderError() {
    if (this.props.error) {
      return (
        <View>
        <Text style={styles.errorTextStyle}>
        {this.props.error}
        </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinnar />;
    }
    return (
      <Buttonss onPress={this.onButtonPress.bind(this)}>
        SIGN IN
      </Buttonss>
    );
  }

  render() {
    return (
    <KeyboardAvoidingView behavior="padding" style={styles.containerView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>IceBreaker</Text>

          <Text style={styles.authInputLabel}>Email</Text>
            <Inputt
              placeholderprop="example@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />

          <Text style={styles.authInputLabel}>Password</Text>
            <Inputt
              secureTextEntry
              placeholderprop="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
              {this.renderError()}

              {this.renderButton()}

              <TouchableHighlight
                  underlayColor={'#1E90FF'}
                  onPress={this.goToSignUp.bind(this)}
                >
                  <Text style={styles.authLowerText}>Go to Sign Up</Text>
              </TouchableHighlight>

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
    backgroundColor: '#03A9F4'
  },
  loginFormView: {
    flex: 1
  },
  logoText: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: "800",
    marginTop: SCREEN_HEIGHT * 0.1,
    marginBottom: 30,
    textAlign: 'center'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  authInputLabel: {
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 18,
    fontSize: 18
  },
  authLowerText: {
     color: '#fff',
     fontWeight: '500',
     fontStyle: 'italic',
     fontSize: 17,
     alignSelf: 'center',
     marginTop: 10
   },
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged,
                                          passwordChanged,
                                          directToSignUp,
                                          resetCaches,
                                          loginUser })(LoginForm);
