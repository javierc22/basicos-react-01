import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
  const { nombre, precio, id } = producto;

  // Agregar producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id)[0];
    console.log(producto);
  }

  return (
    <div>
      <h4>{nombre}</h4>
      <p>${precio}</p>
      <button
        type="button"
        onClick={ () => seleccionarProducto(id) }
      >Comprar</button>
    </div>
  );
}

// Otra forma válida
// const Producto = ({producto}) => {
//   return (
//     <div>
//       <h4>{producto.nombre}</h4>
//       <p>${producto.precio}</p>
//     </div>
//   );
// }
 
export default Producto;