import React from 'react'
import ReactDOM from 'react-dom'
import Counter1 from './Components/Counter1'
import Counter2 from './Components/Counter2'
import Counter3 from './Components/Counter3'
import { Provider } from './react-redux';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter1 />
      <Counter2 />
      <Counter3 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
