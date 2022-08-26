import React from 'react'
import datos from '../data.json'
import Item from '../Item/Item'
import styles from './Listado.module.css'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item. 
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// METODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({funcionAumentarCarrito}) {


  return (
    <div className={styles.container}>
      {datos.map(({id, producto, stock}) => 
      <Item 
      key={id} 
      imagen={producto.imagen}
      nombre={producto.nombre} 
      descripcion={producto.descripcion}
      stock={stock} 
      funcionAumentarCarrito={funcionAumentarCarrito}/>)}
    </div>
  )
}
