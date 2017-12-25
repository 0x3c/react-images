export const SIDEBAR_UI_TOGGLE="Sidebar_Ui_Toggle";
export const HEADER_UI_TOGGLE="Header_Ui_Toggle";

export const uiSidebarToggle=()=>{
    return{
        type: SIDEBAR_UI_TOGGLE,
    };
}
export const uiHeaderToggle=(isShow)=>{
    return{
        type: HEADER_UI_TOGGLE,
        isShow,
    };
}
