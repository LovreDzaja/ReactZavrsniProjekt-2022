import React from "react";
import './App.scss';
import DarkMode from "./context/darkmode.tsx";
function Navbar() {
  return (
    <nav class="container">
      <DarkMode></DarkMode>
      <input id="nav-toggle" type="checkbox" />
      <div class="logo">Kuha<strong>rica</strong></div>
      <ul class="links">
        <li class="list">
          <a href="/">Početna</a>
          <div class="home_underline"></div>
        </li>
        <li class="list">
          <a href="https://github.com/LovreDzaja">O meni</a>
          <div class="home_underline"></div>
        </li>

      </ul>

    </nav>
  );
}
  
export default Navbar;