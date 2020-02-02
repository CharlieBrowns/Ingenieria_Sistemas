import React from 'react'


export default ({ style }) => (

    <div className={style}>
        {console.log("el estilo", style)}
        <div className="ntc__nota">
            <div className="ntc__in">
                <div>
                    <img src="http://localhost:4000/archives/noticia2.png" alt="" />
                </div>
                <div>
                    <h4>6 Hongkongers sobre cómo las protestas han transformado sus vidas y su ciudad</h4>
                </div>
                <div>
                    "Si no ganamos... no creo que podamos ganar. Pero siento que deberiamos hacer algo, aunque hay una pequeña posibilidad".
                    </div>
                <div>
                    fecha | 30-04-2019
                    </div>
            </div>
        </div>
        <div className="ntc__nota">
            <div className="ntc__in">
                <div>
                </div>
                <div>
                    <h4>America's gun problem, explained</h4>
                </div>
                <div>
                    The public and research support gun control. Here's how ir could help - and why it dosen't pass.
                    </div>
                <div>
                    fecha | 30-04-2019
                    </div>
            </div>
        </div>
        <div className="ntc__nota">
            <div className="ntc__in">
                <div>
                </div>
                <div>
                    <h4>Gun laws were loosened in Texas the day after the state's second mass shooting in a month</h4>
                </div>
                <div>
                    The new laws offer new rights and protections to Texas gun owners.
                    </div>
                <div>
                    fecha | 30-04-2019
                    </div>
            </div>
        </div>
    </div>

)
