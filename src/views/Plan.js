import Map from "../components/Map"
import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';

export default function Plan() {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                (user.loggedIn) ?
                    <Map /> : 
                    <Routes>
                        <Route path='*' element={<Navigate to='/signin' />} />
                        </Routes>
            }
        </div>
    )
}