import React, { useState, useContext } from 'react'
import styles from './Dashboard.module.css'
import Button from '../components/Button'
import Logo from '../components/Logo'
import DashboardTop from '../components/DashboardTop'
import Home from '../components/Home/Home'
import Themes from '../context/Themes'
import Product from '../components/Products/Product'
import Order from '../components/order/Order'


const Dashboard = () => {

    const { themes, setThemes } = useContext(Themes)

    // Create a state which change the section of dashboard
    const [activeSection, setActiveSection] = useState("Home")

    return (

        <div className={styles.whole}>
            <aside className={themes ? styles.asidedark : styles.aside} >
                <div>
                    <Logo />
                </div>
                <div>
                    <Button icon="home" nm="Home" setActiveSection={setActiveSection} />
                    <Button icon="add_shopping_cart" nm="Products" setActiveSection={setActiveSection} />
                    <Button icon="groups" nm="Customers" setActiveSection={setActiveSection} />
                    <Button icon="orders" nm="Order" setActiveSection={setActiveSection} />
                    <Button icon="featured_seasonal_and_gifts" nm="Shop" setActiveSection={setActiveSection} />
                </div>
                <div className={styles.asidebottom}>
                    <div>
                        <hr className={styles.hr} />
                        <div className={styles.asidebtn}>
                            <span class="material-symbols-outlined">
                                help
                            </span>
                            <p>Help</p>
                        </div>
                        <div className={styles.asidebtn}>
                            <span class="material-symbols-outlined">
                                logout
                            </span>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </aside>
            <main className={themes ? styles.maindark : styles.main}>
                <div className={themes ? styles.dashboardtopdark : styles.dashboardtop}>
                    <DashboardTop />
                </div>
                <div>
                    {
                        activeSection == "Home" ? (
                            <Home />
                        ) : activeSection == "Products" ? (
                            <Product/>
                        ) : activeSection == "Customers" ? (
                            <div>This is Customers</div>
                        ) : activeSection == "Order" ? (
                            <Order/>
                        ) : activeSection == "Shop" ? (
                            <div>This is Shop</div>
                        ) : null
                    }
                </div>
            </main>

        </div>
    )
}

export default Dashboard
