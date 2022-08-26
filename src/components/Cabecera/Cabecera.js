import React from 'react'
import styles from './Cabecera.module.css'
// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// METODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({totalCarrito}) {
  
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Carrito de compras</h1>
      <p className={styles.p}>Cantidad de productos <span className={styles.span}>{totalCarrito}</span></p>
    </header>
  )
}
