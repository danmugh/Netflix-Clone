import React, { useState, useEffect } from 'react';
import './Navabar.css';
import logo from '../src/assets/image/img_1.svg';
import avatar from '../src/assets/image/img_2.jpg';

const nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return () => {
            window.addEventListener('scroll')
        }
    }, [])


    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                src={logo}
                alt='Netflix Logo'
                className='nav__logo' />

            <img
                src={avatar}
                alt='Profile image'
                className='nav__avatar' />
        </div>
    )
}

export default nav;