import React from 'react'
import { withRouter } from 'react-router'


import './gallery.less'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this);
    }
    increase() {
        const count = ++this.state.count;
        this.setState({
            count
        })
    }
    componentWillMount() {
        console.log('准备挂载')
    }
    componentDidMount() {
        // console.log(this.props.history.location.state)
        console.log('挂载完毕')
    }
    componentWillUpdate() {
        console.log('准备更新')
    }
    componentDidUpdate() {
        console.log('更新完毕')
    }
    shouldComponentUpdate(nextProps, nextState) {

        // 重复点击相同路由地址，不更新渲染
        if (nextProps.location.pathname === this.props.location.pathname && nextProps.location.key !== this.props.location.key) {
            console.log('当前页为所在页')
            return false;
        } else {
            // 其它改变 则放行
            return true;
        }

    }
    componentWillReceiveProps(nextProps) {
        console.log('props改变！')
    }
    componentWillUnmount() {
        console.log('准备卸载')
    }
    render() {
        console.log(`我被渲染了!  history: ${this.props.history}`)
        return (
            <div className="gallery-container">
                <div><button onClick={this.increase}>&emsp;+1&emsp;</button></div>
                <div>{this.state.count}</div>
            </div>
        )
    }
}
export default withRouter(Gallery)