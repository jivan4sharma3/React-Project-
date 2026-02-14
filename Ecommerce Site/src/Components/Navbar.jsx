import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import Context from '../Contexts/Context';


const Navbar = () => {

    const { theme } = useContext(Context)

    return (
        <>
            <header>
                <nav className={theme?"nav-dark":"nav"}>
                    <div className={theme?"nav-container-dark":"nav-container"}>
                        <div className={theme?"nav-left-container-dark":"nav-left-container"}>
                            <div className="navlogo">
                                <img width={40} src={logo} alt="" />
                                <h1>JStore</h1>
                            </div>
                        </div>

                        <input type="checkbox" id="sidebar-active" />
                        <label for="sidebar-active" className="open-sidebar-button">
                            {/* <!-- Hamburger Icon --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"
                                fill="#111">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                            </svg>
                        </label>

                        <div className={theme?"nav-right-container-dark":"nav-right-container"}>
                            <ul>
                                <label for="sidebar-active" className="close-sidebar-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"
                                        fill="#111">
                                        <path
                                            d="M249-207 207-249l231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                                    </svg>
                                </label>

                                {/* nav links section   */}

                                <li><a href="">Home</a></li>
                                <li><a href="">On Sale</a></li>
                                <li><a href="">New Arrivals</a></li>
                                <li><a href="">Contact</a></li>

                                {/* Search container  */}
                                <div className="search-container">
                                    <span className={theme?"search-box-dark":"search-box"}>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/wjyqkiew.json"
                                            trigger="hover"
                                            className="search-icon"
                                        ></lord-icon>
                                        <input type="text" placeholder="Search..." className={theme?"search-input-dark":"search-input"} />
                                    </span>
                                </div>

                                {/* Buttons Section */}
                                <div className="btns-container">
                                    <button className="btn login-btn">Login</button>
                                    <button className="btn register-btn">Register</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
