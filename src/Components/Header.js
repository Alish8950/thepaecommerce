import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import Logo from '../styles/images/logo.png'

const Header = () => {
    return (
        <>
            <div className='header-container'>
                <NavLink to="/">
                    <img src={Logo} alt="my logo img" />
                </NavLink>
                <Nav />
            </div>
        </>
    )
}

export default Header
