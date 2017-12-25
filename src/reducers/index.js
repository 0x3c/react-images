import {
    SIDEBAR_UI_TOGGLE,
    HEADER_UI_TOGGLE
} from 'actions'
const reducer=(state,action)=>{
    console.log(state);
    const sidebarToggle=state.sidebarToggle;
    switch(action.type){
        case SIDEBAR_UI_TOGGLE:
            return Object.assign({},state,{sidebarToggle: !sidebarToggle});
        case HEADER_UI_TOGGLE:
            return{
                    show: true
        }    
        default:
            return state
    }
}
export default reducer;