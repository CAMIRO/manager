import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
