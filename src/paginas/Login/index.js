import React from 'react';
import { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './Login.css';
import Menu from '../../componentes/Menu';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirecionaBusca, setRedirecionaBusca] = useState(false);  

  React.useEffect(() => {

    if(localStorage.getItem('logged') === 'true'){
      setRedirecionaBusca(true)
    }
  }, []);

  // validando o form no front 
  const handleSubmit = e => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido !');
      //alert('E-mail inválido !');
    } 

    if (password.length <= 5) {
      formErrors = true;
      toast.error('A senha deve ter 6 caracteres !');
      //alert('A senha deve ter 6 caracteres !');
    }

    if(!formErrors){
      getLoginData();
    }
  };

  let getLoginData = () => {
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=1&view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)", {
    })
    .then(response => response.json())
    .then(responseJson => {

        if(responseJson.records[0].fields.Email === email && responseJson.records[0].fields.Senha === password){
          setRedirecionaBusca(true)
          localStorage.setItem('logged', 'true');
          toast.success('Login bem sucedido!');
          //alert('Login bem sucedido!');
        } else {
          setRedirecionaBusca(false);
          toast.error('Usuário e senha não encontrados!');
          //alert('Usuário e senha não encontrados!');
        }
    })
  }


  return (
    <div className="fundoPag">
       { redirecionaBusca === true ? <Redirect to="/" /> : '' }

      <div className="loginNav">
        <Menu headerHeightMobile={12.5} headerHeightDesktop={39.25}/>
      </div>      

      <div className="loginPageContainer">
        <form  onSubmit={handleSubmit}>
          <h1>Login</h1>

          <label htmlFor="email">
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Usuário"
            />
          </label>

          <label htmlFor="senha">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </label>

          <button type="submit"><span>ACESSAR</span></button>
        </form>
      </div>

    </div>
  );
}
