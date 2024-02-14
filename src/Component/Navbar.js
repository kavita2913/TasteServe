import React from 'react'
import './navbar.css'
import Divider from "@mui/material/Divider";
import { BsCart2 } from "react-icons/bs";
// import Logo from '../Images/tasteserve.logo.png'
const Navbar = () => {
    return (
        <nav>
{/* <div className='navbarImg'>
            <div className='navbar'>
            <img src={Logo} alt="" />
            </div></div> */}
            <div className='navbar'>
            <h1 className='navHead'>Taste Serve</h1>
            </div>
            <div className="navbar-links-container">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>
                <a href="">
                    <BsCart2 className="navbar-cart-icon" />
                </a>
                <button className="primary-button">Sign in</button>
            </div>
            {/* </div> */}
            <Divider />
        </nav>

    )
}

export default Navbar
