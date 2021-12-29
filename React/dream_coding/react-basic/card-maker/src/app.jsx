import {React, useState} from 'react';
import './app.css';
import {Login} from './components/loginPage/login';
import CardMaker from './components/cardPage/card-maker';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';

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
        <Route path="/" element={<Login onLogin={handleLogin}/>}></Route>
        <Route path="/login" element={<Login onLogin={handleLogin}/>}></Route>
        <Route path="/home" element={loginState && <CardMaker />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
