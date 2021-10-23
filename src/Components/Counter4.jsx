import React, { Component } from "react";
import actions from "../store/actions/counter4.action";
import { connect } from "../react-redux";
class Counter4 extends Component {
  render() {
    let { number, add1, thunkAdd1, promiseAdd1, promiseAdd2 } = this.props;
    return (
      <div>
        <p>{number}</p>
        <button onClick={add1}>+</button>
        <button onClick={thunkAdd1}>thunk+1</button>
        <button onClick={promiseAdd1}>promise+1</button>
        <button onClick={promiseAdd2}>promise+2</button>
      </div>
    );
  }
}
let mapStateToProps = (state) => state.counter1;
export default connect(mapStateToProps, actions)(Counter4);
