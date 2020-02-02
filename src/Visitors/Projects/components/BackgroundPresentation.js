import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BackgroundPresentation extends Component {
    render() {
        return (
            <section className="pyts__fondo">
            <h1>"Una vista amplia de todos los proyectos presentados por nuestros estudiantes"</h1>
           <div>
               <div>
                  
                   <img src="img/backend.png" alt="" />
                   <div>Informática</div>
               </div>
               <div className="pyts__vs pyts__versus1">
                       <Link to="/" className="intro-banner-vdo-play-btn pinkBg" target="_blank">
                        VS
                        <span className="ripple pinkBg"></span>
                        <span className="ripple pinkBg"></span>
                        <span className="ripple pinkBg"></span>
                    </Link>
               </div>
               <div>
                    <img src="img/roboticArm.png" alt="" />
                    <div>Robótica</div>
               </div>
               <div className="pyts__vs pyts__versus2">
                    <Link to="/" className="intro-banner-vdo-play-btn pinkBg" target="_blank">
                        VS
                        <span className="ripple pinkBg"></span>
                        <span className="ripple pinkBg"></span>
                        <span className="ripple pinkBg"></span>
                    </Link>
               </div>
               <div>
                    <img src="img/lan.png" alt="" />
                    <div>Redes</div>
               </div>
           </div>
        </section>
        )
    }
}
