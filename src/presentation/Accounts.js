import React from "react";

function AccountsList(props) {
  console.log(props);
  
  return (  
    <ul>   
      {props.accounts.map((account) => (
        <div>
          <li key={account.name}>Customer Name: {account.name} </li>
          <li key={account.amount}>Account Balance: {account.amount} </li>
          <hr/>
        </div>
      ))}
    </ul>
  );
}

export default AccountsList;
