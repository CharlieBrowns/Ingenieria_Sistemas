import React, { Component } from 'react'
import NewsSide from './components/NewsSide'
import NewsCenter from './components/NewsCenter'

import Footer from '../Global/Footer'

import '../../ResourcesApp/css/news.css'

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            left: 'ntc__left',
            right: 'ntc__right'

        }
    }
    render() {
        return (
            <div >
                <main>
                    <section className="ntc__contenedor">
                        <span></span>
                        <span></span>
                        <h1 className="ntc__titulo">NOTICIAS</h1>
                        <div className="ntc__noticias">

                            <NewsSide
                                style={this.state.left} />

                            <NewsCenter />

                            <NewsSide
                                style={this.state.right} />

                        </div>
                    </section>
                </main>
                <Footer />
            </div>


        )
    }
}
