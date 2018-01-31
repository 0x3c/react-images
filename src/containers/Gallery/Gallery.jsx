import { connect } from 'react-redux'

import { getImgData } from 'actions'
import Gallery from 'components/Gallery'

/* 容器组件,包装 Gallery UI */


/* state 映射到 props,订阅 state 部分属性,订阅属性更新则重新渲染 */
const mapStateToProps = (state) => {
        return {
            totalNum: state.galleryStatus.totalNum,
            img_list: state.galleryStatus.img_list,
           
    };
};

/* 绑定 dispatch 映射到 ui */
const mapDispatchToProps = (dispatch) => {
    return {
        // 发送 获取类别下图片信息 Action
        handleDataPic:(url)=>{
            dispatch(getImgData(url));
        } 
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);