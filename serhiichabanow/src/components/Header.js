// src/components/Header.js
import * as React from "react";

import Menu from "./Menu";

import "../styles/Header.css";

import logo from "../images/cat-logo.jpg"; 

export default function Header() {
  return (
    <header>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
      
      <div className="header-container">
        <div className="header-left-side">
          <a href="/">
            <div className="logo-block">
              <img src={logo} alt="Funny logo - cat" />
              <h3>Serhii<br />Chabanow</h3>
            </div>
          </a>
        </div>

        <div className="header-right-side">
          <Menu />
        </div>
      </div>
    
    </header>
  );
}
