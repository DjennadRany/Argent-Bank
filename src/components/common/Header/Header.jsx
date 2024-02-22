import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../../assets/argentBankLogo.png'
function Header() {
  return (
    <nav className={styles.mainNav}>
      <Link to="/" className={styles.mainNavLogo}>
        <img
          className={styles.mainNavLogoImage}
          src={logo}
          alt="Argent Bank Logo"
        />
      
      </Link>
      <div>
        <Link to="/sign-in" className={styles.mainNavItem}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
      <div>
        <Link to="/login" className={styles.mainNavItem}>
          <i className="fa fa-user-circle"></i>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Header;