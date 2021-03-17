import React from 'react';
import {Nav,NavLink, NavMenu} from './navbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Text" activeStyle>Text</NavLink>
                    <NavLink to="/Image" activeStyle>Image</NavLink>
                    <NavLink to="/Video" activeStyle>Video</NavLink>
                    <NavLink to="Table" activeStyle>Table</NavLink>
                    <NavLink to="/Email" activeStyle>Email</NavLink>
                    <NavLink to="/Meeting" activeStyle>Meeting</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
