import { connect } from 'react-redux'

import { hideSidebar, getData } from 'actions'
import SideBar from 'components/SideBar'

/* 容器组件,包装 SideBar UI */


/* state 映射到 props,订阅 state 部分属性,订阅属性更新则重新渲染 */
const mapStateToProps = (state) => {
    return {
            focus: state.sidebarStatus.focus,
            dataSort: state.sidebarStatus.data_sort
    };
};

/* 绑定 dispatch 映射到 ui */
const mapDispatchToProps = (dispatch) => {
    return {
        // 发送 隐藏侧栏 Action
        handleHideSidebar: () => {
            dispatch(hideSidebar());
        },
        // 发送 获取类别 Action
        handleInitDataSort:()=>{
            dispatch(getData('../sort.json'));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)