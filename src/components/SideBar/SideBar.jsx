import React from 'react'
import './sidebar.less'

export default class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        const { focus,handleHideSidebar } = this.props;
        return(
            <div className={focus ? "sidebar-container":"sidebar-container sidebar-container-blur"}>
                <div className="sidebar-user">
                    <button onClick={handleHideSidebar}>隐藏</button>
                </div>
                <div className="sidebar-menu">

                </div>
                <div className="sidebar-footer">

                </div>
            </div>
        )
    }
}