import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://github.com/diepanhng0711" style={{ textDecoration: 'none' }}target='_blank' >
                <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://fb.com/justphuonglyyy" style={{ textDecoration: 'none' }} target='_blank'>
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/_justphuonglyy/" style={{ textDecoration: 'none' }} target='_blank'>
                    <BsInstagram />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia