import {React, useEffect, useState} from 'react';
import './app.css';
import {Login, isLogin} from './components/loginPage/login';
import CardMaker from './components/cardPage/card-maker';
import { BrowserRouter,Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const App = (props) => {
  const [loginState, setState] = useState(false);
  const handleLogin = (result) => {
    setState(result);
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin}/>}></Route>
        <Route path="/home" element={loginState && <CardMaker />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
