import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <span className='text-lg'>Prajyot Pawaskar</span>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/prajyot-pawaskar"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Linkedin'
                >
                    <FaLinkedin />
                </a>
                <a href="https://github.com/PrajyotPawaskar"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'
                >
                    <FaGithub />
                </a>
            </div>
        </nav>
    )
}

export default Navbar