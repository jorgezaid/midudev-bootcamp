//import React , {useState}from 'react'
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
//cuando es react-dom/cliente - usar con la constante
// si es react-domm usar el metodo antiguo

const App = () => {

  const [bueno, setbueno] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [malo, setmalo] = useState(0);
  const [total, settotal] = useState(0);

  const clickBueno = () => {
    console.log(setbueno)
    setbueno(bueno + 1)
    settotal(total + 1)
  }
  const clickNeutral = () => {
    setneutral(neutral + 1)
    settotal(total + 1)
  }
  const clickMalo = () => {
    setmalo(malo + 1)
    settotal(total + 1)
  }

  const porcentajes = () => {
    let postivo = total * bueno 
  }
 

  return (
    <div>
      <h1>Tu Opinion Importa</h1>
      <button onClick={clickBueno}>Bueno</button>
      <button onClick={clickNeutral}>Neutral</button>
      <button onClick={clickMalo}>Malo</button>
      <h1>Estadisiticas</h1>
      <ol>
        <li>Bueno {bueno}</li>
        <li>Neutral {neutral}</li>
        <li>Malo  {malo}</li>
        <li>Todos {total}</li>
        <li>Malos </li>
        <li>Positivos  </li>
      </ol>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
