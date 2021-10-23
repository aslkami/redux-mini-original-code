/**
 *
 * @param {*} reducer 处理 state 函数
 * @param {*} preloadState 预加载状态
 * @returns
 */
function createStore(reducer, preloadState, enhancer) {
  if (typeof enhancer !== "undefined") {
    return enhancer(createStore)(reducer, preloadedState);
  }
  let state = preloadState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((l) => l());
    return action;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  dispatch({ type: "@@/REDUX_INIT" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore;
