import { SHOW_SIDEBAR, HIDE_SIDEBAR, GET_DATA_SORT } from 'actions'
const sidebarReducer = (sidebarStatus = {}, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return Object.assign({}, sidebarStatus,
                {
                    focus: action.payload.focus
                });
        case HIDE_SIDEBAR:
            return Object.assign({}, sidebarStatus,
                {
                    focus: action.payload.focus
                });
        case GET_DATA_SORT:
            return Object.assign({}, sidebarStatus,
                {
                    data_sort: action.payload.focus
                });
        default:
            return sidebarStatus;
    }
}
export default sidebarReducer;