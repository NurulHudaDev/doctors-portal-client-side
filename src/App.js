import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {Routes, Route, Link, Router} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='appointment' element={<RequireAuth>
          <Appointment />
        </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
