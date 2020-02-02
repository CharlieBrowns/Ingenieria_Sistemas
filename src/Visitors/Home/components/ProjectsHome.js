import React, { Component } from 'react'
import Slider from 'infinite-react-carousel'
import { Link } from 'react-router-dom'

export default class ProjectsHome extends Component {
    render() {
        const settings = {
            dots: true,
            // infinite: true,
            // speed: 500,
            slidesPerRow: 1,
            // slidesToScroll: 1
          };
        return (


            <Slider {...settings} className="isi__contenedor">
                <div className="isi__proyectosBody">
                    <div className="isi__proyectos">
                        <h1>Nuestros Proyectos</h1>
                        <div className="isi__proyectos_content">
                            <div className="isi__ciclo">
                                <p>
                                    <span>9</span>
                                    <span><i className="fas fa-long-arrow-alt-down"></i></span>
                                </p>
                                <p>CICLO</p>
                            </div>
                            <div className="isi__proyecto">
                                <h3>Nombre del mejor proyecto hecho por los estudiantes del Noveno ciclo</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                <div><Link to="/">Leer más</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="isi__proyecto_img">
                        <img src="http://localhost:4000/archives/roboticArm.jpg" alt="" height="500px" />
                    </div>
                </div>
                <div>
                    <h3>5</h3>
                </div>
            </Slider>

        )
    }
}
