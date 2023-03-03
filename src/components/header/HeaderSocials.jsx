import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/manohar-chawada-7976311b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B73Fo4%2BLbSDmFaXFWUiyC6w%3D%3D" target={'_blank'}><BsLinkedin /></a>

            <a href="https://github.com/Manohar1010/" target={'_blank'}><FaGithub /></a>
            
            <a href="https://dribbble.com" target={'_blank'}><FiDribbble /></a>

        </div>
    )
}

export default HeaderSocials