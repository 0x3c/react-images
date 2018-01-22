import { SHOW_SIDEBAR, HIDE_SIDEBAR, GET_DATA_SORT, DATA_FAILED, DATA_SUCCESS, DATA_FETCHING } from 'actions'
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

        case DATA_FETCHING:
            return Object.assign({}, sidebarStatus,
                {
                    data_sort: action.payload
                });
        case DATA_SUCCESS:
            return Object.assign({}, sidebarStatus,
                {
                    data_sort: action.payload.data
                });
        case DATA_FAILED:
            return Object.assign({}, sidebarStatus,
                {
                    data_sort: action.payload
                });
        default:
            return sidebarStatus;
    }
}
export default sidebarReducer;