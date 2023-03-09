import React from 'react';
import Logo from "../../imgs/logo.gif";
import "../../SCSS/_header.scss";
import "../../SCSS/_Mquery.scss"
const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary headerBg">
      <div class="container-fluid">
        <a class="navbar-brand logoContainer" href="#"><img src={Logo} alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse block-nav" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link headerLink" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link headerLink" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link headerLink" href="#">EDUCATION</a>
            </li>
            <li class="nav-item">
              <a class="nav-link headerLink" href="#">PROJECTS</a>
            </li>
          </ul>
          <button class="btn btn-outline-success" type="button">Contact Me</button>
        </div>
      </div>
    </nav>

    </header>
  )
}

export default Header
