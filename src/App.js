import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Hola, soy un Header!" />
      {/* Fecha se manda entre "{}" porque no es un String */}
      <Footer  fecha={fecha} />
    </Fragment>
  );
}

export default App;
