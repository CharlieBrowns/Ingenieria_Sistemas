import React from 'react'

export default ({ title, description, question, icon, image, video }) => (

    <div className="lbrt__fondo">
        {console.log("asd", title)}
        <section className="lbrt__gris">
            <div className="lbrt__contenedor">
                <div className="lbrt__fondo_top">
                    <div>
                        <h1 className="lbrt__present">{description} </h1>
                        <div className="lbrt__box">
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div>
                                    {title}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="lbrt__fondoIcon"><i className={icon}></i></span>
                        <h1 className="lbrt__que">{question}</h1>
                        <span className="lbrt__fondoIcon"><i className="fas fa-question-circle"></i></span>
                    </div>
                </div>
            </div>
        </section>
        <section className="lbrt__white">
            <div className="lbrt__contenedor">
                <div className="lbrt__fondo_bottom">
                    <div><img src={image} alt="" /></div>
                    <video controls>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div><img src={image} className="lbrt__invertido" alt="" /></div>

                </div>
            </div>
        </section>
    </div>

)
