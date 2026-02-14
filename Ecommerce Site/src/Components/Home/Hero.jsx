import React, { useContext } from 'react'
import hero from '../../assets/hero.png'
import style from './Hero.module.css'

const Hero = () => {

    return (
        <>
            <div className={ style.whole}>
                <div className={style.left}>
                    <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                    <p>Browsw throught our diverse range of meticulously crafted garments designed to bring out your individuality and cater to you sense of style.</p>
                    <button>Shop Now</button>
                </div>
                <div className={style.right}>
                    <img src={hero} alt={hero} />
                </div>
            </div>
        </>
    )
}

export default Hero
