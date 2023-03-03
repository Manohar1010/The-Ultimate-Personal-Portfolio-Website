import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {

  const [activeNev, setActiveNev] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNev('#')} className={activeNev === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNev('#about')} className={activeNev === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNev('#experience')} className={activeNev === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#service" onClick={() => setActiveNev('#service')} className={activeNev === '#service' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNev('#contact')} className={activeNev === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav