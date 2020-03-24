import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import HideButton from './HideButton'

import '../../ResourcesApp/js/functions'

// export default ({onLinkClick = () => {}}) => (
export default class Sidebar extends Component {

    activeStyle = (tabClickEvent) => {
        let myTabs = document.querySelectorAll("ul.isi__menu > li");
        for (let i = 0; i < myTabs.length; i++ ) {
            myTabs[i].classList.remove("isi__active");
        }

        let clickedTab = tabClickEvent.currentTarget;
            clickedTab.classList.add("isi__active");
            tabClickEvent.preventDefault();
    }
    render() {
        return (
            <div className="isi__navbar" id="isi__navbar">
                <HideButton />

                <ul className="isi__menu">
                    <li className="isi__active animated bounceInLeft" onClick={this.activeStyle} ><span></span><Link onClick={this.props.onLinkClick.bind(null, "Home")} to="/"  > <span><img src="http://localhost:4000/archives/house.png" alt="" /></span> <strong>Home</strong></Link></li>
                    <li className="animated bounceInLeft" onClick={this.activeStyle}><span></span><Link onClick={this.props.onLinkClick.bind(null, "Proyectos")} to="/projects"><span><img src="http://localhost:4000/archives/project-management.png" alt="" /></span><strong>Proyectos</strong></Link></li>
                    <li className="animated bounceInLeft" onClick={this.activeStyle}><span></span><Link onClick={this.props.onLinkClick.bind(null, "Eventos")} to="/events"><span><img src="http://localhost:4000/archives/calendar.png" alt="" /></span><strong>Eventos</strong></Link></li>
                    <li className="animated bounceInLeft" onClick={this.activeStyle}><span></span><Link onClick={this.props.onLinkClick.bind(null, "Laboratorios")} to="/laboratories"><span><img src="http://localhost:4000/archives/robotic-arm.png" alt="" /></span><strong>Laboratorios</strong></Link></li>
                    <li className="animated bounceInLeft" onClick={this.activeStyle}><span></span><Link onClick={this.props.onLinkClick.bind(null, "Noticias")} to="/news"><span><img src="http://localhost:4000/archives/text-lines.png" alt="" /></span><strong>Noticias</strong></Link></li>
                    <li className="animated bounceInLeft" onClick={this.activeStyle}><span></span><Link onClick={this.props.onLinkClick.bind(null, "Profesores")} to="/teachers"><span><img src="http://localhost:4000/archives/presentation.png" alt="" /></span><strong>Docentes</strong></Link></li>
                </ul>
            </div>
        )
    }
}
// )
