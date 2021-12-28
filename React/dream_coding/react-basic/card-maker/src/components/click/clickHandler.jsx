import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClickHandler = () => {
  const navigate = useNavigate();
  navigate("/home");
}

export default ClickHandler;