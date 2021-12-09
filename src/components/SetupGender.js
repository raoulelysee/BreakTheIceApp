import React, { Component } from 'react';
import { Keyboard,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Dimensions,
  Picker
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Buttonss, Spinnar } from './common';
import { genderUpdate, createGender } from '../actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class SetupGender extends Component {

  onButtonPress() {
    const { gender } = this.props;
    this.props.createGender({ gender: gender || 'Male'});
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
    
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.containerView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>

          <Text style={styles.authInputLabel}>What is your gender</Text>

          <Picker
            selectValue={this.props.gender}
            onValueChange={value => this.props.genderUpdate({ prop: 'gender', value })}
            >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Neutral" value="Neutral" />

        </Picker>

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
  const { username, loading, gender } = user;
  return { username, loading, gender };
};

export default connect(mapStateToProps, {
  genderUpdate, createGender
})(SetupGender);
