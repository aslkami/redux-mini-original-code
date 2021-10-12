import { createStore } from './redux'

const value = document.getElementById('value')
const add = document.getElementById('add')
const minus = document.getElementById('minus')

const ADD = 'ADD'
const MINUS = 'MINUS'

let initialState = {
  number: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, number: state.number + 1 }
    case MINUS:
      return { ...state, number: state.number - 1 }
    default:
      return state
  }
}


const store = createStore(reducer)

function render() {
  value.innerHTML = store.getState().number
}

store.subscribe(render)


add.addEventListener('click', () => {
  store.dispatch({ type: ADD })
})

minus.addEventListener('click', () => {
  store.dispatch({ type: MINUS })
})
