import React, {useEffect} from 'react';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/'
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import * as Permissions from 'expo-permissions';


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(status => {
      if(status.status !== 'granted') {
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
      }
      return status;
    }).then(status => {
      if(status.status !== 'granted') {
        return;
      }
    })
  }, [])
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}