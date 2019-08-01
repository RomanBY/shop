import {createStore} from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export let store: any = createStore(counter)

function authorization ( state = false, action ) {
  switch (action.type) {
    case 'ISAUTORIZATED':
      return state = true
    case 'NOAUTORIZATED':
      return state = false
    default:
      return state
  }
}

export let autorization: any = createStore(authorization)

/*
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
*/
