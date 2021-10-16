import { combineReducers } from "../../redux";
import counter1 from "./counter1.reducer";
import counter2 from "./counter2.reducer";
let rootReducer = combineReducers({
  counter1,
  counter2,
});
export default rootReducer;
