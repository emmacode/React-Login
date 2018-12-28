import React, { Component } from "react";
export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    //PROCESS FORM
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            {" "}
            <h1 className="text-center">Confirm User Details</h1>
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
                <label>Occupation:</label>
                {occupation}
              </li>
              <li>
                <label>City:</label>
                {city}
              </li>
              <li>
                <label>Bio:</label>
                {bio}
              </li>
            </ul>
            <button
              className="btn btn-md btn-success mr-5"
              onClick={this.continue}
            >
              Confirm & Continue
            </button>
            <button className="btn btn-md btn-secondary " onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-md-4" />
        </div>
      </React.Fragment>
    );
  }
}

export default Confirm;
