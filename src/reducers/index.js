export default (state, action) => {
  console.log(action);
  switch(action.type){
    case 'WITHDRAW_MONEY':
      return{
        ...state,
        currentBalance: (state.currentBalance >= action.amount) ? (state.currentBalance-action.amount) : (state.currentBalance),
        message: (state.currentBalance >= action.amount) ? `Succussfully Withdrawn $ ${action.amount}` : 'Insufficient Balance'
      };
    default: 
      return state;
  }
  // return state;
}