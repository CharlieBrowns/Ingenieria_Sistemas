import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventsView extends Component {
    render() {
        return (
            <div className="evts__middle">
                <div className="timeline">
                    {/* one evento */}
                    <img src="img/autonomy.png" alt="" />

                    {/* other evento */}

                    <div className="containerLine">
                            <div className="evts__eventos">
                                <div className="evts__img">
                                    <img src="img/evento1.png" alt="" />
                                </div>
                                <div className="evts__content">
                                    <div className="evts__date">
                                        <div>
                                            <div>Septiembre</div>
                                            <div className="animated swing">
                                                <div>0</div>
                                                <div>1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="evts__description">
                                        <h4>13° Congreso Latinoamericano de la enseñanza de idiomas</h4>
                                        <p>
                                           <span><i className="fas fa-map-marker-alt"></i></span>
                                            Anfiteatro
                                        </p>
                                        <p>
                                           <span><i className="fas fa-clock"></i></span>
                                            4:30 pm
                                        </p>
                                        <div className="evts__ver">
                                            <Link to="">Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* other evento */}

                        <div className="containerLine">
                            <div className="evts__eventos">
                                <div className="evts__img">
                                    <img src="img/evento2.jpg" alt="" />
                                </div>
                                <div className="evts__content">
                                    <div className="evts__date">
                                        <div>
                                            <div>Septiembre</div>
                                            <div className="animated swing">
                                                <div>0</div>
                                                <div>1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="evts__description">
                                        <h4>13° Congreso Latinoamericano de la enseñanza de idiomas</h4>
                                        <p>
                                           <span><i className="fas fa-map-marker-alt"></i></span>
                                            Anfiteatro
                                        </p>
                                        <p>
                                           <span><i className="fas fa-clock"></i></span>
                                            4:30 pm
                                        </p>
                                        <div className="evts__ver">
                                            <Link to="/">Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* other EventsView */}

                        <div className="containerLine">
                            <div className="evts__eventos">
                                <div className="evts__img">
                                    <img src="img/evento3.png" alt="" />
                                </div> 
                                <div className="evts__content">
                                    <div className="evts__date">
                                        <div>
                                            <div>Septiembre</div>
                                            <div className="animated swing">
                                                <div>0</div>
                                                <div>1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="evts__description">
                                        <h4>13° Congreso Latinoamericano de la enseñanza de idiomas</h4>
                                        <p>
                                           <span><i className="fas fa-map-marker-alt"></i></span>
                                            Anfiteatro
                                        </p>
                                        <p>
                                           <span><i className="fas fa-clock"></i></span>
                                            4:30 pm
                                        </p>
                                        <div className="evts__ver">
                                            <Link to="/">Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* other evento */}

                        <div className="containerLine">
                            <div className="evts__eventos">
                                <div className="evts__img">
                                    <img src="img/evento1.png" alt="" />
                                </div>
                                <div className="evts__content">
                                    <div className="evts__date">
                                        <div>
                                            <div>Septiembre</div>
                                            <div className="animated swing">
                                                <div>0</div>
                                                <div>1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="evts__description">
                                        <h4>13° Congreso Latinoamericano de la enseñanza de idiomas</h4>
                                        <p>
                                           <span><i className="fas fa-map-marker-alt"></i></span>
                                            Anfiteatro
                                        </p>
                                        <p>
                                           <span><i className="fas fa-clock"></i></span>
                                            4:30 pm
                                        </p>
                                        <div className="evts__ver">
                                            <Link to="/">Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
