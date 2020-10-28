const customers = [{'name':'ramana','amount':100},{'name':'rudra', 'amount':500}];
function accountOperations(state = customers, action) {
  console.log("Inside Reducer ", action);
  if (action.type === "ADD_BALANCE") {
    //CORN_P
    for (let account of state) {
      if (account.name === action.payload.name) {
        
        account.amount = parseInt(account.amount) + parseInt(action.payload.amount);
        console.log(account.amount)
       
      }
    }
    return state;
  }
  if (action.type === "WITHDRAW_BALANCE") {
    //CORN_P
    for (let account of state) {
      if (account.name === action.payload.name) {
         account.amount =parseInt(account.amount) - parseInt(action.payload.amount);
         console.log(account.amount)
        
      }

    }
    return state;
   
  }
  return state;
}
export default accountOperations;
