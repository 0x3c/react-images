import React from 'react'

import './container.less'

export default class Container extends React.Component {
    render() {
        // 显示/隐藏 SideBar -> 显示/隐藏 wapper 
        // 点击 warpper 隐藏 SideBar/warpper
        const { focus, handleHideSidebar } = this.props
        const childs = React.Children.map(this.props.children, item => item)
        return (
            <div className="container" >
                {childs}

                {
                    focus &&
                    <div className="warpper" onClick={handleHideSidebar}></div>
                }

            </div>
        )
    }
}