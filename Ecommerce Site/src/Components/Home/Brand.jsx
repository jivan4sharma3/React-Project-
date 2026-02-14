import React, { useContext } from 'react'
import style from './Brand.module.css'
import Context from '../../Contexts/Context';

const Brand = () => {
    const brands = [
        "VERSACE",
        "ZARA",
        "GUCCI",
        "PRADA",
        "Calvin Klein",
    ];

    const{theme} = useContext(Context)

    return (
        <div className={style.brandcontainer  }>
            {brands.map((brand, index) => (
                <h1
                    key={index}
                    className={style.branditem}
                >
                    {brand}
                </h1>
            ))}
        </div>
    );
}

export default Brand
