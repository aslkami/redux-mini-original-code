import React from "react";
import ReactReduxContext from "./ReactReduxContext";

function Provider(props) {
  const { children, store } = props;
  return (
    <ReactReduxContext.Provider value={{ store }}>
      {children}
    </ReactReduxContext.Provider>
  );
}

export default Provider;

