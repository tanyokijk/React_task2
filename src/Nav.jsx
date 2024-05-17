
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink  } from 'react-router-dom';

function Nav() {

  const linkStyle = {
    margin: '0 15px',
    textDecoration: 'none',
    color: 'inherit'
  };

  return (
    <nav>
      <NavLink to="/" style={linkStyle}>Favourite movie</NavLink>
      <NavLink to="/personal" style={linkStyle}>Personal page</NavLink>
      <NavLink to="/time" style={linkStyle}>Current time</NavLink>
      <NavLink to="/pet" style={linkStyle}>Pets</NavLink>
    </nav>
  );
}

export default Nav
