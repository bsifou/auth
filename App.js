import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';


import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDOcxGdDKqd6szyqT1mNZric1FCUzOUkOE',
      authDomain: 'auth-29097.firebaseapp.com',
      databaseURL: 'https://auth-29097.firebaseio.com',
      projectId: 'auth-29097',
      storageBucket: 'auth-29097.appspot.com',
      messagingSenderId: '647397469378'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='AUTH' />
        <LoginForm /> 
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: 300,
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
