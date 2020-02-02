import React, { Component } from 'react'


export default class EventsPresentation extends Component {
    render() {
        return (
            <div className="evts__fondo">
                <div className="evts__fondoContent">
                    <div>
                        <div className="evts__titulo">
                            Nuestros Eventos
                    </div>
                        <div className="evts__descripcion" >
                            <p>Una vista amplia de todos los proyectos presentados por nuestros estudiantes</p>
                        </div>
                    </div>
                    <div>
                        <img src="http://localhost:4000/archives/halloween.png" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
