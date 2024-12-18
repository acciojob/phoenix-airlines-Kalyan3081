import { Provider } from 'react-redux'
import React from "react";
import Router from './Router'
import store from './store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App
