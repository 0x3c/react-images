import { DATA_IMG_FAILED, DATA_IMG_SUCCESS, DATA_IMG_FETCHING } from 'actions'
import { INIT_URL, UPDATA_DOM_INDEX, FORBID_RENDER } from 'actions/galleryAction'
const galleryReducer = (galleryStatus = {}, action) => {
    switch (action.type) {


        // 禁止渲染
        case (FORBID_RENDER):
            return Object.assign({}, galleryStatus, {
                need_render: action.payload.need_render,
            })
        // 更新操作 DOM 索引
        case (UPDATA_DOM_INDEX):
            return Object.assign({}, galleryStatus, {
                startIndex: action.payload.startIndex,
                endIndex: action.payload.endIndex,
            })
        // 更新 当前分类类别名，初始化指针,及相关状态      
        case (INIT_URL):
            return Object.assign({}, galleryStatus, {
                request_col: action.payload.request_col,
                request_pn: 0,
                img_list: [],
                last_list: [],
                startIndex:0,
                endIndex:0,
                resp: {},
                totalNum: 0,
                heightArr: [0, 0, 0],
            })

        /* 获取数据 */
        case (DATA_IMG_FETCHING):
            const request_pn = galleryStatus.request_pn + galleryStatus.request_rn;   // 指针后移
            return Object.assign({}, galleryStatus, {
                isFetching: action.payload,
                request_pn, //当前索引指针后移
            })
        case (DATA_IMG_SUCCESS):
            const { img_list }=galleryStatus;
            const last_list = action.payload.imgs.slice(0, action.payload.returnNumber);// 返回图片数组多一个，需切割

            img_list.concat()
            return Object.assign({}, galleryStatus, {
                isFetching: false,
                resp: action.payload,
                last_list: last_list,                                    // 最近一次请求到的图片列表
                totalNum: action.payload.totalNum,                          // 总数
                img_list: img_list.concat(last_list),                    // 返回 当前图片列表和请求到的图片列表 
                need_update: true,                           // 获取完数据，需要更新 dom  
                need_render: true,
            })
        case (DATA_IMG_FAILED):
            return Object.assign({}, galleryStatus, {
                isFetching: false,
                resp: action.payload
            })
        default:
            return galleryStatus;
    }
}
export default galleryReducer;