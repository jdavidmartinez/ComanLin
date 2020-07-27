import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/Logopeque.jpeg';
import logo1 from '../assets/static/logoPortal2.png';


const Header = () => (

  <header className='header'>
    <img className='header__img' src={logo} alt='Portal St' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={logo1} alt='Portal St' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

);

export default Header;
