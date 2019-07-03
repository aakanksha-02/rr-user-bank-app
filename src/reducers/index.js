export default (state, action) => {
  console.log(state);
  console.log(action);
  switch(action.type){
    case 'WITHDRAW_MONEY':
      return{
        ...state,
        currentBalance: (state.currentBalance >= action.amount) ? (state.currentBalance - action.amount) : (state.currentBalance),
        message: (state.currentBalance >= action.amount) ? `Succussfully Withdrawn $${action.amount}.` : 'Insufficient Balance!!'
      };
    case 'DEPOSIT_MONEY':
      return{
        ...state,
        currentBalance: parseInt(state.currentBalance) + parseInt(action.amount),
        message: `Successfully deposited ${action.amount}`
      }
    default: 
      return state;
  }
  // return state;
}