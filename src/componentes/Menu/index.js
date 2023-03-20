import React from 'react';
import { ReactComponent as Logo } from '../../img/logo-white.svg';
import { ReactComponent as LogoPink } from '../../img/logo-pink.svg';
import HomeIcon from '../../img/icon-home.svg';
import AboutIcon from '../../img/icon-info-circle.svg';
import LoginIcon from '../../img/icon-user-alt.svg';
import LogoutIcon from '../../img/icon-power-off.svg';
import { NavLink } from 'react-router-dom';

import './Menu.css';

export default class Menu extends React.Component {

  state = {
    displayHomeButton: false,
    displayAboutButton: false,
    displayLoginButton: false,
    displayLogoutButton: false,

    transparencyMenu: false,
    getHeaderHeight: null
  }

  componentDidMount() {
    this.addTransparencyScrollEvent();
    this.setHeaderHeight();
    window.addEventListener('resize', this.setHeaderHeight);

    if (window.location.pathname === '/') {
      this.setState({displayAboutButton: true, displayLoginButton: true});
    } else
      if (window.location.pathname === '/about') {
        this.setState({ displayHomeButton: true, displayLoginButton: true });
      } else
        if (window.location.pathname === '/login') {
          this.setState({ displayHomeButton: true });
        } else
          if (window.location.pathname === 'searchlisting') {
            this.setState({ displayHomeButton: true, displayLogoutButton: true });
          }
  }

  setHeaderHeight = () => {
    const windowWidth = document.documentElement.clientWidth;
    const platform = windowWidth >= 660 ? "Desktop" : "Mobile";

    // rem value bsed on vw unit
    let fontSize = (platform === 'Mobile') ? 3.865 : 0.833;
    fontSize = windowWidth * (fontSize / 100)
    // header height in rem unit
    let headerHeight = (platform === 'Mobile') ? this.props.headerHeightMobile : this.props.headerHeightDesktop;
    // responsive header height in px
    headerHeight = headerHeight * fontSize;

    this.setState({ headerHeight });
  };

  addTransparencyScrollEvent() {
    document.addEventListener('scroll', () => {
      //change state
      if (document.documentElement.scrollTop >= this.state.headerHeight) {
        this.setState({ transparencyMenu: true })
      } else {
        this.setState({ transparencyMenu: false })
      };

    });
  };

  logout = () => {
    localStorage.removeItem('logged');
  }

  render() {
    return (
      <div className="nav-menu-wrapper-holder">
        <div className={"nav-menu-wrapper " + (this.state.transparencyMenu ? 'fixed' : '')}>
          <div className={(this.state.transparencyMenu ? 'transparency-scroll' : '')}></div>
          <div className="nav-menu">
              {this.state.transparencyMenu ? <LogoPink className="logo-img" /> : <Logo className="logo-img" /> }
              <nav className="app-nav">
                <NavLink exact to="/" className={`nav-link ${this.state.displayHomeButton ? '': 'hide-link'}`} activeClassName="App-link-CurrentPage" >
                        <img src={HomeIcon} alt="Home Icon" />
                        <h2>Home</h2>
                </NavLink>
                <NavLink exact to="/About" className={`nav-link ${this.state.displayAboutButton ? '': 'hide-link'}`} activeClassName="App-link-CurrentPage" >
                        <img src={AboutIcon} alt="Sobre Icon" />
                        <h2>Sobre</h2>
                </NavLink>
                <div className="margin-between-bluepink"></div>
                <NavLink exact to="/Login" className={`nav-link blue-link ${this.state.displayLoginButton ? '': 'hide-link'}`} activeClassName="App-link-CurrentPage" >
                        <img src={LoginIcon} alt="Login Icon" />
                        <h2>Login</h2>
                </NavLink>
                <NavLink exact to="/" className={`nav-link blue-link ${this.state.displayLogoutButton ? '': 'hide-link'}`} onClick={() => this.logout()} activeClassName="App-link-CurrentPage" >
                        <img src={LogoutIcon} alt="Sair Icon" />
                        <h2>Sair</h2>
                </NavLink>
              </nav>
              
          </div>
          
        </div>
      </div>
    );
  };
};