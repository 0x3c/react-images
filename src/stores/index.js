import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

// 初始 state 状态 
const initState = {
    sidebarStatus: {
        focus: false,
        data_sort: []
    },
    galleryStatus:{
        title:'首页',               // 标题
        count:0,                // 总数
        img_list:[],            // 图片信息列表
        need_updata:false,      // 有新数据需要渲染
    }
}
// 日志中间件

/* 创建 stote */
const store = createStore(reducer, initState,
    applyMiddleware(thunk, logger)
)

export default store;