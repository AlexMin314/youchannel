import { createStore, compose, combineReducers } from 'redux'

const initStore = () => {

  const reducer = combineReducers({
      //name: nameReducer
  })

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}

export default initStore
