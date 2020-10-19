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
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(status => {
      if(status.status !== 'granted') {
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
      }
      return status;
    }).then(status => {
      if(status.status !== 'granted') {
        throw new Error('no permissions')
      }
    }).then(() => {
      return Notifications.getExpoPushTokenAsync();
    }).then(data => {
      console.log(data)
    }).catch(error => {
      return null;
    })
  }, [])
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}