import React, { Component } from 'react'
import EventsPresentation from './components/EventsPresentation'
import FiltersEvents from './components/FiltersEvents'
import EventsView from './components/EventsView'
import Month from './components/Month'
import Footer from '../Global/Footer'

import '../../ResourcesApp/css/events.css'
import '../../ResourcesApp/css/checkbox.css'

export default class Events extends Component {
    render() {
        return (
            <div>
                <EventsPresentation />
                <main>

                    <section className="evts__contenedor">
                        <div className="evts__body">
                            <FiltersEvents />

                            <EventsView />

                            <Month />
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
