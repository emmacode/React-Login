import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/bootstrap.min.css";
import App from "./App";
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//   }
//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <h2>It's {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
