import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

// 初始 state 状态 
const initState = {
    sidebarStatus: {
        focus: false,
        data_sort: []
    }
}
// 日志中间件

/* 创建 stote */
const store = createStore(reducer, initState,
    applyMiddleware(thunk, logger)
)

export default store;