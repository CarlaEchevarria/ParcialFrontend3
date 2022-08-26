import React from 'react'
import datos from '../data.json'
import Item from '../Item/Item'
import styles from './Listado.module.css'

const Listado = ({funcionAumentarCarrito}) => {


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

export default Listado;
