import React, { useContext, useRef, useState } from 'react'
import styles from './Product.module.css'
import Themes from '../../context/Themes'

const Product = () => {

    const { themes } = useContext(Themes)

    // Create ref to bring the balue of input filed
    const pname_ref = useRef()
    const imgurl_ref = useRef()
    const category_ref = useRef()
    const price_ref = useRef()
    const quantiy_ref = useRef()

    // Create a state which is stored all products details in form of object 
    const [allProduct, setAllProduct] = useState([])


    // Create a randon id for prodcut 
    const generateProductId = () => {
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        return `p_${randomNumber}`;
    }

    // Create a date for when the product is added 
    const getTodayDate = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();

        return `${month}-${day}-${year}`;
    }


    // Create a function to add new product 
    const handleaddProduct = () => {
        let id = generateProductId()
        let date = getTodayDate()

        let allProductslist = allProduct
        allProductslist.push({
            pname: pname_ref.current.value,
            img_url: URL.createObjectURL(imgurl_ref.current.files[0]),
            category: category_ref.current.value,
            id: id,
            price: price_ref.current.value,
            createAt: date,
            quantity: quantiy_ref.current.value
        })
        setAllProduct([...allProductslist])
        setShow(false)

    }

    // Create a state which show the add product form and we can add product 
    const [show, setShow] = useState(false)

    return (
        <div className={styles.whole}>
            <div className={themes ? styles.Pcontainerdark : styles.Pcontainer}>
                <div className={styles.Ptop}>
                    <h2 className={styles.h2}>Products</h2>
                    <button
                        className={styles.addbtn}
                        onClick={() => { setShow(true) }}
                    >
                        <span class="material-symbols-outlined">
                            add
                        </span>
                        Add Product
                    </button>
                </div>
                <table className={styles.table}>
                    <thead className={themes ? styles.theaddark : styles.thead}>
                        <tr>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Product Image
                            </th>
                            <th>Category</th>
                            <th>Product ID</th>
                            <th>Product Price</th>
                            <th>Created AT</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody className={themes ? styles.tbodydark : styles.tbody}>
                        {allProduct.map((product, index) => (
                            <tr key={index}>
                                <td className={themes?styles.productnamesdark:styles.productnames}>
                                    <span className={styles.orderid}>{product.pname}</span>
                                </td>
                                <td>
                                    <img className={styles.productimg} src={product.img_url} alt={product.pname} />
                                </td>

                                <td className={styles.customer}>
                                    <span>{product.category}</span>
                                </td>

                                <td>
                                    <span>{product.id}
                                    </span>
                                </td>

                                <td className={styles.total}>{product.price}</td>
                                <td className={styles.date}>{product.createAt}</td>

                                <td className={styles.menu}>{product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    show && (
                        <div className={styles.wholeform}>
                            <div className={themes ? styles.formwrapperdark : styles.formwrapper}>
                                <div className={themes ? styles.formtitledark : styles.formtitle}>
                                    <h1>Add Product</h1>
                                    <div
                                        className={styles.cross}
                                        onClick={() => { setShow(false) }}
                                    >
                                        <span class="material-symbols-outlined">
                                            close
                                        </span>
                                    </div>
                                </div>
                                <div className={themes ? styles.formgroupdark : styles.formgroup}>
                                    <label htmlFor="name">Product Name </label>
                                    <input ref={pname_ref} type="text" name='name' placeholder='Enter your product name ' required />
                                </div>
                                <div className={themes ? styles.formgroupdark : styles.formgroup}>
                                    <label htmlFor="name">Product Image  </label>
                                    <input ref={imgurl_ref} type="file" name='name' placeholder='Enter your product name ' required />
                                </div>
                                <div className={themes ? styles.formgroupdark : styles.formgroup}>
                                    <label htmlFor="category">Category</label>
                                    <input ref={category_ref} type="text " name='cartegory ' placeholder='Enter your product category ' required />
                                </div>
                                <div className={themes ? styles.formgroupdark : styles.formgroup}>
                                    <label htmlFor="price">Product Price</label>
                                    <input ref={price_ref} type="number" name='price' placeholder='Enter product price ' required />
                                </div>
                                <div className={themes ? styles.formgroupdark : styles.formgroup}>
                                    <label htmlFor="quantity">Quantity</label>
                                    <input ref={quantiy_ref} type="number" name='quantity' placeholder='Enter quantity o' required />
                                </div>
                                <div className={styles.formbtn}>
                                    <button onClick={handleaddProduct}> Add </button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default Product
