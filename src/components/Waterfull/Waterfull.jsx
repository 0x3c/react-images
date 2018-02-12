import React from 'react'

import './waterfull.less'
import FontAwesome from 'react-fontawesome'

const MyPic = (props) => (
    <div className="waterfull-item" style={{ width: 100 / props.column + '%' }}>
        <div className="item-warpper">
            <img src={props.imgUrl} alt={props.title} />
            <p>{props.title}</p>
            <div className='item-shadow'></div>
        </div>
    </div>
)

export default class Waterfull extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
        this.layout = this.layout.bind(this);
        this.allImgsIsComplete = this.allImgsIsComplete.bind(this);
        this.returnTop = this.returnTop.bind(this);
    }
    //  布局
    layout(img_list) {
        let { column, heightArr, startIndex, endIndex, handleDomIndex } = this.props;
        endIndex = img_list.length;
        // 从操作上次结束dom位置开始
        img_list.slice(startIndex, endIndex).map((item) => {
            const myHeight = item.offsetHeight;
            let top, left;
            const maxIndex = this.minIndexOfArr(heightArr);
            // 设置 样式属性
            top = heightArr[maxIndex] + 'px'
            left = (100 / column * maxIndex).toFixed(2) + '%';
            heightArr[maxIndex] += myHeight;
            item.style.top = top;
            item.style.left = left;
            item.style.visibility = 'visible';
        })
        startIndex = endIndex;
        handleDomIndex(startIndex, endIndex);
        // this.setState({ shouldUpdate: false });
    }
    // 无限加载,函数节流
    scroll() {
        let awit = false;
        return () => {
            const { heightArr, handleMorePic } = this.props;
            const minIndex = this.minIndexOfArr(heightArr)
            // 瀑布流中最低一栏高度
            const minHeight = heightArr[minIndex];
            // console.log(this.refs.waterfull.parentNode.scrollTop + window.innerHeight)
            // console.log(this.refs.waterfull.parentNode.scrollHeight)
            if (this.refs.waterfull.parentNode.scrollTop + window.innerHeight >= minHeight + 100) {
                // 不需要等待则加载图片并使其进入等待状态， 1s 后重置。
                if (!awit) {
                    awit = true;
                    handleMorePic();
                    setTimeout(() => {
                        awit = false;
                    }, 1000);
                }
                else {

                }

            }
        }
        // console.log(document.documentElement.clientHeight)
        // console.log(window.innerHeight)
    }
    // 返回数组中最小数的索引
    minIndexOfArr = (arr) => {
        if (!arr instanceof Array) {
            return new Error('参数必须为数组');
        }
        let index = 0, min = arr[0];
        arr.forEach((v, k) => {
            [min, index] = v < min ? [v, k] : [min, index];

        })
        return index;
    }
    // 判断图片是否全部加载完毕
    allImgsIsComplete() {
        // 获取所有img ElementCollection
        const imgCollection = this.refs.waterfull.getElementsByTagName('img');
        let loadedTimer = 0, isloaded = false;        //isloaded：图片是否加载完毕，loadedTimer:定时器
        const imgList = [];                     //Element 转换为数组保存
        for (let i of imgCollection) {
            imgList.push(i)
        }

        // console.log(imgList)
        // let { loadedTimer, isloaded } = this.state;

        loadedTimer = setInterval(() => {
            // console.log('加载完了吗?')
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
                setTimeout(() => {
                    this.layout(itemList);
                }, 300);
                clearInterval(loadedTimer);
            }

            // 查询图片是否加载完成           ,加载完成则移出数组
            for (let i = imgList.length - 1; i >= 0; i--) {
                if (imgList[i].complete) {
                    imgList.pop();
                }
            }
        }, 100)
    }

    // 回到顶部
    returnTop() {
        let top = this.refs.waterfullContainer.scrollTop;
        const y = top / 100;
        const timer = setInterval(() => {
            top -= y;
            if (top < 0) { top = 0 }
            this.refs.waterfullContainer.scrollTo(0, top);
            if (top === 0) {
                clearInterval(timer)
            }
        }, 500 / 100)
    }
    componentWillMount() {

    }
    componentDidMount() {
        // 初始化参数
        this.refs.waterfull.parentNode.addEventListener('scroll', this.scroll())
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { need_render } = nextProps;
        if (need_render) {
            // 需要渲染
            nextProps.forbidRender()
            return true;
        } else {
            return false;
        }

    }
    componentWillUnmount() {
        this.refs.waterfull.parentNode.removeEventListener('scroll', this.scroll())
    }
    componentWillReceiveProps(nextProps) {

    }
    componentWillUpdate() {
        // const { need_update, heightArr } = this.props;
    }

    componentDidUpdate() {
        this.allImgsIsComplete()
    }
    render() {
        // column，列数
        // img_list，图片地址数组
        // handleGetData,获取更多数据

        // const { column, img_list, handleGetData } = this.props;
        const { img_list, column, totalNum } = this.props;
        const List = img_list.map((item) => (
            <MyPic key={item.id || item.di} title={item.title || item.fromPageTitle} imgUrl={item.shareUrl || item.objURL} column={column} />
        ))
        // console.log('我被渲染了...')  
        return (
            <div className="waterfull-container" ref='waterfullContainer'>
                <h2> 为您找到约&nbsp; {totalNum}&nbsp; 张图片 </h2>
                <div className="waterfull" ref='waterfull'>
                    {List}
                </div>
                <div className="top" onClick={this.returnTop}>
                    <FontAwesome name='angle-up'></FontAwesome>
                </div>
            </div>

        )
    }
}