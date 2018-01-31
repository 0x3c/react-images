import { combineReducers } from 'redux'
import sidebarReducer from './sidebarReducer'
import galleryReducer from './galleryReducer'
import mainReducer from './mainReducer'

/* Main reducer */
const reducer=combineReducers(
    {
        sidebarStatus:sidebarReducer,
        galleryStatus:galleryReducer,
        main:mainReducer,
    }
)
export default reducer;