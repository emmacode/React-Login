import React, { Component } from "react";
import moyin from "./images/moyin.jpg";
class SocialCard extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4" />
        <div className="col-md-4">
          <div className="card">
            <div className="card-title">
              <img src={moyin} className="img-fluid" alt="Moyin Profile" />
            </div>
            <div className="card-body">
              <h5 className="text-center">My name is Moyin</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4" />
      </div>
    );
  }
}

export default SocialCard;
