import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Canvas from "./components/Canvas";

class App extends Component {
  state = {
    arrGenerators: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };

  handleDelete = counterId => {
    console.log("Event is fired", counterId);

    // here we dont delete item from array. we create a new array without the current id.
    const arrGens = this.state.arrGenerators.filter(c => c.id !== counterId);

    // now assign new array arrGens to the state.
    this.setState({ arrGenerators: arrGens });
  };

  handleReset = () => {
    const arr = this.state.arrGenerators.map(c => {
      c.value = 0; // update current value to 0
      return c; // return updated value so new array arr will be of values zero.
    });

    // now update new array arr ( of values zero ) to the arrGenerators
    this.setState({ arrGenerators: arr });
  };

  handleGenerator = objGenerator => {
    //this.setState({ rNum: this.state.rum + 1 }); // 'this' is not available here so use arrow fn.
    //Random number generation.

    const min = 1;
    const max = 100;
    const rand = Math.ceil(min + Math.random() * (max - min));

    // we can directly update value now but State should never be updated directly.
    // so create a clone object and update it first.
    const tempArr = [...this.state.arrGenerators]; // clone arrGenerators array
    const index = tempArr.indexOf(objGenerator); // find object in array. it returns its position.

    tempArr[index].value = rand; // update random value to object's value variable.
    this.setState({ arrGenerators: tempArr }); // assign temp array to arrGenerators.
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.arrGenerators.filter(c => c.value > 0).length
          }
        />
        <main className="container">
          <Canvas
            arrGenerators={this.state.arrGenerators}
            onDelete={this.handleDelete}
            onGenerate={this.handleGenerator}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
