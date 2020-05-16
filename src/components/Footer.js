import React from 'react';

// Utilizando function expression
const Footer = () => {
  return (
    <footer>
      <p>Todos los derechos reservados &copy;</p>
    </footer>
  );
}

// Con function expression puedes acortar la expresión 
// siempre y cuando sólo se retorne HTML sin utilizar Javascript
// const Footer = () => (
//   <footer>
//     <p>Todos los derechos reservados &copy;</p>
//   </footer>
// );

export default Footer;