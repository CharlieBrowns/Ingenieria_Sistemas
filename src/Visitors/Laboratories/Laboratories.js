import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import LabSideBar from './components/LabSideBar'
import Footer from '../Global/Footer'

import '../../ResourcesApp/css/labs.css'
import '../../ResourcesApp/css/sidebar.css'

const Computing = lazy(() => import('./Computing/Computing'))
const Redes = lazy(() => import('./Redes/Redes'))
const Robotics = lazy(() => import('./Robotics/Robotics'))

export default ({ match }) => (
    <Router>
        <main>
            <LabSideBar match={match} />

            <Suspense>
                <Switch>
                    <Route path={`${match.url}/`} exact component={Computing}/>

                    <Route path={`${match.url}/computing`} component={Computing}/>

                    <Route path={`${match.url}/redes`} component={Redes}/>

                    <Route path={`${match.url}/robotics`} component={Robotics}/>
                </Switch>
            </Suspense>
        </main>
        <Footer />
    </Router>
)

