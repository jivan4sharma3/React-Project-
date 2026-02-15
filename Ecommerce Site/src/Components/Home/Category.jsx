import React from 'react'
import casual from '../../assets/causal.png'
import formal from '../../assets/formal.png'
import gym from '../../assets/gym.png'
import party from '../../assets/party.png'
import style from './Category.module.css'

const Category = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.head}>
                    <h2>BROWSE BY DRESS STYLE</h2>
                </div>
                <div className={style.main}>
                    <div className={style.left}>
                        <h2 className={style.h3}>Casual</h2>
                        <img className={style.img} src={casual} alt="" />
                    </div>
                    <div className={style.right}>
                        <h2 className={style.h3}>Formal</h2>
                        <img className={style.img} src={formal} alt="" />
                    </div>
                </div>
                <div className={style.bmain}>
                    <div className={style.bleft}>
                        <h2 className={style.h3}>Party</h2>
                        <img className={style.img} src={party} alt="" />
                    </div>
                    <div className={style.bright}>
                        <h2 className={style.h3}>Gym</h2>
                        <img className={style.img} src={gym} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
