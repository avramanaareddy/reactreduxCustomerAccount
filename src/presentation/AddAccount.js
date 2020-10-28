import React, { Component } from "react";
import { connect } from "react-redux";

class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", amount: 0 };
    console.log(props);
    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    if (e.target.name === "+") {
      
      this.props.dispatch({
        type: "ADD_BALANCE",
        payload: { name:this.state.name,amount:this.state.amount }
      });
    }
    if (e.target.name === "-") {
      this.props.dispatch({
        type: "WITHDRAW_BALANCE",
        payload: { name: this.state.name, amount: this.state.amount }
      });
    }
  }
  render() {
    return (
      <div>
        <form>
          <label>Customer Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <br />
          <br />
          <label>Account Balance:</label>
          <br />
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.onChange}
          />
          <br />
          <br />
          <button type="button" name="+" onClick={this.onSubmit}>
            Add Balance
          </button>
          &nbsp;
          <button type="button" name="-" onClick={this.onSubmit}>
            Withdraw Balance
          </button>
        </form>
        <hr />
      </div>
    );
  }
}

export default connect(null)(AddAccount);
