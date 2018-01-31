import React from 'react'

import './waterfull.less'

const MyPic = (props) => (
    <div className="waterfull-item">
        <img src={props.imgUrl} alt={props.title} />
        <p>{props.title}</p>
    </div>
)

export default class Waterfull extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            heightArr:Array.apply(null,Array(2)).map(()=>0)
        }
        this.scroll = this.scroll.bind(this)
        this.layout = this.layout.bind(this)
    }
    layout(img_list) {
        if (!img_list) { return null }
        const heightArr = [0, 0];
        let top, left, id;
        return img_list.map((item) => {
            if (id) {
                console.log(id)
            }
            if (heightArr[0] > heightArr[1]) {
                // 排在第二个
                top = heightArr[1] + 'px'
                left = '50%';
            } else {
                // 第一个
                top = heightArr[0] + 'px'
                left = 0;
            }
            id = item.id;
            return <MyPic ref={item.id} key={item.id} style={{ top, left }}
                title={item.title} imgUrl={item.shareUrl} />
        })

    }
    scroll() {
        console.log(this.refs.waterfull.parentNode.scrollHeight)
    }
    componentDidMount() {
        // 初始化参数
        this.refs.waterfull.parentNode.addEventListener('scroll', this.scroll)

    }
    componentWillUnmount() {
        this.refs.waterfull.parentNode.removeEventListener('scroll', this.scroll)
    }
    componentDidUpdate() {
        // console.log(this.refs.waterfull.style.top)
        console.log(this.state.heightArr)
    }
    render() {
        // column，列数
        // img_list，图片地址数组
        // handleGetData,获取更多数据
        

        const { column, img_list, handleGetData } = this.props;
        const List = img_list.map((item) => (
            <MyPic key={item.id} title={item.title} imgUrl={item.shareUrl} />
        ))
        // const l = this.layout(img_list)
        return (
            <div className="waterfull" ref='waterfull'>
                {List}
            </div>
        )
    }
}