import React, { Component } from "react";
import Details1 from "./Details1";
import Details2 from "./Details2";
import Confirmation from "./Confirmation";
import Appreciate from "./Appreciate";
class Home extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  };
  //next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  //prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  //handleChange
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, phone } = this.state;
    const values = { firstName, lastName, email, phone };
    switch (step) {
      case 1:
        return (
          <Details1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Details2
            className="SlideInRight"
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <Appreciate />;
    }
  }
}

export default Home;
