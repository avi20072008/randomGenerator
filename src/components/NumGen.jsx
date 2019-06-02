import React, { Component } from "react";

class NumGenerator extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <span
          style={{ marginLeft: 50, fontSize: 15 }}
          className="badge badge-warning"
        >
          {this.props.generator.value !== 0
            ? this.props.generator.value
            : "No Item"}
        </span>
        <button
          onClick={() => this.props.onGenerate(this.props.generator)} // send generator object to handleGenerate fun.
          style={{ marginLeft: 10 }}
          className="btn btn-secondary btn-sm"
        >
          Generate
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.generator.id)}
          className="btn btn-danger btn-sm m-4"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default NumGenerator;
