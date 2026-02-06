import React, { use, useContext } from 'react'
import style from './HomeCard.module.css'
import Themes from '../../context/Themes'

const HomeCard = ({ nm, number, per, icon }) => {

    const { themes } = useContext(Themes)

    return (
        <div className={themes ? style.carddark : style.card}>
            <h3 className={style.h3}>{nm}</h3>
            <div className={style.display}>
                <p className={style.p1}>{number}</p>
                <p className={style.p}><span class="material-symbols-outlined">
                    {icon}
                </span>{per}</p>
            </div>
        </div>
    )
}

export default HomeCard
