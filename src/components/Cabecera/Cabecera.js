import React from 'react'
import styles from './Cabecera.module.css'


const Cabecera = ({totalCarrito}) => {
  
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Carrito de compras</h1>
      <p className={styles.p}>Cantidad de productos <span className={styles.span}>{totalCarrito}</span></p>
    </header>
  )
}

export default Cabecera;