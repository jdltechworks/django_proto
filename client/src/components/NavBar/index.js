import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return(
            <header className="header">
                <div className="container grid-xl">
                    <div className="navbar">
                      <section className="navbar-section branding">
                        <a href="#" className="navbar-brand">
                            <img src="https://dummyimage.com/170x50/000/fff" />
                        </a>
                      </section>
                      <section className="navbar-section form">
                          <div className="input-group input-inline">
                            <input className="form-input" type="text" placeholder="search" />
                            <button className="btn btn-primary btn-action input-group-btn"><i className="icon icon-search"></i></button>
                          </div>
                      </section>
                      <section className="navbar-section controller">
                          <ul>
                              <li>
                                  <a href="#" className="btn btn-link"><i class="ion-ios-cart" aria-hidden="true"></i></a>
                              </li>
                              <li>
                                  <a href="#" className="btn btn-link"><figure className="avatar avatar-sm" data-initial="YZ"></figure></a>
                              </li>
                        </ul>
                      </section>
                    </div>
                            <ul class="tab tab-block">
                              <li class="tab-item active">
                                <a href="#">Music</a>
                              </li>
                              <li class="tab-item">
                                <a href="#">Playlists</a>
                              </li>
                              <li class="tab-item">
                                <a href="#">Radio</a>
                              </li>
                              <li class="tab-item">
                                <a href="#">Connect</a>
                              </li>
                              <li class="tab-item">
                                <a href="#">Music</a>
                              </li>
                              <li class="tab-item">
                                <a href="#">Playlists</a>
                              </li>
                              <li class="tab-item">
                                <a href="#">Radio</a>
                              </li>
                              <li class="tab-item">
                                <a href="#">Connect</a>
                              </li>
                            </ul>

                </div>
            </header>
        )
    }
}


export default NavBar
