import React from 'react'
import { withRouter } from 'react-router'

import Waterfull from 'components/Waterfull'
import './gallery.less'


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.getPicEx = this.getPicEx.bind(this);
    }
    // 从 redux 中获取 url 相关信息，凑成完成 url ，并获取数据
    getPicEx(next_col) {
        const { request_rn, request_pn, handleDataPic } = this.props;
        const cur_url = typeof next_col === 'string' ? next_col : this.props.location.state.req_col;
        let url;
        if (this.props.location.search.length > 0) {
            // 这是搜索
            // console.log('搜索' + ' ' + this.props.location.search+ ' ' + request_pn)
            const word = this.props.location.state.req_col;
            url = `/search/avatarjson?tn=resultjsonavatarnew&ie=utf-8&word= ${word} &pn=${request_pn}&rn=${request_rn}`;
        } else {
            // console.log(cur_url + ' ' + request_pn)
            url = `/data/imgs?col=${cur_url}&tag=全部&sort=1&pn=${request_pn}&rn=${request_rn}&p=channel&from=1`;
        }

        handleDataPic(url);
    } 

    componentWillMount() {
        // 准备挂载,获取当前 col /关键词,并更新到redux'
        const { handleInitUrl } = this.props;
        // console.log(this.props.location)
        handleInitUrl(this.props.location.state.req_col)
    }
    componentDidMount() {
        // console.log('挂载完毕,获取图片信息ing...')
        const { handleInitUrl } = this.props;
        const next_col = this.props.location.state.req_col;
        handleInitUrl(next_col);
        this.getPicEx()
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 重复点击相同路由地址，不更新渲染
        if (nextProps.location.pathname === this.props.location.pathname && nextProps.location.key !== this.props.location.key) {
            console.log('当前页为所在页')
            return false;
        }
        // 路由改变
        // if (nextProps.location.pathname !== this.props.location.pathname && nextProps.location.key !== this.props.location.key) {
        //     // 初始化 url 信息
        //     const { handleInitUrl } = this.props;
        //     const next_col = nextProps.location.state.req_col;
        //     console.log('---------------------------------')
        //     console.log('next component:'+next_col)
        //     handleInitUrl(next_col);
        //     this.getPicEx(next_col);
        //     return true;
        // }
        // 其它改变 则放行
        return true;

    }
    componentWillReceiveProps(nextProps) {
        // console.log('props改变！')
    }
    render() {
        const { totalNum, img_list, heightArr, column, startIndex, endIndex } = this.props;
        const { handleDomIndex, forbidRender } = this.props;
        const { need_update, need_render } = this.props;

        return (
            <div className="gallery-container" ref='container'>
                <Waterfull img_list={img_list} heightArr={heightArr} column={column}
                    need_render={need_render} startIndex={startIndex} endIndex={endIndex}
                    need_update={need_update} totalNum={totalNum}
                    forbidRender={forbidRender}
                    handleMorePic={this.getPicEx} handleDomIndex={handleDomIndex} />
            </div>
        )
    }
}
export default withRouter(Gallery)