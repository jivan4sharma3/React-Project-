import React, { useState } from 'react'
import style from './Cards.module.css'
import hero from '../assets/hero.png'

const Cards = ({ detailsCard, head }) => {
    const [details, setDetails] = useState(detailsCard)
    return (
        <>
            <div>
                <div className={style.head}>
                    <h2>{head}</h2>
                </div>
                <div className={style.cards}>
                    {
                        details.map((item, index) => {
                            return (
                                <div className={style.card}>
                                    <div className={style.imgcard}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <div className={style.rate}>
                                        <span>{item.star}</span>
                                        <p>{item.rate}</p>
                                    </div>
                                    <div className={style.price}>
                                        <span>{item.disPrice}</span>
                                        <span> {item.ActPrice} </span>
                                    </div>
                                    <div className={style.btns}>
                                        <button className={style.addcard}>Add Card </button>
                                        <button className={style.buy}>Buy</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className={style.viewbtn}>
                    <button className={style.viewall}>View All </button>
                </div>
            </div>
        </>
    )
}

export default Cards
