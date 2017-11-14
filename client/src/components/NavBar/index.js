import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return(
            <div className="navbar-main">
                <div className="container grid-xl">
                    <header className="navbar">
                      <section className="navbar-section">
                        <a href="#" className="navbar-brand">
                            <img src="https://dummyimage.com/170x50/000/fff" />
                        </a>
                      </section>
                      <section className="navbar-section">
                          <div className="input-group input-inline">
                            <input className="form-input" type="text" placeholder="search" />
                            <button className="btn btn-primary btn-action input-group-btn"><i className="icon icon-search"></i></button>
                          </div>
                      </section>
                    </header>
                </div>
            </div>
        )
    }
}


export default NavBar
