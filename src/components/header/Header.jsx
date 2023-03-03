import React from 'react'
import './header.css'
import CTA from './CTA'
import Manohar from '../../assest/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm </h5>
        <h1>Manohar chawada</h1>
        <h5 className='text-light'>Mern Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">

          <img src={Manohar} alt="manohar chawada" className='manohar' />

        </div>
        <a href="#contact" className='scroll__doun'>Scroll Doun</a>



      </div>

    </header>
  )
}

export default Header