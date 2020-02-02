import React, { Component } from 'react'


export default class FiltersEvents extends Component {
    render() {
        return (
            <div className="evts__left">
            <div className="evts__filtros">
                <div className="evts__anios">
                    <select name="" id="">
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
                <div className="evts__meses">
                   <h3>Meses</h3>
                    <label className="container">Enero
                      <input type="checkbox"  />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Febrero
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Marzo
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Abril
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Mayo
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Junio
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Julio
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Agosto
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Septiembre
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Octubre
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Noviembre
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">Diciembre
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                </div>
                
            </div>
        </div>
        )
    }
}
