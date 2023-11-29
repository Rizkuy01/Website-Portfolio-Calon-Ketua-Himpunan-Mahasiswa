import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo192 from '../assets/logo192.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = ()=> setNav(!nav)
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-[#4ef9ff] bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3]'>
        <div className="">
            <img src={Logo192} alt="logo" style={{width: '50px'}} />
        </div>

            {/* Menu */}
            <ul className='hidden md:flex text-[#4ef9ff]'>
                    <li>
                    <Link to='hero' smooth={true} duration={500}> About Me</Link>
                        {/* <a href="/about">About Me</a> */}
                    </li>
                    <li>
                    <Link to='goals' smooth={true} duration={500}> Visi&Misi</Link>
                        {/* <a href="/goals">Visi&Misi</a> */}
                    </li>
                    <li>
                    <Link to='project' smooth={true} duration={500}> Program Kerja</Link>
                        {/* <a href="/project">Program Kerja</a> */}
                    </li>
                    <li>
                    <Link to='contact'smooth={true} duration={500}> Message</Link>
                        {/* <a href="/contact">Message</a> */}
                    </li>
                    <li>
                    {/* <Link to='login'smooth={true} duration={500}> Log In</Link> */}
                        {/* <a href="/login">Log In</a> */}
                    </li>
                </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 text-white'>
                {!nav ? <FaBars /> : <FaTimes/>}
            </div>

            {/* Mobile */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#03001C] to-[#301E67] to-[#3432a3] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>About Me</li>
                <li className='py-6 text-4xl'>Visi&Misi</li>
                <li className='py-6 text-4xl'>Program Kerja</li>
                <li className='py-6 text-4xl'>Message</li>
            </ul>

            {/* Social Media */}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='github w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#374151]'>
                        <a className='flex justify-between items-center w-full text-white'
                        href="https://github.com/Rizkuy01">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='linkedin w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white '
                        href="www.linkedin.com/in/rzkysptrrr">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='instagram w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-white '
                        href="https://instagram.com/rzkysptrrr">
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar