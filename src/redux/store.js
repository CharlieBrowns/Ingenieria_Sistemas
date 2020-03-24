import { createStore, combineReducers, applyMiddleware } from 'redux'
import  thunk  from "redux-thunk"
import Projects from './reducers/projects'
import Events from './reducers/events'
import News from './reducers/news'

const reducer = combineReducers({
    Projects,
    Events,
    News
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store