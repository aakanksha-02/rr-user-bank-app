import React from 'react'
import { store } from '../store';

function setDepositOptionCreator(depositOption){
  return {
    type: 'DEPOSIT_MONEY',
    amount: depositOption
  }
}

function dispatchBtnAction(e){
  const depositOption = e.target.dataset.option;
  store.dispatch(setDepositOptionCreator(depositOption));
}

const DepositButtonGroup = ({ depositOptions }) => (
  <div>
    { 
      depositOptions.map((option, i) => (
        <button
          data-option= { option }
          key = { `btn-${i}` }
          className='btn'
          onClick = { dispatchBtnAction }
        >
          ${ option }
        </button>
      ))
    }
  </div>
);

export default DepositButtonGroup;
