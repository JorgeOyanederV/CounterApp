import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {

   const [estado, setEstado] = useState(value);

   return (
      <>
         <h1 class='flex-center'>CounterApp</h1>
         <h2 class='flex-center'> {estado} </h2>

         <button onClick={() => { setEstado(estado + 1) }} > Sumar 1</button>
         <button onClick={() => { setEstado(estado - 1) }} > Restar 1</button>
         <button onClick={() => { setEstado(value) }} > Resetear</button>
      </>
   );
}
CounterApp.propTypes = {
   value: PropTypes.number,
}


export default CounterApp;