import React, { Component } from 'react';
import { ScrollView, FlatList, View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import UserDetail from './UserDetail';
import { withTheme } from 'react-native-elements';
import breakerApi from '../api/breakerApi';


class UserList2 extends Component {

  state = { users: [] };

  componentDidMount() {
    this.SearchApi();
  }

  SearchApi = async () => {
    const response = await breakerApi.get('/api/?results= 20&nat=ca&inc=gender,name,dob,picture,location,login');
    this.setState({ users: response.data.results })
  };

  renderUsers() {
    return this.state.users.map(user =>
      <UserDetail
        key={user.login.uuid}
        userprop={user} />
    );
  }

  render() {
    //console.log(this.state);

    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Text>
            User
          </Text>
        </View>
        <ScrollView>
          {this.renderUsers()}
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#F8F8F8',
    flex: 1
  },
  container: {
    marginTop: 20,
    height: 50,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 26,
    marginBottom: 8,
    textAlign: 'center',
    color: 'gray'
  }
});

export default UserList2;
