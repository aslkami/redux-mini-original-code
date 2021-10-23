import { compose } from "./index";

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadState) {
      const store = createStore(reducer, preloadState);
      let dispatch;
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
}

export default applyMiddleware;
