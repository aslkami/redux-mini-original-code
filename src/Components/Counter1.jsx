import React, { Component } from "react";
import { createStore, bindActionCreators } from "../redux";

const ADD = "ADD";
const MINUS = "MINUS";
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return { number: state.number + action.payload };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};
let initState = { number: 0 };
const store = createStore(reducer, initState);

function addAction(payload = 1) {
  return { type: "ADD", payload }
}

function minusAction() {
  return { type: "MINUS" }
}

const bindActions = bindActionCreators({ addAction, minusAction }, store.dispatch)

export default class Counter extends Component {
  unsubscribe;
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState({ number: store.getState().number })
    );
  }
  componentWillUnmount() {
    unsubscribe && this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => bindActions.addAction(5)}>+</button>
        <button onClick={bindActions.minusAction}>-</button>
        <button
          onClick={() => {
            setTimeout(() => {
              bindActions.addAction()
            }, 1000);
          }}
        >
          1秒后加1
        </button>
      </div>
    );
  }
}
