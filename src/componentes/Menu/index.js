import React from 'react';
import { ReactComponent as Logo } from '../../img/logo-white.svg';
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
      <div className="navMenuWapperHolder">
        <div className={"navMenuWapper " + (this.state.transparencyMenu ? 'fixed' : '')}>
          <div className={(this.state.transparencyMenu ? 'transpRolagem' : '')}></div>
          <div className="navMenu">
            <Logo className="logoImg" />
            <nav className="appNav">
              <NavLink exact to="/" className={`navLink ${this.state.displayHomeButton ? '' : 'hideLink'}`} activeClassName="AppLinkCurrentPage" >
                <img src={HomeIcon} alt="Home Icon" />
                <h2>Home</h2>
              </NavLink>
              <NavLink exact to="/about" className={`navLink ${this.state.displayAboutButton ? '' : 'hideLink'}`} activeClassName="AppLinkCurrentPage" >
                <img src={AboutIcon} alt="Sobre Icon" />
                <h2>Sobre</h2>
              </NavLink>
              <div className="margenEntreAzulRosa"></div>
              <NavLink exact to="/login" className={`navLink linkAzul ${this.state.displayLoginButton ? '' : 'hideLink'}`} activeClassName="AppLinkCurrentPage" >
                <img src={LoginIcon} alt="Login Icon" />
                <h2>Login</h2>
              </NavLink>
              <NavLink exact to="/" className={`navLink linkAzul ${this.state.displayLogoutButton ? '' : 'hideLink'}`} onClick={() => this.logout()} activeClassName="AppLinkCurrentPage" >
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