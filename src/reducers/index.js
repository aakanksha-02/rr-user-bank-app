export default (state, action) => {
  console.log(action);
  switch(action.type){
    case 'WITHDRAW_MONEY':
      return{
        ...state,
        currentBalance: state.currentBalance-action.amount
      };
    default: 
      return state;
  }
  // return state;
}