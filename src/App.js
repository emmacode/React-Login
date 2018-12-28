import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
//import Navigation from "./components/Navigation";
import NavBar from "./components/navbar";
// import Counters from "./components/counters";
// import TodoList from "./components/TodoList";
// import SocialCard from "./socialCard";
// import UserForm from "./components/UserForm";
// import "./App.css";
class App extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // };
  // handleIncrement = counter => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };
  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };
  // handleDelete = counterId => {
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters });
  // };
  render() {
    return (
      // <React.Fragment>
      //   <NavBar
      //     totalCounters={this.state.counters.filter(c => c.value > 0).length}
      //   />
      //   <Counters
      //     counters={this.state.counters}
      //     onReset={this.handleReset}
      //     onIncrement={this.handleIncrement}
      //     onDelete={this.handleDelete}
      //   />
      //   <TodoList />
      //   <UserForm />
      //   <SocialCard />
      // </React.Fragment>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
