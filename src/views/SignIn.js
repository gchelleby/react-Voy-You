import { useContext } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider';
import google from '../google.png'

export default function SignIn() {
    const { user, login } = useContext(AuthContext)
    return (
        <div className='signupbg'>
            {
                (!user.loggedIn) ?
                    <>
                        <div className="google-card" onClick={ login }>
                            <h1 className="signin-text">Sign in with your Google account!</h1>
                            <img className='googlebtn' src={ google } />
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