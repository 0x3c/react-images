import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SideBar from 'containers/SideBar'
import Header from 'containers/Header'
import Gallery from 'containers/Gallery'
import Container from 'containers/Container'
import Search from 'containers/Search'
import { Redirect } from 'react-router-dom'
const Routes = () => (
    <Router>
        <ul style={{ "height": "100%" }}>
            <SideBar />
            <Switch>
                <Container>
                    <Header />
                    <Route path="/search" exact component={Search} />
                    <Route path="/search/:key" exact component={Gallery} />
                    <Route path="/beauty" exact component={Gallery} />
                    <Route path="/star" exact component={Gallery} />
                    <Route path="/animation" exact component={Gallery} />
                    <Route path="/pet" exact component={Gallery} />
                    <Route path="/wallpaper" exact component={Gallery} />
                    <Redirect path="/" to={{ pathname: '/search' }} />
                </Container>
            </Switch>
        </ul>
    </Router>
);
export default Routes;