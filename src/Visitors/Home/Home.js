import React, { Component } from 'react'
import Video from './components/Video'
import MisionVision from './components/MisionVision' 
import ProjectsHome from './components/ProjectsHome'
import EventsHome from './components/EventsHome'
import LabsHome from './components/LabsHome'
import NewsHome from './components/NewsHome'
import TeachersHome from './components/TeachersHome'
import Footer from '../Global/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Video />
                <main>
                    <MisionVision />
                    <hr />  
                    <ProjectsHome />
                    <hr />
                    <EventsHome />
                    <hr />
                    <LabsHome />
                    <hr />
                    <NewsHome />
                    <hr />
                    <TeachersHome />
                </main>
                <Footer />
            </div>
        )
    }
}
