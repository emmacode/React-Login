import React, { Component } from "react";
export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            {" "}
            <h1 className="text-center">Enter Personal Details</h1>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
            <br />
            <button
              className="btn btn-md btn-success mr-5"
              onClick={this.continue}
            >
              Continue
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

export default FormPersonalDetails;
