import React, { useContext } from 'react'
import style from './HomeTop.module.css'
import HomeCard from './HomeCard'
import Themes from '../../context/Themes'

const HomeTop = () => {

    const { themes } = useContext(Themes)

    return (
        <>
            <div className={style.top}>
                <h2 className={style.h2}>Overview</h2>
                {/* <button className={themes ? style.buttondark : style.button}> */}
                    <select name="select" id="" className={themes ? style.buttondark : style.button}>
                        <option className={style.option} value="all_time">All Time</option>
                        <option className={style.option} value="all_time">Last Month</option>
                        <option className={style.option} value="all_time">Last Week</option>
                        <option className={style.option} value="all_time">Last day</option>
                    </select>
                {/* </button> */}
            </div>
            <div className={themes ? style.buttomdark : style.buttom}>
                <HomeCard nm="Total Sales " number="$234" per="4%" icon="keyboard_arrow_up" />
                <HomeCard nm="Orders " number="234" per="4%" icon="keyboard_arrow_up" />
                <HomeCard nm="Customers " number="234" per="4%" icon="keyboard_arrow_down" />
                <HomeCard nm="Products" number="233" per="Active" />

            </div>
        </>
    )
}

export default HomeTop
