import React from 'react';
import './App.css';
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
    </div>
  );
}

export default App;
