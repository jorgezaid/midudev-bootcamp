import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';
import './styles.css'

const App = () => {
  //const [left, setLeft] = useState(0);
  //const [right, setRight] = useState(0);

  //crear un Estado para botones 

  const [contador, setcontador] = useState(
    {
      left:0,
      right:0
    }
  );

  const handlerClickLeft = () => {
    setcontador({
      left : contador.left + 1,
      right: contador.right
    })
  }

  const handlerClickRight = () => {
    setcontador({
      left: contador.left,
      right: contador.right + 1
    })
  }

 
  return (
    <div>
      {contador.left}
      <button onClick={handlerClickLeft}>Izquierda</button>
      <button onClick={handlerClickRight}>Derecha</button>
      {contador.right}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
)
