import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SideBar from 'containers/SideBar'
import Header from 'components/Header'


const Routes=()=>(
        <Router>
            <ul>
                <SideBar />
                <Switch>
                    <Route path="/" exact component={ Header } />
                </Switch>
            </ul>
        </Router>
);
export default Routes;