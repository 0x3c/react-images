import { DATA_IMG_FAILED, DATA_IMG_SUCCESS, DATA_IMG_FETCHING } from 'actions'
const galleryReducer = (galleryStatus = {}, action) => {
    switch (action.type) {
        case (DATA_IMG_FETCHING):
            return Object.assign({}, galleryStatus, {
                isFetching: action.payload
            })
        case (DATA_IMG_SUCCESS):
            return Object.assign({}, galleryStatus, {
                isFetching: false,
                resp: action.payload, 
                totalNum:action.payload.totalNum,                                   // 总数
                img_list:action.payload.imgs.slice(0,action.payload.returnNumber) // 返回图片数组多一个，需切割
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