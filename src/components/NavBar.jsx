import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
const NavBar = () => {
	const [toggle, setToggle] = useState(false)

	const menuItems = ['Home', 'About', 'Skills', 'Work', 'Contact']

	const showMenu =
		'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
	const menu = menuItems.map((menu) => (
		<li className='py-6 text-4xl  md:text-base md:py-0 '>
			{menu}
		</li>
	))

	return (
		<div className='fixed w-full h-[80px] px-4 flex justify-between items-center bg-[#0a192f] text-gray-300 '>
			<div>
				<img src={Logo} alt='logo' style={{width: '50px'}} />
			</div>
			{/* Menu */}
			<ul className='hidden md:flex'>{menu}</ul>
			{/* Hamburgers */}
			<div className='z-10 md:hidden' onClick={() => setToggle(!toggle)}>
				{!toggle ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile Menu */}

			<ul className={!toggle ? 'hidden' : showMenu}>{menu}</ul>
			{/* Social Icon */}
			<div className='hidden lg:block  fixed  top-[40%]  left-0'>
				<ul>
					<li className='w-[190px] h-[60px] flex  items-center'>
						<a
							href='linkedin.com'
							className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] p-2 duration-300 bg-blue-900 '
						>
							Linkedin
							<FaLinkedin size={33} />
						</a>
					</li>
					<li className='w-[190px] h-[60px] flex items-center'>
						<a
							href='facebook.com'
							className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] p-2 duration-300 bg-blue-600 '
						>
							Mail
							<HiOutlineMail size={35} />
						</a>
					</li>
					<li className='w-[190px] h-[60px] flex items-center'>
						<a
							href='github.com'
							className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] p-2 duration-300 bg-[#6e7681] '
						>
							Github
							<FaGithub size={35} />
						</a>
					</li>
					<li className='w-[190px] h-[60px] flex items-center'>
						<a
							href='twitter.com'
							className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] p-2 duration-300 bg-[#1d9bf0] '
						>
							Resume <BsFillPersonLinesFill size={35} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar
