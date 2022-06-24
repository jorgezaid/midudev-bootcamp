import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Counter = (props) => {
  return <h1>{props.msg}</h1>
}

const App = (props) => {
  const [contadorValue, updateContador] = useState(13);

  /*
  const contador = useState(13);
  const contadorValue = contador[0];
  const updateContador = contador[1];
  */

  const handlerClick = () => {
    updateContador(contadorValue +1);
  }

  const handlerReset = () => {
    updateContador(0)
  }

  const isPar = contadorValue % 2 === 0;
  const mensaje = isPar ? 'Es Par' : 'Impar';

  return (
    <div>
      <Counter msg={contadorValue}/>
      <p>{mensaje}</p>
      <button
      onClick={handlerClick}>
        Incrementar
      </button>
      <button onClick={handlerReset}>
        Reiniciar
      </button>
    </div>
  );
};

root.render(
  <App />
)


