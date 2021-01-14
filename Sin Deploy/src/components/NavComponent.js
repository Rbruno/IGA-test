import React from 'react'
import {NavLink} from 'react-router-dom';
function NavComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand">Github-Test</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to={'/'}>Inicio</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={'/user/historial'}>Historial</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default NavComponent
