import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
            return (
              <nav className="navbar fixed-top navbar-expand-lg bg-primary">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    MadNews
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <li className='nav-item'> <Link className="nav-link active"aria-current="page" to="/">Home</Link></li>
                      <li className='nav-item'> <Link className="nav-link" to="/business">Business</Link></li>
                      <li className='nav-item'> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                      <li className='nav-item'> <Link className="nav-link" to="/general">General</Link></li>
                      <li className='nav-item'> <Link className="nav-link" to="/health">Health</Link></li>
                      <li className='nav-item'> <Link className="nav-link" to="/science">Science</Link></li>
                      <li className='nav-item'> <Link className="nav-link" to="/sports">Sports</Link></li>
                      <li className='nav-item'> <Link className="nav-link" to="/technology">Technology</Link></li>
                    </div>
                  </div>
                </div>
              </nav>
            );
  }

  export default Navbar