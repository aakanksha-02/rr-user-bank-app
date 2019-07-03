import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const initialState = { 
  name: 'Jenny',
  currentBalance: '50000'
};

export const store = createStore(reducer, initialState
  , composeWithDevTools(
  applyMiddleware(),
));

