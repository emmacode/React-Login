import React, { Component } from "react";
class Details1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
                    placeholder="Enter Your First Name"
                    onChange={handleChange("firstName")}
                    defaultValue={values.firstName}
                  />
                </div>

                <div className="form-group " style={{ padding: "30px" }}>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Last Name"
                    onChange={handleChange("lastName")}
                    defaultValue={values.lastName}
                  />
                </div>
              </form>
              <button
                onClick={this.continue}
                className="btn btn-sm btn-success"
              >
                Next
              </button>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    );
  }
}

export default Details1;
