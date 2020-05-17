import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
  const { nombre, precio, id } = producto;

  // Agregar producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id)[0];
    // ...carrito = spread operator
    agregarProducto([
      ...carrito,
      producto
    ]);
  }

  // eliminar Producto del carrito
  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    // Colocar productos en el State 
    agregarProducto(productos);
  }

  return (
    <div>
      <h4>{nombre}</h4>
      <p>${precio}</p>

      {productos
      ?
      (
        <button
          type="button"
          onClick={ () => seleccionarProducto(id) }
        >Comprar</button>
      )
      :
        (
          <button
            type="button"
            onClick={ () => eliminarProducto(id) }
          >Eliminar</button>
        )
      }
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