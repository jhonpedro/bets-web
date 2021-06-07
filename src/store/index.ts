import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers'

const persistedReducer = persistReducer({ key: '@tgl', storage }, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools())

// @ts-ignore
export default { root: store, persistor: persistStore(store) }

export type RootState = ReturnType<typeof store.getState>
