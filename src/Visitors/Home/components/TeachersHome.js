import React, { Component } from 'react'


export default class TeachersHome extends Component {
    render() {
        return (
            <div>
                <section className="isi__fondoImg"></section>
                <section className="isi__contenedor">
                    <div className="ini__docente">
                        <div className="ini__text">
                            <p>Como especialista en desarrollo de software libre, mi pasión trascendió fronteras en la India, China y Brasil.</p>
                            <p>
                                Juanito Alcachofas <br />
                                Maestría en Dirección de Sistema <br />
                                Egresado de Ingeniería de Sistemas e Informática de la  <br />
                                Universidad Nacional Amazónica de Madre de Dios - <strong>UNAMAD</strong>. <br />
                            </p>
                        </div>
                        <div className="ini__docenteImg">
                            <img src="http://localhost:4000/archives/docente.jpg" alt="" />
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
