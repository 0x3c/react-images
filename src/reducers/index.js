import { combineReducers } from 'redux'
import sidebarReducer from './sidebarReducer'

const reducer=combineReducers(
    {
        sidebarStatus:sidebarReducer
    }
)
export default reducer;