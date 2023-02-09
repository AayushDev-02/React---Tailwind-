import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-1  bg-[#363062] sticky top-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">{props.title}</span>
          </a>


            

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full  md:w-auto md:flex items-center justify-center" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#363062] dark:border-gray-700">
              <li></li>
              <li>
              <div className='hidden w-1/4 md:flex space-x-5 h-full p-2 '>
                <span className='font-semibold text-white my-auto'>Search</span>
                <input placeholder='Search'  className=' bg-[#E9D5CA] rounded-2xl text-black focus:outline-none pl-2 py-1 font-thin text-xs h-7'></input>
            </div>
              </li>
              <li className='flex items-center justify-center'>
                <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#E9D5CA] md:p-0 dark:text-white hover:text-white" aria-current="page">Home</a>
              </li>
              <li className='flex items-center justify-center'>
                <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-[#E9D5CA]">{props.aboutText}</a>
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

