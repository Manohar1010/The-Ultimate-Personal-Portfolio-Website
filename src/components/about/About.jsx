import React from 'react';
import './about.css'
import Me from '../../assest/Manohar.full.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Months Traning</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Users</h5>
              <small></small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 2 Project Completed</small>
            </article>
          </div>

          <p>
            Seeking a challenging position in a reputable organization to expand and utilize my learning, skills and knowledge. Possess excellent communication skills and have an eye for detail. Flexible to work in any environment as required.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About