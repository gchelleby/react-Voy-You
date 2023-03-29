import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import SignIn from './views/SignIn'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
