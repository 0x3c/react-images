import React from 'react'
// import { withRouter } from 'react-router-dom'
import './header.less'
import FontAwesome from 'react-fontawesome'

class Header extends React.Component {
    render() {

        const { handleShowSidebar, request_col } = this.props;
        return (
            <div className="header-warpper">
                <span className="header-menu" onClick={handleShowSidebar}>
                    <FontAwesome name="list-ul" />
                </span>
                <div className="header-title">
                    {request_col}
                </div>
                <div className="header-search" >
                    {/* <FontAwesome name="search" /> */}
                </div>
            </div>
        )
    }
}

export default Header;