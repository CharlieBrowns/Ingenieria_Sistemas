import React, { Component } from 'react'
import BackgroundPresentation from './components/BackgroundPresentation'
import FiltersProjects from './components/FiltersProjects';
import ProjectView from './components/ProjectView'

import Footer from '../Global/Footer'

import '../../ResourcesApp/css/Proyectos.css'
import '../../ResourcesApp/css/checkbox.css'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <BackgroundPresentation />
                <main>
                    <section className="pyts__contenedor">
                        <div className="pyts__body">
                            <FiltersProjects />

                            <ProjectView />
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
