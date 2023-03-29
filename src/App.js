import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import SignIn from './views/SignIn'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Board from './views/Board'
import CreatePost from './views/CreatePost'

function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/board" element={<Board />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
