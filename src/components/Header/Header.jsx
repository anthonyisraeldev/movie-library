import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const [ openNav, setOpenNav ] = useState(false);
  const handlerNav = () =>{
   setOpenNav(!openNav);
  }


  return (
    <Container className="container-header">
      <AppBar position="static" className="header">
        <Toolbar>
          <IconButton edge="start" onClick={ handlerNav } color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <NavLink exact to="/" className="header__link" color="inherit" activeClassName="active">Inicio</NavLink>
          <NavLink to="/peliculas-recientes" className="header__link" color="inherit" activeClassName="active">Películas recientes</NavLink>
          <NavLink to="/buscar-peliculas" className="header__link header__link--search" color="inherit">Buscar películas</NavLink>
        </Toolbar>
      </AppBar>
      <div className={`menu-responsive menu-responsive--${openNav ? 'active' : ''}  `}>
        <button  className="menu-responsive__close" onClick={ handlerNav }>X</button>
        <NavLink exact to="/" className="menu-responsive__link" color="inherit" onClick={ handlerNav }>Inicio</NavLink>
        <NavLink to="/peliculas-recientes" className="menu-responsive__link" color="inherit"  onClick={ handlerNav }>Películas recientes</NavLink>
        <NavLink to="/buscar-peliculas" className="menu-responsive__link menu-responsive__link--search" color="inherit"  onClick={ handlerNav }>Buscar películas</NavLink>
      </div>
    </Container>
  )
}

Header.displayName = "Header";

export default Header
