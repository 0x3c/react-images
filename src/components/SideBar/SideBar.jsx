import React from 'react'
import PropTypes from 'prop-types'

import Hammer from 'react-hammerjs'
import {NavLink} from 'react-router-dom'
import './sidebar.less'
import avatar from '../../common/img/avatar.jpeg'
// const LiLink=(props)=>(
//         <NavLink to={props.to} className="menu-normal" activeClassName="menu-active">
//             <li>
//                 {props.item}
//             </li>
//         </NavLink>
// )
const list=[{name:"首页",link:"/"},{name:"美女",link:"/meinv"},{name:"动物",link:"/dongwu"},]

export default class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        const { focus,handleHideSidebar } = this.props;
        
        const li=list.map((item,key)=>(
            <NavLink to={item.link} className="menu" activeClassName="menu-active" exact strict key={key} >
                {item.name}
            </NavLink>
        ))
        return(
            <Hammer onSwipeLeft={handleHideSidebar} >
                <div className={focus ? "sidebar-container":"sidebar-container sidebar-container-blur"}>
                    {/* 头像区 */}
                    <div className="sidebar-user">
                        <div className="user-warpper">
                            <div className="user-avatar">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="user-name">username</div>
                        </div>
                    </div>
                    {/* 菜单区 */}
                    <ul className="sidebar-menu">
                        {/* 导航连接 */}
                        {li}
                    </ul>
                </div>
            </Hammer>
        )
    }
}
SideBar.propTypes={
    focus:PropTypes.bool.isRequired,
    handleHideSidebar:PropTypes.func.isRequired,
}