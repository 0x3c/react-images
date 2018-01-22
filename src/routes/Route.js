import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SideBar from 'containers/SideBar'
import Header from 'containers/Header'


const Routes=()=>(
        <Router>
            <ul>
                <SideBar />
                <Header />>
                <Switch>
                    <Route path="/" exact component={ Header } />
                </Switch>
                <img src="http://d.hiphotos.baidu.com/image/pic/item/b58f8c5494eef01fa17fd5ebe2fe9925bc317db1.jpg" alt="" width="100%"/>
            </ul>
        </Router>
);
export default Routes;