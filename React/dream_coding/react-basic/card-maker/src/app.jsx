import {React, useState} from 'react';
import './app.css';
import {Login, isLogin} from './components/loginPage/login';
import CardMaker from './components/cardPage/card-maker';
import { BrowserRouter,Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const App = (props) => {
  const [loginState, setState] = useState(isLogin);
  const handleLogin = (result) => {
    //const navigate = useNavigate()
    setState(result);
    //result && navigate("/home") 이 함수 내부에서 못바꿈, 로그인 auth이후 링크이동 구현
  }
  return (
    <BrowserRouter>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
      </nav>


      <Routes>
        <Route path="/login" exact element={!loginState && <Login onLogin={handleLogin}/>}></Route>
        <Route path="/home" element={loginState && <CardMaker />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
