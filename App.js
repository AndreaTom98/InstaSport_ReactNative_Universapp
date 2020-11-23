import React, {useEffect} from 'react';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/'
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}