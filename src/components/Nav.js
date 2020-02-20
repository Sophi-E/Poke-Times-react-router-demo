import React from 'react';

function Nav() {
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <a href='google.com' className='brand-logo'>
          Poke'Times
        </a>
        <ul className='right'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
