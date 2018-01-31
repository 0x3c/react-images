import React from 'react'
import { withRouter } from 'react-router'

import Waterfull from 'components/Waterfull'
import './gallery.less'

class Gallery extends React.Component {
    componentWillMount() {
        // console.log('准备挂载')
    }
    componentDidMount() {
        // console.log(this.props.history.location.state)
        // console.log('挂载完毕')
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
        const { totalNum, img_list, handleDataPic } = this.props;

        const imgs = totalNum > 0 ? img_list.map((item) => (
            <div key={item.id} className="img-box">
                <img src={item.shareUrl} alt={item.title} />
                <p> {item.desc} </p>
            </div>
        ))
            : null
        return (
            <div className="gallery-container">
                <div>
                    <button onClick={() => { handleDataPic(`/data/imgs?col=${this.props.location.state.req_col}&tag=全部&sort=0&pn=10&rn=10&p=channel&from=1`) }}>&emsp;+1&emsp;</button>
                </div>
                <h2> 共{totalNum}张图片 </h2>
                {/* {imgs} */}
                <Waterfull img_list={img_list} />
            </div>
        )
    }
}
export default withRouter(Gallery)