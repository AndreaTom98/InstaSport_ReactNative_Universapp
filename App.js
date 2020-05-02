import React from 'react';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers/'

const store = createStore(rootReducer)


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

