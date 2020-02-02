import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import React, { Component,Suspense, lazy } from 'react'
import Navbar from './Global/Navbar'
import Sidebar from './Global/Sidebar'
import Loader from "./Global/Loader";

import '../ResourcesApp/css/styles.css'
import '../ResourcesApp/css/menu.css'

import '../ResourcesApp/css/index.css'
import '../assets/animate/animate.css'
import '../assets/css/all.min.css'

import '../ResourcesApp/css/footer.css'



const Home = lazy(() => import('./Home/Home')),
    Events = lazy(() => import('./Events/Events')),
    Laboratories = lazy(() => import('./Laboratories/Laboratories')),
    News = lazy(() => import('./News/News')),
    Projects = lazy(() => import('./Projects/Projects')),
    Teachers = lazy(() => import('./Teachers/Teachers'))

export default class Visitors extends Component{

    constructor(props) {
        super(props)

        this.state = {
            ViewName : 'Home'
        }
    }

    getRoute = async (data, e) => {
         await this.setState({
            ViewName : data
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Navbar 
                        ViewName={this.state.ViewName} />
                    <Sidebar
                      onLinkClick={this.getRoute} /> 
                    <div>
                        <Suspense fallback={<div><Loader /></div>}>
                            <Switch>
                                <Route path="/" exact component={Home} />

                                <Route path="/events" component={Events} />

                                <Route path="/laboratories" component={Laboratories} />

                                <Route path="/news" component={News} />

                                <Route path="/projects" component={Projects} />

                                <Route path="/teachers" component={Teachers} />
                            </Switch>
                        </Suspense>
                    </div>
                </Router>
            </div>
        )

    }
}