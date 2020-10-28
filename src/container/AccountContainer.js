import React from "react";
import { connect } from "react-redux";
import AddAccount from "../presentation/AddAccount";
import AccountsList from "../presentation/Accounts";
function AccountContainer(props) {
  console.log(props);
  return (  
    <div>
      <h1>Customer Account Details</h1>

      <AddAccount account={props.account} />

      <AccountsList accounts={props.accounts} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { accounts: state };
};
export default connect(mapStateToProps)(AccountContainer);
//Input element
// two buttons add,buy
// Dispatch an action.
