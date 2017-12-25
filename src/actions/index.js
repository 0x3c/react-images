export const SHOW_SIDEBAR=Symbol("SHOW_SIDEBAR");
export const HIDE_SIDEBAR=Symbol("HIDE_SIDEBAR");


export const showSidebar=()=>{
    return{
        type: SHOW_SIDEBAR,
        payload:{focus:true}
    };
}
export const hideSidebar=()=>{
    return{
        type: HIDE_SIDEBAR,
        payload:{focus:false}
    };
}