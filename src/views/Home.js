import sunset from "../sunsetbeach.gif"
import sunset2 from "../sunset2.jpeg"
import plane from "../plane.jpeg"
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="bg-color">
            <div className="hero">
                <div className="sunset-gifparent">
                    <img className="sunset-gif" src={sunset} alt="Background: A gif of a beach with a sunset" />
                </div>
                <div className="hero-text">
                    <h1>Welcome to Voy-You</h1>
                    <h2>The place to find your home away from home</h2>
                </div>
            </div>
            <div className="center">
                <h3 className="quote">“We must take adventures to find out where we truly belong.”</h3>
            </div>
            <div className="home-container">
                <div className="left-pic">
                    <Link to="/plan"><button className="btn-no-back">Plan your next adventures!</button></Link>
                </div>
                <div className="right-pic">
                    <Link to="/board"><button className="btn-no-back">Chat with other voyagers!</button></Link>
                </div>
            </div>
            {/* <Link to="/plan"><button className="adventure">Plan Your Next Adventure!</button></Link> */}
            <p className="bonvoyage">
                Voy-You is the travel website you've been looking for, where you can discuss your future travel plans<br /> with your friends and plan for new destinations at the same time! What are you waiting for? <span style={{ fontWeight: '600' }}>Bon voyage!</span>
            </p>
        </div>
    )
}