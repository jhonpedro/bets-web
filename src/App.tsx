import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes'
import GlobalStyle from './assets/global'
import store from './store'

function App() {
  return (
    <Provider store={store.root}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
