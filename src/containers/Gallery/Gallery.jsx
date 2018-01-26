import { connect } from 'react-redux'

import { getData } from 'actions'
import Gallery from 'components/Gallery'

/* 容器组件,包装 Gallery UI */


/* state 映射到 props,订阅 state 部分属性,订阅属性更新则重新渲染 */
const mapStateToProps = (state) => {
        return {
            title: state.galleryStatus.focus,
            count: state.galleryStatus.count,
            img_list: state.galleryStatus.img_list,
           
    };
};

/* 绑定 dispatch 映射到 ui */
const mapDispatchToProps = (dispatch) => {
    return {

        // 发送 获取类别 Action
        handleInitDataSort:()=>{
            dispatch(getData('../sort.json'));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);