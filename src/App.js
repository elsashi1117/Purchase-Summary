import React, { Component } from "react";
import { connect } from "react-redux";
import Expander from "./components/reuseExpander";
import * as actions from "./actions";

class App extends Component {
  state = {
    isDetailClick: false,
    isCodeClick: false,
    input: "",
    msg: ""
  };

  detailClick = () => {
    this.setState({
      isDetailClick: !this.state.isDetailClick
    });
  };

  codeClick = () => {
    this.setState({
      isCodeClick: !this.state.isCodeClick
    });
  };

  inputChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  codeSubmit = e => {
    e.preventDefault();
    if (this.state.input === "DISCOUNT") {
      this.props.dispatch(actions.applyCode());
      this.setState({
        input: "",
        msg: "10% discount applied"
      });
    } else {
      this.props.dispatch(actions.delCode());
      this.setState({
        input: "",
        msg: "Sorry, this code is not applicable."
      });
    }
  };

  render() {
    const { pricing, details } = this.props;
    const { isDetailClick, isCodeClick } = this.state;

    return (
      <div
        className="border p-4 mx-auto mt-4 shadow rounded"
        style={{ width: "56%" }}
      >
        <div className="row justify-content-between p-1">
          <span>Subtotal</span>
          <div className="font-weight-bold">
            <span>$</span>
            <span>{pricing.subtotal}</span>
          </div>
        </div>

        <div className="row justify-content-between p-1">
          <u className="pickup-tooltip">
            Pickup savings
            <span className="pickup-tooltip-text">
              picking up your order in store helps cut costs, and we pass the
              savings on to you.
            </span>
          </u>
          <div className="text-danger font-weight-bold">
            <span>-$</span>
            <span>{pricing.savings}</span>
          </div>
        </div>

        <div className="row justify-content-between p-1">
          <span>Est. taxes & fees</span>
          <div className="font-weight-bold">
            <span>$</span>
            <span>{pricing.taxs}</span>
          </div>
        </div>
        <p className="row">(Based on {pricing.zip})</p>

        <div className="w-100 border mb-2" />

        <div className="row justify-content-between p-1">
          <h5>Est. total</h5>
          <div className="font-weight-bold">
            <h5>${pricing.total}</h5>
          </div>
        </div>

        <Expander
          isClicked={isDetailClick}
          noClickText="Hide Item Details"
          clickedText="See Item Details"
          click={this.detailClick}
        >
          {isDetailClick && (
            <div className="row">
              <img
                className="col-5 img-fluid m-auto"
                src={details.img}
                alt={details.discription}
              />
              <div className="col-7">
                <span className="row pr-3">{details.discription}</span>

                <div className="row justify-content-between pr-3">
                  <strong>${details.final_price}</strong>
                  <span>Qty: {details.qty}</span>
                </div>

                <span className="text-secondary row pr-3">
                  <del>{details.price}</del>
                </span>
              </div>
            </div>
          )}
        </Expander>


        <Expander
          isClicked={isCodeClick}
          noClickText="Hide Code Promo"
          clickedText="Apply Code Promo"
          click={this.codeClick}
        >
          {isCodeClick && (
            <div>
              <strong className="text-secondary">Promo code</strong>
              <form className="row p-1" onSubmit={this.codeSubmit}>
                <input
                  className="col-7 mx-auto form-control"
                  onChange={this.inputChange}
                  value={this.state.input}
                />

                <button
                  type="submit"
                  className="btn btn-outline-secondary col-3 responsive-width"
                >
                  Apply
                </button>
              </form>
              <span className="text-danger">{this.state.msg}</span>
            </div>
          )}
        </Expander>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pricing: state.pricing,
    details: state.details
  };
};
export default connect(mapStateToProps)(App);
