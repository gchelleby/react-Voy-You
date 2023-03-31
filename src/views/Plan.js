import Map from "../components/Map"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

export default function Plan() {
    const { user, login } = useContext(AuthContext)
    return (
        <div>
            {
                (user.loggedIn) ?
                    <Map /> : 
                    <Link to="/signin"><button className="postbtn">Create Post...</button></Link>
            }
        </div>
    )
}