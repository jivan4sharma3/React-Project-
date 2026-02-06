import React, { useContext } from 'react'
import style from './ProductCards.module.css'
import Themes from '../../context/Themes'

const ProductCards = ({ img }) => {

    const { themes } = useContext(Themes)

    return (
        <>
            <div className={themes ? style.carddark : style.card}>
                <div className={style.left}>
                    <img width={60} height={60} className={style.img} src={img} alt="" />
                    <div className={style.text}>
                        <h3>Product name</h3>
                        <p>UKL</p>
                    </div>
                </div>
                <div className={style.earn}>
                    <p>$234</p>
                </div>
            </div>
        </>
    )
}

export default ProductCards
