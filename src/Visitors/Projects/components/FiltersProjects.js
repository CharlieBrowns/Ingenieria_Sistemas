import React, { Component } from 'react'

export default class FiltersProjects extends Component {
    render() {
        return (
            <div className="pyts__left">
                <div className="pyts__filtros">
                    <div className="pyts__ciclos">
                        <select name="" id="">
                            <option value="2019 - II">2019 - II</option>
                            <option value="2019 - I">2019 - I</option>
                            <option value="2018 - II">2018 - II</option>
                            <option value="2018 - I">2018 - I</option>
                            <option value="2017 - II">2017 - II</option>
                            <option value="2017 - I">2017 - I</option>
                            <option value="2016 - II">2016 - II</option>
                            <option value="2016 - I">2016 - I</option>
                            <option value="2015 - II">2015 - II</option>
                            <option value="2015 - I">2015 - I</option>
                        </select>
                    </div>
                    <div className="pyts__areas">
                        <h3>Áreas</h3>
                        <label className="container">Redes
                      <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Robótica
                      <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Informática
                      <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="pyts__semestres">
                        <h3>Semestres</h3>
                        <ul>
                            <label className="container">1er Semestre
                          <input type="checkbox"  />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">2do Semestre
                          <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">3er Semestre
                          <input type="checkbox"  />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">4to Semestre
                          <input type="checkbox"  />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">5to Semestre
                          <input type="checkbox"  />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">6to Semestre
                          <input type="checkbox"  />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">7mo Semestre
                          <input type="checkbox"  />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">8vo Semestre
                          <input type="checkbox"  />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">9no Semestre
                          <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">10mo Semestre
                          <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
