import React, { useState, useEffect } from 'react';
import './Navabar.css'

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
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='Netflix Logo'
                className='nav__logo' />

            <img
                src='https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg'
                alt='Profile image'
                className='nav__avatar' />
        </div>
    )
}

export default nav;