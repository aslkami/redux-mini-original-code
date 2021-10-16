import React from 'react'
import ReactDOM from 'react-dom'
import Counter1 from './Components/Counter1'
import Counter2 from './Components/Counter2'
// import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Counter1 />
    <Counter2 />
  </React.StrictMode>,
  document.getElementById('root')
)
