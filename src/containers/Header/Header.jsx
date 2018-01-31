import { connect } from 'react-redux'
import { showSidebar } from 'actions'
import Header from 'components/Header'

/* state 映射到 props,订阅 state 部分属性,订阅属性更新则重新渲染 */
const mapStateToProps = (state) => {
    return { title: state.main.title };
};

/* 绑定 dispatch 映射到 ui */
const mapDispatchToProps = (dispatch) => {
    return {
        handleShowSidebar: () => {
            dispatch(showSidebar());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header)