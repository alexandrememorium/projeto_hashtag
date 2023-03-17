import React from 'react';
import './Login.css';
import Menu from '../Menu/Menu';

export default function Login() {

  return (
    <div className="fundoPag">
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
