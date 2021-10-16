// reducers
// {
//   counter1: fn,
//   counter2: fn
// }
function combineReducers(reducers) {
  return function (state = {}, action) {
    let rootState = {};
    for (let key in reducers) {
      rootState[key] = reducers[key](state[key], action);
    }
    return rootState;
  };
}

export default combineReducers;
