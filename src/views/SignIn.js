import { useContext } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';
import google from '../google.png'

export default function SignIn() {
    const { user, login } = useContext(AuthContext)
    return (
        <div className='signupbg full-screen'>
            {
                (!user.loggedIn) ?
                    <>
                        <div style={{ textAlign: 'center' }}>
                            <button className="googlebtn"><img src={google} alt="Google Sign Up Button" onClick={login} /></button>
                        </div>
                    </> :
                    <>
                    <Routes>
                        <Route path='*' element={<Navigate to='/' />} />
                        </Routes>
                    </>
            }
        </div>
    )
}