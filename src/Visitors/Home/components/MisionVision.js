import React, { Component } from 'react'

export default class MisionVision extends Component {

    ChangeMisionView(tabClickEvent) {
        var myTabs = document.querySelectorAll("ul.isi__tabs > li");
    
            for (let i = 0; i < myTabs.length; i++ ) {
                myTabs[i].classList.remove("isi__tab_active");
            }
            var clickedTab = tabClickEvent.currentTarget;
            clickedTab.classList.add("isi__tab_active");
            tabClickEvent.preventDefault();
            var myContentPanes = document.querySelectorAll(".isi__tab_pane");
            for ( let i = 0; i < myContentPanes.length; i++) {
                myContentPanes[i].classList.remove("active");
            }
            var anchorReference = tabClickEvent.target;
            var activePaneId = anchorReference.getAttribute("href");
            var activePane = document.querySelector(activePaneId);
            activePane.classList.add("active");
    }

    render() {
        return (
            <section className="isi__contenedor">
            <div className="isi__MyV">
                <div className="isi__nosotros">
                    <h1>Misión y Visión</h1>
                    <ul className="isi__tabs">
                        <li className="isi__tab_active" onClick={this.ChangeMisionView}><a href="#tab_1">Misión</a></li>
                        <li className="" onClick={this.ChangeMisionView}><a href="#tab_2">Visión</a></li>
                        <li className="" onClick={this.ChangeMisionView}><a href="#tab_3">Perfil</a></li>
                    </ul>
                    <div className="isi__tabs_content">
                        <div className="isi__tab_pane active animated bounceInLeft" id="tab_1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ut doloribus totam animi deleniti perferendis velit esse, maiores quas architecto perspiciatis placeat optio possimus cupiditate  nisi consequuntur ratione eum fugiat!</p>
                        </div>
                        <div className="isi__tab_pane animated bounceInLeft" id="tab_2">
                            <p>Iure ratione quisquam repellat voluptate expedita fugiat a perspiciatis, cum nihil ullam, hic inventore, necessitatibus sed unde quod veritatis. Commodi sapiente nobis officiis doloribus incidunt sit impedit iusto magnam harum!</p>
                        </div>
                        <div className="isi__tab_pane animated  bounceInLeft" id="tab_3">
                            <p>Harum eius fugit praesentium nisi nemo facere, libero sit nesciunt hic doloremque porro soluta animi odit aliquam illum, pariatur in minus, adipisci saepe tempora ullam expedita! Aspernatur itaque quasi vel.</p>
                        </div>
                    </div>
                </div>
                <div className="isi__nosotrosImg">
                    <span>ISI</span>
                    <div className="isi__margenImg">
                        <img src="http://localhost:4000/archives/nosotros.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
