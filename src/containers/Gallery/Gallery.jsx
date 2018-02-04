import { connect } from 'react-redux'

import { getImgData } from 'actions'
import { initUrl, updataDomIndex,forbidRender } from 'actions/galleryAction.js'
import Gallery from 'components/Gallery'

/* 容器组件,包装 Gallery UI */


/* state 映射到 props,订阅 state 部分属性,订阅属性更新则重新渲染 */
const mapStateToProps = (state) => {
    return {
        totalNum: state.galleryStatus.totalNum,
        img_list: state.galleryStatus.img_list,
        last_list: state.galleryStatus.last_list,
        heightArr: state.galleryStatus.heightArr,
        column: state.galleryStatus.column,

        need_render: state.galleryStatus.need_render,
        need_update: state.galleryStatus.need_update,
        img_complete: state.galleryStatus.img_complete,

        startIndex: state.galleryStatus.startIndex,
        endIndex: state.galleryStatus.endIndex,
        // url相关
        request_rn: state.galleryStatus.request_rn,
        request_pn: state.galleryStatus.request_pn,
        // request_col: state.galleryStatus.request_col,
    };
};

/* 绑定 dispatch 映射到 ui */
const mapDispatchToProps = (dispatch) => {
    return {
        // 发送 获取类别下图片信息 Action
        handleDataPic: (url) => {
            dispatch(getImgData(url));
        },
        // 更新类别名
        handleInitUrl: (url) => {
            dispatch(initUrl(url))
        },
        // 更新 DOM 索引
        handleDomIndex:(start,end)=>{
            dispatch(updataDomIndex(start,end))
        },
        // 禁止渲染 flag
        forbidRender:()=>{
            dispatch(forbidRender())
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);