import { createStore } from "../redux";
import rootReducer from "./reducers";
// const store = createStore(reducer, {
//   counter1: { number: 0 },
//   counter2: { number: 0 },
// });

const store = createStore(rootReducer);
export default store;
