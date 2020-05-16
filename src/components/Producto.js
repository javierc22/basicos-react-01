import React from 'react';

const Producto = ({producto}) => {
  const { nombre, precio, id } = producto;

  return (
    <div>
      <h4>{nombre}</h4>
      <p>${precio}</p>
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