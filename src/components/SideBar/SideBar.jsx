import React from 'react'
import PropTypes from 'prop-types'


import Hammer from 'react-hammerjs'
import { NavLink } from 'react-router-dom'
import './sidebar.less'
import avatar from '../../common/img/avatar.jpeg'

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {},
            data: []
        };
        this.callback = this.callback.bind(this);
    }
    callback(data) {
        console.log(data)
    }

    componentDidMount() {
        const { handleInitDataSort } = this.props;
        // 获取类别
        handleInitDataSort();
    }
    render() {
        const { dataSort, focus, handleHideSidebar } = this.props;


        const nav = ((typeof dataSort) === 'object' && dataSort.length > 0)
            ?
            dataSort.map((item, index) => (
                // req_col 为请求类别字段,req_title 为请求类别名称
                <NavLink key={index} to={{ pathname: item.subUrl, state: { req_col: item.col, req_title: item.col } }}
                    className="menu-normal" activeStyle={{ "backgroundColor": "lightblue" }}
                    onClick={handleHideSidebar} >
                    {item.col}
                </NavLink>
            ))
            :
            null;

        return (
            <Hammer onSwipeLeft={handleHideSidebar} >
                <div className={focus ? "sidebar-container" : "sidebar-container sidebar-container-blur"}>
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
                        <NavLink to={{ pathname: '/search', state: { req_title: '搜索' } }} className="menu-normal" activeStyle={{ "backgroundColor": "lightblue" }}
                            onClick={handleHideSidebar} >
                            搜索
                    </NavLink>
                        {/* 导航连接 */}
                        {nav}
                    </ul>
                </div>
            </Hammer>
        )
    }
}
SideBar.propTypes = {
    focus: PropTypes.bool.isRequired,
    handleHideSidebar: PropTypes.func.isRequired,
}