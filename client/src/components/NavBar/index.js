import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return(
            <header className="header">
                <div className="navbar">
                  <section className="navbar-brand">
                    <a href="#" className="navbar-brand-link">
                        <img src="https://dummyimage.com/170x50/000/fff" />
                    </a>
                  </section>
                  <section className="navbar-section">
                      <div className="input-group input-inline">
                        <input className="form-input" type="text" placeholder="search" />
                        <button className="btn btn-primary btn-action input-group-btn"><i className="icon icon-search"></i></button>
                      </div>
                  </section>
                  <section className="navbar-section-last">
                      <div className="input-group input-inline">
                        <input className="form-input" type="text" placeholder="search" />
                        <button className="btn btn-primary btn-action input-group-btn"><i className="icon icon-search"></i></button>
                      </div>
                  </section>
                </div>
            </header>
        )
    }
}


export default NavBar
