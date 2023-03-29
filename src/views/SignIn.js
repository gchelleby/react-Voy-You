import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import google from '../google.png'

export default function SignIn() {
    const { login } = useContext(AuthContext)
    return (
        <div className='signupbg full-screen'>
            <div style={{textAlign: 'center'}}>
                <button className="googlebtn"><img src={google} alt="Google Sign Up Button" onClick={login} /></button>
            </div>
        </div>
    )
}