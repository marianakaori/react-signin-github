import React from 'react';
import './App.css';
import CadastreSeSignUp from './components/cadastrese';
import FooterSignIn from './components/footer';
import FormularioSignIn from './components/formulario';
import HeaderSignIn from './components/header'

function App() {
  return (
    <div className="App">
      <div className="headerSignIn">
        <HeaderSignIn/>
      </div>
      <div className="formularioSignIn">
        <FormularioSignIn/>
      </div>
      <div className="cadastreSe">
        <CadastreSeSignUp/>
      </div>
      <div>
        <FooterSignIn/>
      </div>
    </div>
  );
}

export default App;
