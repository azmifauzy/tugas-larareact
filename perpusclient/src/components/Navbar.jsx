import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Perpus</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-2">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item px-2">
                <Link to='/category' className="nav-link">Categories</Link>
              </li>
              <li className="nav-item px-2">
                <a href='refr' className="nav-link">Books</a>
              </li>
              <li className="nav-item px-2">
                <Link to='/about' className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar