import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import RouterComponent from './RouterComponent';

class App extends Component {

componentWillMount() {
  const config = {
     apiKey: 'AIzaSyCyGzmS08k6hCJCSjetmjYp1SbNSxutInE',
     authDomain: 'manager-93106.firebaseapp.com',
     databaseURL: 'https://manager-93106.firebaseio.com',
     projectId: 'manager-93106',
     storageBucket: 'manager-93106.appspot.com',
     messagingSenderId: '452309973884'
   };
   firebase.initializeApp(config);
}
render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
        <RouterComponent />
    </Provider>

  );
}
}

export default App;
