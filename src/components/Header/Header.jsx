import React from 'react'
import './header.less'
import FontAwesome from 'react-fontawesome'

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hide:null
        }
    }
    render(){
        const { handleShowSidebar } =this.props;
        return(
            
            <div className={true ? "header-warpper header-focus" : "header-warpper header-blur"}>
                <span className="header-menu-icon" onClick={handleShowSidebar}>
                    <FontAwesome name="list-ul" />
                </span>
            </div>
        )
    }
}