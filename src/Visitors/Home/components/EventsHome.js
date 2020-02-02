import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'infinite-react-carousel'

export default class EventsHome extends Component {

    render() {
        const settings = {
            dots: true,
            // infinite: true,
            // speed: 500,
            slidesPerRow: 2,
            // slidesToScroll: 1
        };
        return (
            <section className="isi__contenedor">
                <div className="isi__eventos">
                    <h1>Nuestros Eventos</h1>
                    <div className="isi__carousel">
                        <div className="isi__carousel_left">
                            <Link to="#" onClick={this.carousel}><i className="fas fa-caret-left"></i></Link>
                        </div>
                        <div className="isi__carousel_right">
                            <Link to="#" onClick={this.carousel}><i className="fas fa-caret-right"></i></Link>
                        </div>
                        <Slider {...settings} >
                        <div className="isi__carousel_item">
                            <div className="isi__caro">
                                <div className="isi__almanac">
                                    <div className="isi__day">LUNES</div>
                                    <div className="isi__date">26</div>
                                    <div className="isi__month">AGOSTO</div>
                                </div>
                                <div className="isi__content">
                                    <div className="isi__title">Bienvenida de Cachimbos 2019-II</div>
                                    <ul className="isi__description">
                                        <li><span><i className="fas fa-paper-plane"></i></span>Presenial</li>
                                        <li><span><i className="fas fa-eye"></i></span>10:30 a.m. - 05:00 p.m.</li>
                                    </ul>
                                    <div className="isi__link">
                                        <Link to="/">MÁS SOBRE EL EVENTO</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="isi__caro">
                                <div className="isi__almanac">
                                    <div className="isi__day">LUNES</div>
                                    <div className="isi__date">26</div>
                                    <div className="isi__month">AGOSTO</div>
                                </div>
                                <div className="isi__content">
                                    <div className="isi__title">Bienvenida de Cachimbos 2019-II</div>
                                    <ul className="isi__description">
                                        <li><span><i className="fas fa-paper-plane"></i></span>Presenial</li>
                                        <li><span><i className="fas fa-eye"></i></span>10:30 a.m. - 05:00 p.m.</li>
                                    </ul>
                                    <div className="isi__link">
                                        <Link to="/">MÁS SOBRE EL EVENTO</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="isi__caro">
                                <div className="isi__almanac">
                                    <div className="isi__day">LUNES</div>
                                    <div className="isi__date">26</div>
                                    <div className="isi__month">AGOSTO</div>
                                </div>
                                <div className="isi__content">
                                    <div className="isi__title">Bienvenida de Cachimbos 2019-II</div>
                                    <ul className="isi__description">
                                        <li><span><i className="fas fa-paper-plane"></i></span>Presenial</li>
                                        <li><span><i className="fas fa-eye"></i></span>10:30 a.m. - 05:00 p.m.</li>
                                    </ul>
                                    <div className="isi__link">
                                        <Link to="/">MÁS SOBRE EL EVENTO</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>


        )
    }
}
