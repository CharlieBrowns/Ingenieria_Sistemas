import React from 'react'
import { Link } from 'react-router-dom'

export default ({ match }) => (
    // <Link to={`${match.url}/${id}`}>{name}</Link>

    <div className="sidebar">
        <ul className="navegador">
            <li><Link to={`${match.url}/robotics`}>Robótica <img src="http://localhost:4000/archives/robotic-arm.png" alt="" /></Link></li>
            <li><Link to={`${match.url}/redes`}>Redes <img src="http://localhost:4000/archives/redlan.png" alt="" />  </Link></li>
            <li><Link to={`${match.url}`}>Informática <img src="http://localhost:4000/archives/code.png" alt="" /> </Link></li>
        </ul>
    </div>

)
