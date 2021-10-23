import { createStore } from "../redux";
import rootReducer from "./reducers";
import logger from "./redux-logger";
import promise from "./redux-promise";
import thunk from "./redux-thunk";
import { applyMiddleware } from "../redux";
// const store = createStore(reducer, {
//   counter1: { number: 0 },
//   counter2: { number: 0 },
// });

const store = applyMiddleware(promise, thunk, logger)(createStore)(rootReducer);
export default store;
