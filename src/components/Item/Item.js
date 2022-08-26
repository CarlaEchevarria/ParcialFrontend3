import { useState } from "react";
import styles from './Item.module.css'

const Item = ({imagen, nombre, descripcion, stock, funcionAumentarCarrito}) => {

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

export default Item;