import React from 'react'
import ReactDOM from 'react-dom'
import Counter1 from './Components/Counter1'
import Counter2 from './Components/Counter2'
import Counter3 from './Components/Counter3'
import Counter4 from './Components/Counter4'
import { Provider } from './react-redux';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter4 />
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


function compose(...funcs){
    return funcs.reduce((a,b)=>(...args)=>a(b(...args)));
}
let promise = (next)=> {
  console.log("promise outside");
  return function promiseDispatch(action) {
    console.log('promise before');
    next(action);
    console.log('promise after');
};
}
let thunk = (next)=>{
  console.log("thunk outside");
  return function thunkDispatch(action) {
    console.log('thunk before');
    next(action);
    console.log('thunk after');
};
}
let logger = (next)=> {
  console.log("logger outside");
  return function loggerDispatch(action) {
    console.log('logger before');
    next(action);
    console.log('logger after');
};
}

let chain = [promise,thunk,logger]; 
let composed = compose(...chain)
let dispatch = ()=>{
    console.log('原始的dispatch');
}
let newDispatch = composed(dispatch);
newDispatch({type:"add"});