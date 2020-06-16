import {createStore} from 'redux'
import rootReducer from '../Redux/AppRedux'

const store = createStore (rootReducer)

export default store;