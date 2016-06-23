
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { logger } from '../middleware'
import rootReducer from '../reducers'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const middlewares = []
  if (window.devToolsExtension) middlewares.push(logger)
  middlewares.push(thunk)

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
