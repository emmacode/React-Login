import React, { Component } from "react";
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            {" "}
            <h1 className="text-center">Enter User Details</h1>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email Address"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <button className="btn btn-md btn-success mr-5" onClick={this.continue}>
              Continue
            </button>
           
          </div>
          <div className="col-md-4" />
        </div>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
