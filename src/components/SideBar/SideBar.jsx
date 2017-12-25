import React from 'react'
import './sidebar.less'

export default class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        const { sidebarToggle,showSideBar } = this.props;
        return(
            <div className={!sidebarToggle ? "sidebar-container sidebar-container-onHide":"sidebar-container"}>
                <div className="sidebar-user">
                    <button onClick={showSideBar}>隐藏</button>
                </div>
                <div className="sidebar-menu">

                </div>
                <div className="sidebar-footer">

                </div>
            </div>
        )
    }
}