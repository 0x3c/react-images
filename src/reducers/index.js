import { combineReducers } from 'redux'
import sidebarReducer from './sidebarReducer'
import galleryReducer from './galleryReducer'

/* Main reducer */
const reducer=combineReducers(
    {
        sidebarStatus:sidebarReducer,
        galleryStatus:galleryReducer
    }
)
export default reducer;