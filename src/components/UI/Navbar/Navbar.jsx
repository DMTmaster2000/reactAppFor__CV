import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = (event) => {
    event.preventDefault();
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div className="navbar">
      <buttnoTeal style={{ color: 'white', cursor: 'pointer' }} onClick={logout}>
        Logout
      </buttnoTeal>
      <div style={{ display: 'flex', justifyContent: 'space-between', flex: 'auto' }}>
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/post">Page</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
