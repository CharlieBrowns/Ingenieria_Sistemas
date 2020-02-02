import React, { Component } from 'react'
import Slider from 'infinite-react-carousel'
import { Link } from 'react-router-dom'

export default class ProjectsHome extends Component {
    render() {
        return (

//  <section className="isi__contenedor">
// <div className="isi__proyectosBody">
//     <div className="isi__proyectos">
//         <h1>Nuestros Proyectos</h1>
//         <div className="isi__proyectos_content">
//             <div className="isi__ciclo">
//                 <p>
//                     <span>9</span>
//                     <span><i className="fas fa-long-arrow-alt-down"></i></span>
//                 </p>
//                 <p>CICLO</p>
//             </div>
//             <div className="isi__proyecto">
//                 <h3>Nombre del mejor proyecto hecho por los estudiantes del Noveno ciclo</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
//                 <div><Link to="/">Leer más</Link></div>
//             </div>
//         </div>
//     </div>
//     <div className="isi__proyecto_img">
//         <img src="http://localhost:4000/archives/roboticArm.jpg" alt="" />
//     </div>
//     <div className="isi__indicadores">
//         <ul className="isi__points">
//             <li>
//                 <label htmlFor="idbutton1"></label>
//                 <input type="radio" id="idbutton1" name="namebutton" />

//             </li>
//             <li>
//                 <input type="radio" id="idbutton2" name="namebutton" />
//                 <label htmlFor="idbutton2"></label>
//             </li>
//             <li>
//                 <input type="radio" id="idbutton3" name="namebutton" />
//                 <label htmlFor="idbutton3"></label>
//             </li>
//             <li>
//                 <input type="radio" id="idbutton4" name="namebutton" />
//                 <label htmlFor="idbutton4"></label>
//             </li>
//             <li>
//                 <input type="radio" id="idbutton5" name="namebutton" />
//                 <label htmlFor="idbutton5"></label>
//             </li>
//             <li>
//                 <input type="radio" id="idbutton6" name="namebutton" />
//                 <label htmlFor="idbutton6"></label>
//             </li>
//             <li>
//                 <input type="radio" id="idbutton6" name="namebutton" />
//                 <label htmlFor="idbutton6"></label>
//             </li>
//             <li>
//                 <input type="radio" id="idbutton6" name="namebutton" />
//                 <label htmlFor="idbutton6"></label>
//             </li>
//             <li>
//                 <input type="radio" id="idbutton6" name="namebutton" />
//                 <label htmlFor="idbutton6"></label>
//             </li>
//             <li>
//                 <input type="radio" id="idbutton6" name="namebutton" />
//                 <label htmlFor="idbutton6"></label>
//             </li>
//         </ul>
//     </div>
// </div>
// </section> 

            <Slider dots className="isi__contenedor">
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
                        <img src="http://localhost:4000/archives/roboticArm.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <h3>5</h3>
                </div>
            </Slider>

        )
    }
}
