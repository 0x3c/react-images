export const SHOW_SIDEBAR = Symbol("SHOW_SIDEBAR");
export const HIDE_SIDEBAR = Symbol("HIDE_SIDEBAR");
export const GET_DATA_SORT = Symbol("GET_DATA_SORT");


export const DATA_SORT_FETCHING = Symbol("DATA_SORT_FETCHING");
export const DATA_SORT_SUCCESS = Symbol("DATA_SORT_SUCCESS");
export const DATA_SORT_FAILED = Symbol("DATA_SORT_FAILED");

export const DATA_IMG_FETCHING = Symbol("DATA_IMG_FETCHING");
export const DATA_IMG_SUCCESS = Symbol("DATA_IMG_SUCCESS");
export const DATA_IMG_FAILED = Symbol("DATA_IMG_FAILED");

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

/* 请求分类标签数据 Action */
// 开始请求
export const fetchingSort = (url) => {
    return {
        type: DATA_SORT_FETCHING,
        payload: url
    }
}
// 请求成功
export const fetchSortSuccess=(data)=>{
    return {
        type: DATA_SORT_SUCCESS,
        payload: data
    }
}
// 请求失败
export const fetchSortFail=(err)=>{
    return {
        type: DATA_SORT_FAILED,
        payload: err
    }
}

/* 请求图片数据 Action */
// 开始请求
export const fetchingImg = (url) => {
    return {
        type: DATA_IMG_FETCHING,
        payload: true
    }
}
// 请求成功
export const fetchImgSuccess=(data)=>{
    return {
        type: DATA_IMG_SUCCESS,
        payload: data
    }
}
// 请求失败
export const fetchImgFail=(err)=>{
    return {
        type: DATA_IMG_FAILED,
        payload: err,
    }
}


/* Action Creator 返回一个函数，用于thunk的异步 */

// 获取分类标签数据
export const getSortData = (url) => (dispatch, getState) => {
    // 开始请求
    dispatch(fetchingSort(url));    
    return fetch(url)
    .then(resp=>resp.json())
    .then(json=>dispatch(fetchSortSuccess(json)))
    .catch(err=>dispatch(fetchSortFail(err)));
}

// 获取图片数据
export const getImgData = (url) => (dispatch, getState) => {
    // 开始请求
    dispatch(fetchingImg(url));    
    return fetch(url)
    .then(resp=>resp.json())
    .then(json=>dispatch(fetchImgSuccess(json)))
    .catch(err=>dispatch(fetchImgFail(err)));
}
