import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="isi__contenedorFooter">
                    <h1>INGENIERÍA DE SISTEMAS E INFORMÁTICA</h1>
                    <h2>ISI</h2>

                    <div className="isi__contactanos">
                        <img src="http://localhost:4000/archives/logoFooter.png" alt="" />
                        <div>
                            <h3>Contáctanos</h3>
                            <ul>
                                <li><span><i className="fas fa-map-marker-alt"></i></span>Pabellón A - Piso N2 - Oficina de Sistemas </li>
                                <li><span><i className="fas fa-envelope-square"></i></span>Ingenieríadesistemaseinformatica@gmail.com</li>
                                <li><span><i className="fas fa-phone-square-alt"></i></span>+(01) 715 8878</li>
                            </ul>
                        </div>
                    </div>

                    <div className="isi__line">

                    </div>

                    <div className="isi__creditos_and_sociales">
                        <div className="isi__creditos">
                            Designed by @ByteCode - 2019
                    </div>
                        <div className="isi__redes_sociales">
                            <Link className="isi__wsp" to="/"><img src="http://localhost:4000/archives/whatsapp.png" alt="" /></Link>
                            <Link className="isi__ggp" to="/"><img src="http://localhost:4000/archives/google-plus.png" alt="" /></Link>
                            <Link className="isi__fcb" to="/"><img src="http://localhost:4000/archives/facebook.png" alt="" /></Link>
                            <Link className="isi__ytb" to="/"><img src="http://localhost:4000/archives/youtube.png" alt="" /></Link>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}
