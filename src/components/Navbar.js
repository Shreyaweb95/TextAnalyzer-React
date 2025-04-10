import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="About">{props.about}</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-1 my-sm-0" type="submit">Search</button> */}
  
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDisabled" />
      <label className="form-check-label"  htmlFor="flexSwitchCheckDisabled">Enable Dark Mode</label>
    </div>
  </form>
  </div>
 </nav>

  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired,
};
Navbar.defaultProps= {
    title:'shreya'
}


