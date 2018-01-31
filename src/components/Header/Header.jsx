import React from 'react'
import './header.less'
import FontAwesome from 'react-fontawesome'

export default class Header extends React.Component{
    render(){
        const { title, handleShowSidebar } =this.props;
        return(
            
            <div className="header-warpper">
                <span className="header-menu" onClick={handleShowSidebar}>
                    <FontAwesome name="list-ul" />
                </span>
                <div className="header-title">
                    {title}
                </div>
                <div className="header-search">
                <FontAwesome name="search" />
                </div>
            </div>
        )
    }
}