import React from 'react'

export default ({ photo, description }) => (
    <section className="lbrt__white">
        <div className="lbrt__contenedor">
            <div className="lbrt__jefe">
                <div className="lbrt__left">
                    <div>
                        <span><i className="fas fa-laptop-code"></i></span>
                        <img src={photo} alt="" />
                    </div>
                </div>
                <div className="lbrt__right">
                    <h1>JEFE DE LABORATORIO</h1>
                    <p> {description} </p>
                </div>
            </div>
        </div>
    </section>
)
