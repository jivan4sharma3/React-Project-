import React from 'react'
import styles from './Button.module.css'

const Button = ({ nm, setActiveSection, icon }) => {
    return (
        <div
            onClick={() => {
                setActiveSection(nm)
            }}
            className={styles.button}
        >
            <span className="material-symbols-outlined icon">
                {icon}
            </span>
            {nm}
        </div>
    )
}

export default Button
