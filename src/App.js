import { useState } from "react";
import Cabecera from "./components/Cabecera/Cabecera";
import Listado from "./components/Listado/Listado";

const App = () => {

  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  const aumentarCarrito= () => {
    console.log("App.js: Se ejecuta la fx aumentar carrito")
    setCantidadCarrito(cantidadCarrito + 1)
    console.log("App.js: Se suma 1 item a carrito")
  }

  return (
    <div className="App">
      <Cabecera totalCarrito={cantidadCarrito}/>
      <Listado funcionAumentarCarrito={aumentarCarrito}/>
    </div>
  );
}

export default App;
