import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { 
    name: 'Jenny',
    currentBalance: '500000'
};
export const store = createStore(reducer, initialState);