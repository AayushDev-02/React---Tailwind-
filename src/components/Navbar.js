import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={` border-gray-200 px-2 sm:px-4 py-1 bg-[${props.color}] `}>
        <div className={`container flex flex-wrap items-center justify-between mx-auto bg-[${props.color}]`}>
          <Link to="/" className="flex items-center">
            <span className={`self-center text-3xl font-extrabold whitespace-nowrap text-[${props.bg}]`}>{props.title}</span>
          </Link>


            

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full  md:w-auto md:flex items-center justify-center" id="navbar-default">
            <ul className={`flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:dark:bg-[${props.bg}] dark:border-gray-700`}>
              <li></li>
              <li>
              <div className='hidden w-1/4 md:flex space-x-5 h-full p-2 '>
                <span className={`font-semibold text-[${props.bg}] my-auto`}>Search</span>
                <input placeholder='Search'  className={` bg-[${props.bg}] rounded-2xl text-black focus:outline-none pl-2 py-1 font-thin text-xs h-7`}></input>
            </div>
              </li>
              <li className='flex items-center justify-center'>
                <Link to="/" className={`block py-2 pl-3 pr-4  rounded md:bg-transparent text-[${props.bg}] md:p-0 hover:text-white`} aria-current="page">Home</Link>
              </li>
              <li className='flex items-center justify-center'>
                <Link to="/about" className={`block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-[${props.bg}]  hover:text-[#${props.color}] cursor-pointer`}>{props.aboutText}</Link>
              </li>
              <li className={`flex justify-center items-center rounded-full bg-[${props.bg}] w-10 h-10 cursor-pointer`} onClick={props.enableDarkMode}>
              <props.Heroicon className={`h-6 w-6 text-[${props.color}]`} aria-hidden="true" />
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Aayush Yadav",
    aboutText: "About"
}

