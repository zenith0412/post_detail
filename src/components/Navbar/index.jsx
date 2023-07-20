import React from 'react'
import prevArrowIcon from '../../assets/prevArrow.svg'
import notificationsIcon from '../../assets/off.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar_main'>
            <div>
                <button className="navbar_button">
                    <img src={prevArrowIcon} className='navbar_icon' alt="" />
                </button>
            </div>
            <div className="navbar_logo">
                <h3>자유톡</h3>
            </div>
            <div>
                <button className="navbar_button">
                    <img src={notificationsIcon} className='navbar_icon' alt="" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar