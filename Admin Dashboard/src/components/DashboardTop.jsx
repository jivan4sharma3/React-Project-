import React, { useContext } from 'react'
import styles from './DashboradTop.module.css'
import Themes from '../context/Themes'

const DashboardTop = () => {

    const { themes, setThemes } = useContext(Themes)

    const change = () => {
        if (themes == true) {
            setThemes(false)
        } else {
            setThemes(true)
        }
    }

    return (
        <>
            <div className={themes?styles.topdark:styles.top }>
                <span class="material-symbols-outlined">search</span>
                <input className={styles.input} type="text" placeholder='Search or type a command' />
            </div>
            <div className={styles.bottom}>
                <div className={styles.dark} onClick={change}>
                    {
                        themes == true ? (
                            <span class="material-symbols-outlined ">
                                light_mode
                            </span>
                        ) : (
                            <span class="material-symbols-outlined">
                                dark_mode
                            </span>
                        )
                    }
                </div>
                <span class="material-symbols-outlined">
                    notifications
                </span>
                <img className={styles.img} src="https://images.unsplash.com/photo-1615109398623-88346a601842?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" width={33} height={33} alt="" />
            </div>
        </>
    )
}

export default DashboardTop
