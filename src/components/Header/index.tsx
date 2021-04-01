import React from 'react';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', padding: '16px 10%' }}>
        <Logo />
      </div>
    </header>
  )
}

export default Header;
