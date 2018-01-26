import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SideBar from 'containers/SideBar'
import Header from 'containers/Header'
import Gallery from 'containers/Gallery'
import Container from 'containers/Container'

const Routes = () => (
    <Router>
        <ul style={{"height":"100%"}}>
            <SideBar />
            <Container>
                <Header />
                <Switch>
                    <Route path="/beauty" exact component={Gallery} />
                    <Route path="/star" exact component={Gallery} />
                    <Route path="/animation" exact component={Gallery} />
                    <Route path="/pet" exact component={Gallery} />
                    <Route path="/wallpaper" exact component={Gallery} />
                </Switch>
            </Container>
            {/* <img src="http://d.hiphotos.baidu.com/image/pic/item/b58f8c5494eef01fa17fd5ebe2fe9925bc317db1.jpg" alt="" width="100%"/> */}
        </ul>
    </Router>
);
export default Routes;