import React from 'react'
import styles from './Logo.module.css'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div className={styles.container}>
        <img height={52} src={logo} alt="" />
        <h2 className={styles.header}>JSharam Store</h2>
    </div>
  )
}

export default Logo
