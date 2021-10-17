import React, { useContext, useMemo, useReducer, useLayoutEffect } from "react";
import bindActionCreators from "../redux/bindActionCreators";
import { ReactReduxContext } from "./ReactReduxContext";

// function connect(mapStateToProps, mapDispatchToProps) {
//   return function (OldComponent) {
//     return class extends React.Component {
//       static contextType = ReactReduxContext;
//       constructor(props, context) {
//         super(props);
//         const { getState, dispatch } = context.store;
//         this.state = mapStateToProps(getState());
//         let dispatchProps;
//         if (typeof mapDispatchToProps === "function") {
//           dispatchProps = mapDispatchToProps(dispatch);
//         } else if (typeof mapDispatchToProps === "object") {
//           dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
//         }
//         this.dispatchProps = dispatchProps;
//       }

//       componentDidMount() {
//         const { subscribe, getState } = this.context.store;
//         this.unsubscribe = subscribe(() => {
//           this.setState(mapStateToProps(getState()));
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe && this.unsubscribe();
//       }

//       render() {
//         return (
//           <OldComponent {...this.state} {...this.dispatchProps} {...this.props} />
//         );
//       }
//     };
//   };
// }

function connect(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    return function (props) {
      const { store } = useContext(ReactReduxContext);
      const { getState, dispatch, subscribe } = store;
      const prevState = getState();
      const stateProps = useMemo(() => mapStateToProps(prevState), [prevState]);
      let dispatchProps = useMemo(() => {
        console.log("dispatchProps render");
        let dispatchProps;
        if (typeof mapDispatchToProps === "function") {
          dispatchProps = mapDispatchToProps(dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        } else {
          dispatchProps = { dispatch };
        }
        return dispatchProps;
      }, [dispatch]);
      const [, forceUpdate] = useReducer((x) => x + 1, 0);
      useLayoutEffect(() => {
        return subscribe(forceUpdate);
      }, [subscribe]);
      return <OldComponent {...props} {...stateProps} {...dispatchProps} />;
    };
  };
}

export default connect;
