import React from 'react';
import { ReactComponent as Logo } from '../../img/logo-white.svg';
import HomeIcon from '../../img/icon-home.svg';
import { NavLink } from 'react-router-dom';

import './Login.css';
import './Menu.css';
import Menu from './Menu';

export default function Login() {


  return (
    <div className="fundoPag">
      <div className="loginNav">
        <div className="nav-menu-wrapper-holder">
          <div className={"nav-menu-wrapper "}>
            <div className={''}></div>
            <div className="nav-menu">
              <Logo className="logo-img" />
              <nav className="app-nav">
                <NavLink exact to="/" className={`nav-link`} activeClassName="App-link-CurrentPage" >
                  <img src={HomeIcon} alt="Home Icon" />
                  <h2>Home</h2>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="loginNav">
        <Menu headerHeightMobile={32.5} headerHeightDesktop={49.25}/>
      </div>      

      <div className="loginPageContainer">
        <form>
          <h1>Login</h1>

          <label htmlFor="email">
            <input
              type="text"
              placeholder="Usuário"
            />
          </label>

          <label htmlFor="senha">
            <input
              type="password"
              placeholder="Senha"
            />
          </label>

          <button type="submit"><span>ACESSAR</span></button>
        </form>
      </div>

    </div>
  );
}
