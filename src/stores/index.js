import { createStore } from 'redux'
import reducer from '../reducers'

// 初始 state 状态 
const initState={
    sidebarStatus:{
        focus:false,
    }
}

/* 创建 stote */
const store=createStore(reducer,initState)

export default store;