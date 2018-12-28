import React, { Component } from "react";
class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, phone }
    } = this.props;
    return (
      <div className="container">
        <h1 className="text-center">
          Please check carefully to confirm your details
        </h1>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="card">
              <ul className="list-unstyled">
                <li>
                  <label>First Name:</label>
                  {firstName}
                </li>
                <li>
                  <label>Last Name:</label>
                  {lastName}
                </li>
                <li>
                  <label>Email:</label>
                  {email}
                </li>
                <li>
                  <label>Phone:</label>
                  {phone}
                </li>
              </ul>
              <button
                onClick={this.continue}
                className="btn btn-sm btn-success"
              >
                Next
              </button>
              <button onClick={this.back} className="btn btn-sm btn-primary">
                Back
              </button>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

export default Confirmation;
