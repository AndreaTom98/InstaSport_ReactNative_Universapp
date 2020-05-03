import React from 'react';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers/'
import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools());


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

