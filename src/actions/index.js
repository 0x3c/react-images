export const SHOW_SIDEBAR = Symbol("SHOW_SIDEBAR");
export const HIDE_SIDEBAR = Symbol("HIDE_SIDEBAR");
export const GET_DATA_SORT = Symbol("GET_DATA_SORT");

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
// export default 