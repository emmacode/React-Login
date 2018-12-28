import React, { Component } from "react";
class Details2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { handleChange, values } = this.props;
    return (
      <div className="container">
        <h1 className="text-center">Are You Ready for Revolution?</h1>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="card">
              <form action="#">
                <div className="form-group" style={{ padding: "30px" }}>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                    onChange={handleChange("email")}
                    defaultValue={values.email}
                  />
                </div>

                <div className="form-group " style={{ padding: "30px" }}>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Phone"
                    onChange={handleChange("phone")}
                    defaultValue={values.phone}
                  />
                </div>
              </form>
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

export default Details2;
