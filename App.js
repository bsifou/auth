import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';

import firebase from 'firebase';


import { Header, Button, Spinner, CardSection } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = { logedIn: null };


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDOcxGdDKqd6szyqT1mNZric1FCUzOUkOE',
      authDomain: 'auth-29097.firebaseapp.com',
      databaseURL: 'https://auth-29097.firebaseio.com',
      projectId: 'auth-29097',
      storageBucket: 'auth-29097.appspot.com',
      messagingSenderId: '647397469378'
    });


    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ logedIn: false });
      } else {
        this.setState({ logedIn: true });
      }
    });
  }

  renderContent() {
    switch (this.state.logedIn) {
      case false:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
        </Button>
        );
      case true:
        return <LoginForm />;

      default:
        return <Spinner size='large' />;

    }
  }

  render() {
    return (
      <View style={{ flowDirection: 'row' }}>
        <Header headerText='AUTH' />
        {this.renderContent()}
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
