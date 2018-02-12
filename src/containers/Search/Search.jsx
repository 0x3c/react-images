import { connect } from 'react-redux'

import Search from 'components/Search'
import { initUrl } from 'actions/galleryAction.js'

/* 容器组件,包装 SideBar UI */


/* state 映射到 props,订阅 state 部分属性,订阅属性更新则重新渲染 */
// const mapStateToProps = (state) => {
//     return {
//     };
// };

/* 绑定 dispatch 映射到 ui */
const mapDispatchToProps = (dispatch) => {
    return {
        // 更新类别名
        handleInitUrl: (url) => {
            dispatch(initUrl(url))
        },
    };
};
export default connect(null,mapDispatchToProps)(Search)