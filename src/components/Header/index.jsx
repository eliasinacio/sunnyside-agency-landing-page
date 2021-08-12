import { useState } from 'react'
import './styles.scss'
import logo from '../../images/logo.svg'

export default function Header() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  const switchOpenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className="header-container">
      <header id="Header">
        <a id="logo" href="https://github.com/eliasinacio/sunnyside-agency-landing-page">
          <img src={logo} alt="" />
          </a>

        <button 
          id="menu-icon" 
          className={menuIsOpen ? 'activated' : ''}
          onClick={switchOpenMenu}>
          <img src="https://img.icons8.com/material-sharp/26/EEEEEE/menu--v1.png" alt=""/>
        </button>

        <nav>
          <a id="about-link" href="#about-link">About</a>
          <a id="services-link" href="#services-link">Services</a>
          <a id="projects-link" href="#projects-link">Projects</a>
          <a id="contact-link" href="#contact-link">CONTACT</a>
        </nav>
      </header>
    </div>
  )
}