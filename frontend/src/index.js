import React from 'react'
import ReactDOM from 'react-dom'

import App from './Containers/App/App'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import initStore from './Store/Store'

const store = initStore();
store.subscribe(() => {
    const state = store.getState();
    // setAPI(state.name);
})

// const initialTodos = getTodos();
// store.dispatch(addTodos(initialTodos));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
