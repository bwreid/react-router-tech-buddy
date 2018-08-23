import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ isLoggedIn, logout }) => {
  return (
    <div className="container-fluid mb-4 bg-light text-dark">
      <div className="row">
        <div className="col border-bottom">
          <ul className="nav py-4 d-block text-center">
            {
              isLoggedIn ?
              <li className="nav-item d-block">
                <button onClick={ logout } className="btn btn-link">Logout</button>
              </li> :
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation
