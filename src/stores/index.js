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
    galleryStatus: {
        isFetching:false,            // 正在获取数据
        resp:{},                     // 获取内容
        totalNum: 0,                 // 总数
        return_Number:10,
        img_list: [],                // 图片信息列表
        need_updata: false,          // 有新数据需要渲染
        request_limit: 10,           // url 请求参数, 默认请求 10 个图片数据
        request_start: 0,            // url 请求参数, 默认请求数据的位置从索引为 0 
        request_title: "美女",         // url 请求参数, 默认类别为 "美女"
    },
    main: {
        title: '首页',               // 当前标题
    }
}
// 日志中间件

/* 创建 stote */
const store = createStore(reducer, initState,
    applyMiddleware(thunk, logger)
)

export default store;