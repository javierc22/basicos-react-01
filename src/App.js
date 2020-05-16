import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {
  // Obtener la fecha
  const fecha = new Date().getFullYear();

  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50},
    { id: 2, nombre: 'Camisa VueJS', precio: 40},
    { id: 3, nombre: 'Camisa Node.js', precio: 30},
    { id: 4, nombre: 'Camisa Angular', precio: 20},
  ]);

  // State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  return (
    <Fragment>
      <Header titulo="Hola, soy un Header!" />

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      {/* Fecha se manda entre "{}" porque no es un String */}
      <Footer
        fecha={fecha} 
      />
    </Fragment>
  );
}

export default App;
