import React, { Component } from 'react'

export default class ProjectView extends Component {
    render() {
        return (
            <div className="pyts__right">
                <div className="pyts__proyecto">
                        <div className="pyts__img">
                            <img src="http://localhost:4000/archives/roboticArm.jpg" alt="" />
                            <span>Robótica</span>
                        </div>
                        <div className="pyts__content">
                                <div className="pyts__titulo">
                                    Sistema de Control de Asistencia a eventos haciendo uso de beacons
                                </div>
                                <hr />
                                <div className="pyts__type">
                                    <img src="http://localhost:4000/archives/drone.png" className="animated bounceInLeft" alt="" />
                                    <span className="pyts__span pyts__robo animated swing">Robótica</span>

                                </div>
                                <div className="pyts__ponentes">
                                    <div className="pyts__proponen">Proponen</div>
                                    <ul>
                                        <li>Junior Tenorio Dominguez</li>
                                        <li>Denis Ricardo Vilcas Villalba</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                                <div className="pyts__semestre">
                                    <strong>9</strong>
                                    <span>Semestre</span>
                                </div>
                                <div className="pyts__fecha">
                                    30/04/2019
                                </div>
                                {/* <span class="pyt__fondoIcon">
                                    <i class="fas fa-robot"></i>
                                </span> */}
                                
                        </div>
                    </div>

                                {/* OTRO PROYECTO */}

                    <div className="pyts__proyecto">
                        <div className="pyts__img">
                            <img src="http://localhost:4000/archives/roboticArm.jpg" alt="" />
                            <span>Redes</span>
                        </div>
                        <div className="pyts__content">
                                <div className="pyts__titulo">
                                    Sistema de Control de Asistencia a eventos haciendo uso de beacons
                                </div>
                                <hr />
                                <div className="pyts__type">
                                    <img src="http://localhost:4000/archives/server.png" className="animated bounceInLeft" alt="" />
                                    <span className="pyts__span pyts__serv animated swing">Redes</span>
                                </div>
                                <div className="pyts__ponentes">
                                    <div className="pyts__proponen">Proponen</div>
                                    <ul>
                                        <li>Junior Tenorio Dominguez</li>
                                        <li>Denis Ricardo Vilcas Villalba</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                                <div className="pyts__semestre">
                                    <strong>9</strong>
                                    <span>Semestre</span>
                                </div>
                                <div className="pyts__fecha">
                                    30/04/2019
                                </div>    
                        </div>
                    </div> 
                    {/* OTRO PROYECTO */}

                    <div className="pyts__proyecto">
                        <div className="pyts__img">
                            <img src="http://localhost:4000/archives/roboticArm.jpg" alt="" />
                            <span>Informática</span>
                        </div>
                        <div className="pyts__content">
                                <div className="pyts__titulo">
                                    Sistema de Control de Asistencia a eventos haciendo uso de beacons
                                </div>
                                <hr />
                                <div className="pyts__type">
                                    <img src="http://localhost:4000/archives/responsive.png" className="animated bounceInLeft" alt="" />
                                    <span className="pyts__span pyts__info animated swing">Informática</span>
                                </div>
                                <div className="pyts__ponentes">
                                    <div className="pyts__proponen">Proponen</div>
                                    <ul>
                                        <li>Junior Tenorio Dominguez</li>
                                        <li>Denis Ricardo Vilcas Villalba</li>
                                        <li>...</li>
                                    </ul>
                                </div>
                                <div className="pyts__semestre">
                                    <strong>9</strong>
                                    <span>Semestre</span>
                                </div>
                                <div className="pyts__fecha">
                                    30/04/2019
                                </div>
                        </div>
                    </div>
            </div>
        )
    }
}
