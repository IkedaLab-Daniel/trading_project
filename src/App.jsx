
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Nav.jsx'
import Hero from './components/Hero'
import Page1 from './components/Page1'
import Modal from './components/Modal.jsx'
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
