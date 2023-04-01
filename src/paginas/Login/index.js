import React from 'react';
import { useState } from 'react';
import {Redirect} from 'react-router-dom';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';

//import './Login.css';
import styles from './Login.module.css';
import Menu from '../../componentes/Menu';

export default function Login() {
  document.title = 'Projeto HashtagFinder - Login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirecionaBusca, setRedirecionaBusca] = useState(false);  

  React.useEffect(() => {

    if(localStorage.getItem('logado') === 'true'){
      setRedirecionaBusca(true)
    }
  }, []);

  // validando o form no front 
  const handleSubmit = e => {
    e.preventDefault();
    let errosFormulario = false;

    if (!isEmail(email)) {
      errosFormulario = true;
      toast.error('E-mail inválido !');
      //alert('E-mail inválido !');
    } 

    if (password.length <= 5) {
      errosFormulario = true;
      toast.error('A senha deve ter 6 caracteres !');
      //alert('A senha deve ter 6 caracteres !');
    }

    if(!errosFormulario){
      getDadosLogin();
    }
  };

  let getDadosLogin = () => {
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=1&view=Grid%20view&api_key=keykXHtsEPprqdSBF&filterByFormula=Find(%2203-23%22%2C+Squad)", {
    })
    .then(resposta => resposta.json())
    .then(respostaJson => {

        if(respostaJson.records[0].fields.Email === email && respostaJson.records[0].fields.Senha === password){
          setRedirecionaBusca(true)
          localStorage.setItem('logado', 'true');
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
    <div className={styles.fundoPag}>
       { redirecionaBusca === true ? <Redirect to="/Busca" /> : '' }

      <div className={styles.loginNav}>
        <Menu headerHeightMobile={12.5} headerHeightDesktop={39.25}/>
      </div>      
      <div className={styles.paginaLogin}>
        <form onSubmit={handleSubmit}>
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
