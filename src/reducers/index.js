import { combineReducers } from 'redux'
import sidebarReducer from './sidebarReducer'

/* Main reducer */
const reducer=combineReducers(
    {
        sidebarStatus:sidebarReducer
    }
)
export default reducer;