
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// METODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import { useState } from "react";
import styles from './Item.module.css'

export default function Item({imagen, nombre, descripcion, stock, funcionAumentarCarrito}) {

  const [contadorStock, setContadorStock] = useState(stock)

/*  Cantidad de productos hecho con useEffect - Requiere useRef para que no ejecute la función cada vez que monta Item   --> PARA USARLO RECORDAR IMPORTAR useRef y useEffect */
/*  const esMontaje = useRef(true);

  useEffect (()=> {
    if(esMontaje.current){
      esMontaje.current = false;
      console.log("Item.Js: Se montó por 1ra vez Item");
      } else{
    funcionAumentarCarrito();
    console.log("Item.Js: Se disminuyó  stock del item");
      }
  },[contadorStock])
  */


/*  Cantidad de productos hecho dentro del handler del button*/
  const handleClick = () => {
    setContadorStock(contadorStock-1)
    funcionAumentarCarrito()
    }
  
    return (
    <div className={styles.producto}>
      <img className={styles.img} src={imagen} alt={"Zapatilla: "+ nombre}/>
      <h3 className={styles.h3}>{nombre}</h3>
      <p className={styles.p}>{descripcion}</p>

      <h5 className={styles.h5}>En stock: {contadorStock > 0 ? contadorStock : <span>agotado</span> }</h5>
      
      <button className={styles.button} disabled={contadorStock<1 && true} onClick={handleClick}>{contadorStock > 0 ? "COMPRAR": "SIN STOCK"} </button>
    </div>
  )
}
