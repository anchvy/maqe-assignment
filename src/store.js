import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'

const middleware = applyMiddleware(thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeMiddleWare = composeEnhancers(middleware)

export default createStore(reducer, composeMiddleWare)
