import { SHOW_SIDEBAR, HIDE_SIDEBAR, GET_DATA_SORT, DATA_FAILED, DATA_SUCCESS, DATA_FETCHING } from 'actions'
const galleryReducer = (galleryStatus = {}, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return Object.assign({}, galleryStatus,
                {
                    focus: action.payload.focus
                });
        default:
            return galleryStatus;
    }
}
export default galleryReducer;