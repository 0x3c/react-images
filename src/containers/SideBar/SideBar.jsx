import { connect } from 'react-redux'

import { uiSidebarToggle } from 'actions'
import SideBar from 'components/SideBar'

/* 容器组件,包装 SideBar UI */


/* state 映射到 props,订阅 state 部分属性,订阅属性更新则重新渲染 */
const mapStateToProps = (state) => {
    return { sidebarToggle: state.sidebarToggle };
};

/* 绑定 dispatch 映射到 ui */
const mapDispatchToProps = (dispatch) => {
    return {
        showSideBar: () => {
            dispatch(uiSidebarToggle);
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)