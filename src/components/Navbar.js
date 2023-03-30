import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

export default function Navbar() {
    const { user, logout } = useContext(AuthContext)
    return(
    <nav>
          <ul className="navbar">
            <Link to="/"><img src={logo} alt="Voy-You logo" /></Link>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {
              (user.loggedIn) ?
                <>
                  <li>
                    <Link to="/board">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/plan">Plan</Link>
                  </li>
                  <button className="navbtn" onClick={logout}>Log Out</button>
                </> :
                <Link className="signin" to="/signin">Sign In</Link>

            }

          </ul>
        </nav>
    )
}