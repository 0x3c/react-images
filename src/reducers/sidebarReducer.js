import { SHOW_SIDEBAR, HIDE_SIDEBAR } from 'actions'
const sidebarReducer=(sidebarStatus=null,action)=>{
    console.log(sidebarStatus)
    switch(action.type){
        case SHOW_SIDEBAR:
            return Object.assign( {},sidebarStatus,
                {
                    focus:action.payload.focus
            });
        case HIDE_SIDEBAR:
            return Object.assign( {},sidebarStatus,
                {
                    focus:action.payload.focus
            });
        default:
            return sidebarStatus;
    }
}
export default sidebarReducer;