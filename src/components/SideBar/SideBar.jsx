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

export default class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sort:{},
            data:[]
        };
        this.callback=this.callback.bind(this);
    }
    callback(data){
        console.log(data)
    }
    
    componentDidMount(){
        const { handleInitDataSort } =this.props;
        handleInitDataSort();
        // fetch('../sort.json')
        // .then(resp=>resp.json())
        // .then(json=>this.setState({sort:json}))
        // .catch(err=>console.log(err))

        // fetch('/data/imgs?col=美女&tag=全部&sort=0&pn=10&rn=10&p=channel&from=1')
        // .then(resp=>resp.json())
        // .then(json=>this.setState({data:json.imgs}))
        // .catch(err=>console.log(err))
    }
    render(){
        const {  dataSort, focus, handleHideSidebar } = this.props;
        

        const nav=((typeof dataSort) ==='object' && dataSort.length>0)
                ?
                dataSort.map((item,index)=>(
                    <NavLink key={index} to={`${item.subUrl}`}> {item.col} </NavLink>
                ))
                :
                null;

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
                        { nav }
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