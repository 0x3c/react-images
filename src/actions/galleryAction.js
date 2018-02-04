export const CHANGE_TITLE = Symbol('CHANGE_TITLE');
export const LAYOUT_IMG = Symbol('LAYOUT_IMG');
export const RENDER_IMG = Symbol('RENDER_IMG');
export const IMG_LOADED = Symbol('IMG_LOADED');
export const INIT_URL = Symbol('INIT_URL');
export const UPDATA_DOM_INDEX = Symbol('UPDATA_DOM_INDEX');
export const FORBID_RENDER = Symbol('FORBID_RENDER');

// 禁止渲染
export const forbidRender=()=>{
    return {
        type:FORBID_RENDER,
        payload:{
            need_render:false,
        }
    }
}


// 更新操作 dom 的索引
export const updataDomIndex=(startIndex,endIndex)=>{
    return {
        type:UPDATA_DOM_INDEX,
        payload:{startIndex,endIndex}
    }
}

// url类别改变，初始化相关状态
export const initUrl = (col) => {
    return {
        type: INIT_URL,
        payload: { request_col: col }
    }
}

// 渲染图片，并发送渲染结束
export const renderComplete = () => {
    return {
        type: RENDER_IMG,
        payload: { need_render: false }
    }
}

// 图片加载完成
export const imgComplete = () => {
    return {
        type: IMG_LOADED,
        payload: { img_loaded: true }
    }
}
// 瀑布流布局完成
export const layoutComplete = () => {
    return {
        type: LAYOUT_IMG,
        payload: { need_layout: false }
    }
}