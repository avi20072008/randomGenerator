import React, { Component } from "react";
import NumGenerator from "./NumGen";

class Canvas extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>

        {this.props.arrGenerators.map(x => (
          <NumGenerator
            onDelete={this.props.onDelete}
            key={x.id}
            generator={x}
            onGenerate={this.props.onGenerate}
          />
          // generator={x} passing object to generator property. Now generator prot can be used in NumGenerator component.
        ))}
      </div>
    );
  }
}

export default Canvas;
