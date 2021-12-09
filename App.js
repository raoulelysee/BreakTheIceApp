import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import './src/FixTimerBug';

export default class App extends React.Component {

  componentWillMount() {
    const config = {
   apiKey: "AIzaSyAlTvX03fm4RJosWEwyE59QcoeWO5p96Cw",
   authDomain: "breaker-dcf66.firebaseapp.com",
   databaseURL: "https://breaker-dcf66.firebaseio.com",
   projectId: "breaker-dcf66",
   storageBucket: "breaker-dcf66.appspot.com",
   messagingSenderId: "67415988293",
   appId: "1:67415988293:web:492f604b10736c56"
 };
 firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
              <Router />
          </View>
        </SafeAreaView>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
