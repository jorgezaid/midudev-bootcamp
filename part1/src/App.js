
import './App.css';
import Mensaje from './Mensaje.js'
import Descripcion from './Descripcion/Descripcion.js'



const App = () => {

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos en Un'/>
      <Mensaje color='yellow'message='Curso de ' />
      <Mensaje color='green'message='React' />
      <Descripcion />
      <br/>

    </div>
  );
}

export default App;
