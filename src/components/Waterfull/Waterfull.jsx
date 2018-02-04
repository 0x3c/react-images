import React from 'react'

import './waterfull.less'

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
        this.scroll = this.scroll.bind(this)
        this.layout = this.layout.bind(this)
        this.allImgsIsComplete = this.allImgsIsComplete.bind(this)
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
    // 无限加载
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
    // 返回数组中最大数的索引
    minIndexOfArr = (arr) => {
        if (!arr instanceof Array) {
            return new Error('参数必须为数组');
        }
        let index = 0, min = arr[0];
        arr.forEach((v, k) => {
            [min, index] = v < min ? [v, k] : [min, index];

        })
        // console.log(arr + ' minIndex: ' + index)
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
            console.log('加载完了吗?')
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
    componentWillMount() {

    }
    componentDidMount() {
        // 初始化参数
        this.refs.waterfull.parentNode.addEventListener('scroll', this.scroll())
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 若 shouldUpdate 为 false ，则不更新
        // if (!nextState.shouldUpdate) {
        //     nextState.shouldUpdate = true;
        //     return false;
        // }
        const { need_render } = nextProps;
        if (need_render) {
            // 需要渲染
            console.log('需要渲染')
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
        const { need_update } = this.props;
        if (need_update) {

        } else {

        }
    }

    componentDidUpdate() {
        this.allImgsIsComplete()
    }
    render() {
        // column，列数
        // img_list，图片地址数组
        // handleGetData,获取更多数据

        // const { column, img_list, handleGetData } = this.props;
        const { img_list, column } = this.props;
        const List = img_list.map((item) => (
            <MyPic key={item.id} title={item.title} imgUrl={item.shareUrl} column={column} />
        ))
        console.log('我被渲染了...')
        return (
            <div className="waterfull" ref='waterfull'>
                {List}
            </div>
        )
    }
}