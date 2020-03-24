import React, { Component } from 'react'
import Slider from 'infinite-react-carousel'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCurrentProjects } from '../../../redux/actions/projectsActions'

class ProjectsHome extends Component {

    componentDidMount() {
        this.props.getCurrentProjects()
    }

    render() {
        // console.log("ESTO FALTA ARREGLAR // PROBLAEMA COM EL")

        const { Projects } = this.props
        const settings = {
            dots: true,
            slidesPerRow: 1,
        };

        return (


            <Slider {...settings} className="isi__contenedor">
                {console.log("estoy esperando esto : ", Projects.projects)}

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
            </Slider>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        Projects: state.Projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentProjects: () => dispatch(getCurrentProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsHome)
