import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../ResourcesApp/js/functions'
export default class HideButton extends Component {

    playMenu() {
        var menu = document.getElementById("isi__navbar");
        if (menu.classList.contains('isi__navbar_hide')) {
            console.log("hola");
            menu.classList.remove("isi__navbar_hide");
        } else {
            console.log("adios");
            menu.classList.add("isi__navbar_hide");
        }
    }

    render() {
        return (
            <div className="isi__menuControl animated bounceInLeft">
                <div>
                    <Link onClick={this.playMenu} to="#" id="isi__btnMenu" ><i className="fa fa-bars"></i></Link>
                </div>
                <div>
                    <img src="http://localhost:4000/archives/logoUnamad.png" alt="" />
                </div>
                <div className="isi__isi">
                    Ingeniería de Sistemas e Informática
                    </div>
            </div>
        )
    }
}
