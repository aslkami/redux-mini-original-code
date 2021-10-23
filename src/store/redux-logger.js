function logger(store) {
  const { getState, dispatch } = store;
  return function (next) {
    return function (action) {
      console.log("prevState", getState());
      next(action);
      console.log("nextState", getState());
    };
  };
}

export default logger;
