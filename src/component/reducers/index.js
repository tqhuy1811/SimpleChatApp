import { combineReducers } from 'redux'

import NameReducer from './name_reducer'

const rootReducer = combineReducers({
    name:NameReducer
})
export default rootReducer