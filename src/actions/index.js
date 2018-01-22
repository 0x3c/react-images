export const SHOW_SIDEBAR = Symbol("SHOW_SIDEBAR");
export const HIDE_SIDEBAR = Symbol("HIDE_SIDEBAR");
export const GET_DATA_SORT = Symbol("GET_DATA_SORT");


export const DATA_FETCHING = Symbol("DATA_FETCHING");
export const DATA_SUCCESS = Symbol("DATA_SUCCESS");
export const DATA_FAILED = Symbol("DATA_FAILED");



/* Actions */

// 显示侧栏
export const showSidebar = () => {
    return {
        type: SHOW_SIDEBAR,
        payload: { focus: true }
    };
}
// 隐藏侧栏
export const hideSidebar = () => {
    return {
        type: HIDE_SIDEBAR,
        payload: { focus: false }
    };
}
// 获取分类标签数据
export const getSortData = () => {
    return {
        type: GET_DATA_SORT,
        payload: { focus: false }
    };
}

// 通用 Action

// 开始请求
export const fetching = (url) => {
    return {
        type: DATA_FETCHING,
        payload: url
    }
}
// 请求成功
export const fetchSuccess=(data)=>{
    return {
        type: DATA_SUCCESS,
        payload: data
    }
}
// 请求失败
export const fetchFail=(err)=>{
    return {
        type: DATA_FAILED,
        payload: err
    }
}
// Action Creator 返回一个函数，用于thunk的异步
export const getData = (url) => (dispatch, getState) => {
    // 开始请求
    dispatch(fetching(url));    
    return fetch(url)
    .then(resp=>resp.json())
    .then(json=>dispatch(fetchSuccess(json)))
    .catch(err=>dispatch(fetchFail(err)));
}
