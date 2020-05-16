import React from 'react';

// Utilizando Function Declaration
function Header() {
  const edad = 18;

  let mensaje;

  if (edad >= 18) {
    mensaje = 'Eres mayor de edad';
  } else {
    mensaje = 'Eres menor de edad'
  }

  return(
    <h3>{mensaje}</h3>
  )
}

export default Header;