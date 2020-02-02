import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsHome extends Component {
    render() {
        return (
            <section className="isi__contenedor">
                <div className="isi__noticias">
                    <h1>Noticias</h1>
                    <div className="isi__noticia">
                        <div className="isi__noticion">
                            <div className="isi__noticia_header">
                                <span>Noticia del Día</span>
                                <span>28/08/2019</span>
                            </div>
                            <div className="isi__noticia_body">
                                <img src="http://localhost:4000/archives/feria.jpg" alt="" />
                            </div>
                            <div className="isi__noticia_footer">
                                <p>Joven gana concuros de programadores del mundo mundial</p>
                                <div>
                                    <Link to="/">Ver más...</Link>
                                </div>
                            </div>
                        </div>
                        <div className="isi__noticitas">
                            <div className="isi__noticita">
                                <div className="isi__noticitaImg">
                                    <img src="http://localhost:4000/archives/noticita.jpg" alt="" />
                                </div>
                                <div className="isi__noticitaContent">
                                    <div className="isi__noticita_header">
                                        <span>QS Stars califica a UPN entre las universidades con mejor nivel de empleabilidad y calidad de enseñanza</span>
                                        <span>30/05/2019</span>
                                    </div>
                                    <div className="isi__noticita_body">
                                        Es un orgullo para la Universidad Privada del Norte haber sido  calificada con 3 estrellas de calificación institucional en el prestigioso sistema de clasificación internacional QS Stars.
                                </div>
                                    <div className="isi__noticita_footer">
                                        <Link to="/">ver más</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="isi__noticita">
                                <div className="isi__noticitaImg">
                                    <img src="http://localhost:4000/archives/noticita.jpg" alt="" />
                                </div>
                                <div className="isi__noticitaContent">
                                    <div className="isi__noticita_header">
                                        <span>QS Stars califica a UPN entre las universidades con mejor nivel de empleabilidad y calidad de enseñanza</span>
                                        <span>30/05/2019</span>
                                    </div>
                                    <div className="isi__noticita_body">
                                        Es un orgullo para la Universidad Privada del Norte haber sido  calificada con 3 estrellas de calificación institucional en el prestigioso sistema de clasificación internacional QS Stars.
                                </div>
                                    <div className="isi__noticita_footer">
                                        <Link to="/">ver más</Link>
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
