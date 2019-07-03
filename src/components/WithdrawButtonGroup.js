import React from 'react'
import { store } from '../store';

function setWithdrawOptionCreator(withdrawOption){
  return {
    type: 'WITHDRAW_MONEY',
    amount: withdrawOption
  }
}

function dispatchBtnAction(e){
  const withdrawOption = e.target.dataset.option;
  store.dispatch(setWithdrawOptionCreator(withdrawOption));
}

const WithdrawButtonGroup = ({ withdrawOptions }) => (
  <div>
    { 
      withdrawOptions.map((option, i) => (
        <button
          data-option= { option }
          key = { `btn-${i}` }
          onClick = { dispatchBtnAction }
        >
          Withdraw ${ option }
        </button>
      ))
    }
  </div>
);

export default WithdrawButtonGroup;
