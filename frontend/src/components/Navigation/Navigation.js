import React from 'react'
import { Link } from "react-router-dom";
import StyledNav from './Navigation.styled'
import Searchbar from '../Searchbar/Searchbar'
// Icons
import { Envelope, Phone, Heart, Cart } from 'styled-icons/boxicons-regular'

const Navigation = () => {

    return (
        <StyledNav>
            <div className='heading-bar'>
                <div className='heading-container'>
                    <div className='left-aligned-heading'>
                        <div className='heading-item'>
                            <Envelope />
                            <span>fakeemail@gmail.com</span>
                        </div>
                        <div className='heading-item'>
                            <Phone />
                            <span>+1(123)456-7890</span>
                        </div>
                    </div>
                    <div className='right-aligned-heading'>
                        <div className='heading-item'>
                            <span>Wishlist</span>
                            <Heart />
                        </div>
                        <div className='heading-item'>
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-bar'>
                <div className='nav-container'>
                    <div className='logo'>Ecomm</div>
                    <div className='menu'>
                        <Link to="/">Home</Link>
                        <Link to="/pages">Pages</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <Searchbar/>
                </div>
                
            </div>
        </StyledNav>
    )
}

export default Navigation