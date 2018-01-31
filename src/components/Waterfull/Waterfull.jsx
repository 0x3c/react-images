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
        this.state = {
            heightArr: Array.apply(null, Array(2)).map(() => 0),
            isLoaded: false,
            imgList: [],
            loadedTimer: 0,
            startIndex: 0,
            endIndex: 0,
            shouldUpdate: true,
        }
        this.scroll = this.scroll.bind(this)
        this.layout = this.layout.bind(this)
    }
    layout(img_list) {
        // if (!img_list) { return null }
        let { startIndex, endIndex, heightArr } = this.state;
        endIndex = img_list.length;
        img_list.slice(startIndex, endIndex).map((item) => {
            const myHeight = item.offsetHeight;
            let top, left;
            if (heightArr[0] > heightArr[1]) {
                // 排在第二个
                top = heightArr[1] + 'px'
                left = '50%';
                heightArr[1] += myHeight;
            } else {
                // 第一个
                top = heightArr[0] + 'px'
                left = 0;
                heightArr[0] += myHeight;
                console.log(myHeight + '->' + heightArr[0])
            }

            item.style.top = top;
            item.style.left = left;
            item.style.visibility = 'visible';
        })
        startIndex = endIndex;
        this.setState({ startIndex, endIndex, heightArr, shouldUpdate: false });
    }
    scroll() {
        let max = 0;
        this.state.heightArr.forEach(element => {
            if (element > max) {
                max = element;
            }
        });
        console.log(this.refs.waterfull.parentNode.scrollTop+window.innerHeight)
        console.log(this.refs.waterfull.parentNode.scrollHeight)
        if(this.refs.waterfull.parentNode.scrollTop>=this.refs.waterfull.parentNode.scrollHeight-window.innerHeight){
            // 加载图片
            console.log('我加载了')
        }
        // console.log(document.documentElement.clientHeight)
        // console.log(window.innerHeight)
    }
    componentDidMount() {
        // 初始化参数
        this.refs.waterfull.parentNode.addEventListener('scroll', this.scroll)

    }
    shouldComponentUpdate(nextProps, nextState) {
        // 若 shouldUpdate 为 false ，则不更新
        if (!nextState.shouldUpdate) {
            nextState.shouldUpdate = true;
            return false;
        }
        return true;
    }
    componentWillUnmount() {
        this.refs.waterfull.parentNode.removeEventListener('scroll', this.scroll)
    }
    componentWillReceiveProps(nextProps) {

    }
    componentDidUpdate() {
        // console.log(this.refs.waterfull.style.top)
        // console.log(this.refs.waterfull.getElementsByTagName('img'));
        const imgCollection = this.refs.waterfull.getElementsByTagName('img');
        const imgList = [];
        for (let i of imgCollection) {
            imgList.push(i)
        }
        console.log(imgList)

        let { loadedTimer, isloaded } = this.state;
        loadedTimer = setInterval(() => {
            // 查询图片是否加载完成
            for (let i = imgList.length - 1; i >= 0; i--) {
                if (imgList[i].complete) {
                    imgList.pop();
                }
            }

            // 加载完毕
            if (imgList.length === 0) {
                isloaded = true;
            }
            if (isloaded) {
                // 加载完成,设置高度
                const itemList = [];
                for (let i of this.refs.waterfull.children) {
                    itemList.push(i)
                }
                this.layout(itemList);
                clearInterval(loadedTimer);
            }
        }, 50)
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