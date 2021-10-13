// 其实就是将 () => dispatch({ type: 'ADD' }) 包装一下
// actionCreator 的返回结果 ， { type: 'ADD'  }
// args 相当于 payload，
function bindActionCreator(actionCreator, dispatch) {
  return (...args) => {
    const type = actionCreator.apply(this, args);
    return dispatch(type); // dispatch({ type: 'ADD', payload: args })
  };
}

function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }

  const bindActionCreators = {};
  if (typeof actionCreators === "object") {
    for (let key in actionCreators) {
      bindActionCreators[key] = bindActionCreator(
        actionCreators[key],
        dispatch
      );
    }
  }

  return bindActionCreators;
}

export default bindActionCreators;
