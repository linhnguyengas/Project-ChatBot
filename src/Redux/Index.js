import {persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/es/storage'

import {reducer as AppReducer} from './AppRedux'

const config = {
    key: 'root',
    storage
}

export default persistCombineReducers (config, {
    app: AppReducer,
})