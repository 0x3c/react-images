import React from 'react'
import './header.less'
import { connect } from 'react-redux'
import {SIDEBAR_UI_TOGGLE} from 'actions'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hide:null
        }
        this.handleMenu=this.handleMenu.bind(this);
    }
    handleMenu(){
        const hide=this.state.hide ? null : true;
        this.setState({hide})
    }
    render(){
        const { showSideBar } =this.props;
        return(
            <div className="header-warpper" style={ this.state.hide && {"right":"-124px"}}>
                <button onClick={showSideBar}>菜单</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showSideBar: () => {
            dispatch({
                type:SIDEBAR_UI_TOGGLE,
            });
        }
    };
};
export default connect(null, mapDispatchToProps)(Header);