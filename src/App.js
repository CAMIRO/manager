import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import Reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCkq5F89s6IB-cHwfPePTBgBk2Bg0jfoZ4',
      authDomain: 'manager-11fbd.firebaseapp.com',
      databaseURL: 'https://manager-11fbd.firebaseio.com',
      projectId: 'manager-11fbd',
      storageBucket: '',
      messagingSenderId: '672756536073',
      appId: '1:672756536073:web:16bbb5af13fef907',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(Reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
export default App;
