import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LabsHome extends Component {
    
    changeLabs = (tabClickEvent) => {
        let myLaboTabs = document.querySelectorAll("ul.isi__labotabs > li");

        for(let i = 0; i < myLaboTabs.length; i++) {
            myLaboTabs[i].classList.remove("isi__active")
        }
        let clickedLaboTab = tabClickEvent.currentTarget
        clickedLaboTab.classList.add("isi__active");
        tabClickEvent.preventDefault();
        var myContentLaboPanes = document.querySelectorAll(".isi__laboPane");
        for ( var i = 0; i < myContentLaboPanes.length; i++) {
            myContentLaboPanes[i].classList.remove("isi__pane_active");
        }
        var anchorLaboReference = tabClickEvent.target;
        var activeLaboPaneId = anchorLaboReference.getAttribute("href");
        var activeLaboPane = document.querySelector(activeLaboPaneId);
        activeLaboPane.classList.add("isi__pane_active");
    }

    render() {
        return (
            <section className="isi__contenedor">
                <div className="isi__laboratorios">
                    <h1>Nuestros Laboratorios</h1>
                    <div className="isi__laboratorio">
                        <ul className="isi__labotabs">
                            <li className="" onClick={this.changeLabs}><a href="#labotab_1">INFO</a></li>
                            <li className="isi__active" onClick={this.changeLabs}><a href="#labotab_2">ROBO</a></li>
                            <li className="" onClick={this.changeLabs}><a href="#labotab_3">REDE</a></li>
                        </ul>
                        <div className="isi__pane">
                            <div className="animated bounceInDown isi__laboPane" id="labotab_1">
                                <div className="isi__labo_content">
                                    <div>
                                        <h2>LABORATORIO DE INFORMÁTICA</h2>
                                        <p>Te damos la bienvenida Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <h4>Jefe de Laboratorio</h4>
                                        <p>Ing. Junior Tenorio Dominguez</p>
                                        <div className="isi__link">
                                            <div>
                                                <Link to="/">Ver más</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="isi__vd_laboratorio">
                                        <video controls>
                                            <source src="http://localhost:4000/archives/video/video.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="isi__pane_active animated bounceInDown isi__laboPane" id="labotab_2">
                                <div className="isi__labo_content">
                                    <div>
                                        <h2>LABORATORIO DE ROBÓTICA</h2>
                                        <p>Te damos la bienvenida Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <h4>Jefe de Laboratorio</h4>
                                        <p>Ing. Junior Tenorio Dominguez</p>
                                        <div className="isi__link">
                                            <div>
                                                <Link to="/">Ver más</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="isi__vd_laboratorio">
                                        <video controls>
                                            <source src="http://localhost:4000/archives/video/video.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                            </div>
                            <div className="animated bounceInDown isi__laboPane" id="labotab_3">
                                <div className="isi__labo_content">
                                    <div>
                                        <h2>LABORATORIO DE REDES</h2>
                                        <p>Te damos la bienvenida Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <h4>Jefe de Laboratorio</h4>
                                        <p>Ing. Junior Tenorio Dominguez</p>
                                        <div className="isi__link">
                                            <div>
                                                <Link to="/">Ver más</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="isi__vd_laboratorio">
                                        <video controls>
                                            <source src="http://localhost:4000/archives/video/video.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
        
        
    }
    
}
