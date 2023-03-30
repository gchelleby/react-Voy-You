import { Link } from 'react-router-dom'
import mtns from '../CO_mtns.jpg'

export default function Footer() {
    return (
        <div>
            <ul className="footbar">
                <img className="mtns" src={ mtns } alt="" />
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/board">Forum</Link>
                </li>
                <li>
                    <Link to="/plan">Plan</Link>
                </li>
            </ul>
        </div>
    )
}