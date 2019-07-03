import React, { Component } from 'react';
import './App.css';
import { store } from './store';
import Name from './components/Name';
import Balance from './components/Balance';
import WithdrawButtonGroup from './components/WithdrawButtonGroup';


export default class App extends Component {
  render() {
    console.log(store.getState());
    return [
      <Name key={1} name={ store.getState().name} />,
      <Balance key={2} currentBalance={ store.getState().currentBalance } />,
      <WithdrawButtonGroup key={3} withdrawOptions={['10000', '5000']} />,
      <div key={4}>Give away all your cash to charity.</div>,
      <div key={5}>{store.getState().message}</div>
    ];
  }
}
