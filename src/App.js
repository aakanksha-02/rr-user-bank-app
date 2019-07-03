import React, { Component } from 'react';
import './App.css';
import { store } from './store';
import WithdrawButtonGroup from './components/WithdrawButtonGroup';
import DepositButtonGroup from './components/DepositButtonGroup';


export default class App extends Component {
  render() {
    // console.log(store.getState());
    return (
      <div className='app'>
        <div className='accountHolderName smallText'>Hello, 
          <div className='largeText'>{ store.getState().name }!!</div>
        </div>
        <div className='currentBalanceBox'>
          <div className='currentBalance mediumText'>${ store.getState().currentBalance }</div>
          <div className='smallText'>Total Amount</div>
        </div>
        <div className='message'>{store.getState().message}</div>
        <div>
          <div className='smallText'>
            Withdraw Options
          </div> 
          <WithdrawButtonGroup withdrawOptions={[10000, 5000]} />
        </div>
        <div>
          <div className='smallText'>
            Deposit Options
          </div> 
            <DepositButtonGroup depositOptions={[5000, 10000, 15000]} />
        </div>
        <div className='smallText'>Give away all your cash to charity.</div>
      </div>
    );
  }
}
