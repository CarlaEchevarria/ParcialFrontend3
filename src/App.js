// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// METODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import { useState } from "react";
import Cabecera from "./components/Cabecera/Cabecera";
import Listado from "./components/Listado/Listado";


function App() {

  let [cantidadCarrito, setCantidadCarrito] = useState(0);

  function aumentarCarrito(){
    console.log("App.js: Se ejecuta la fx aumentar carrito")
    setCantidadCarrito(cantidadCarrito + 1)
    console.log("App.js: Se suma 1 item a carrito")
    return cantidadCarrito;
  }


  return (
    <div className="App">
      <Cabecera totalCarrito={cantidadCarrito}/>
      <Listado funcionAumentarCarrito={aumentarCarrito}/>
    </div>
  );
}

export default App;
