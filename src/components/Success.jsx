import React, { Component } from "react";
export class Success extends Component {
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
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            {" "}
            <h1 className="text-center">Success</h1>
            <h1>
              Thank you for submission. YOu will get a further email on
              instructions
            </h1>
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

export default Success;
