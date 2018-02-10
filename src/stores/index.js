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
        // UI状态
        isFetching:false,           // 是否正在获取数据
        need_rrender: false,         // 是否有新数据需要渲染
        need_layout:false,          // 需要布局
        need_update: false,         // 是否有新数据需要更新
        img_loaded: false,        // 图片是否载入完成
        startIndex:0,               //操作 dom
        endIndex:0,                 //操作 dom
        
        //瀑布流
        column:2,                   // 默认两列
        heightArr:[0,0],               // 默认两列初始高度

        // 请求数据
        resp:{},                    // 获取内容
        totalNum: 0,                // 总数
        return_Number:10,
        img_list: [],               // 总图片信息列表
        last_list:[],               // 最近一次获取的图片列表      
        request_rn: 10,          // url 请求参数, 默认请求 10 个图片数据
        requeest_pn: 0,           // url 请求参数, 默认请求数据的位置从索引为 0 
        request_col: "美女",      // url 请求参数, 默认类别为 "美女"
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