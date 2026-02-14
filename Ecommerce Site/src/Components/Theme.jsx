import React, { useContext } from 'react'
import Context from '../Contexts/Context';
import style from './Theme.module.css'

const Theme = () => {

    const { theme, setTheme } = useContext(Context);

    return (
        <div className={style.div} onClick={() => { setTheme(!theme) }}>
           
                {theme ? <lord-icon
                    src="https://cdn.lordicon.com/jjqwsavk.json"
                    trigger="hover">
                </lord-icon> : <lord-icon
                    src="https://cdn.lordicon.com/yodwgokk.json"
                    trigger="hover">
                </lord-icon>}
           
        </div>
    )
}

export default Theme
