import React from 'react';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <a
      href="/"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        padding: '16px 10%',
        backgroundColor: 'var(--primary-color)',
        zIndex: 1
      }}>
        <Logo />
      </a>
    </header>
  )
}

export default Header;
