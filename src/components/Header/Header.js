import React from 'react';

import './Header.css';
import logo from '../../assets/header_logo.png';

export default function Header({ history, logout }) {
  return (
    <div className="Header__parent dark_green_bgc">
      <div className="Header__child">
        <div className="Header__left_container">
          <img src={ logo } alt="logo" />
          <span className="Header__left_span open-sans-bold">Houser</span>
          <span className="Header__left_span open-sans">Dashboard</span>
        </div>

        <div className="Header__right_container">
          <span className="Header__right_span open-sans-bold" onClick={ () => logout( history ) }> Logout </span>
        </div>
      </div>
    </div>
  )
}