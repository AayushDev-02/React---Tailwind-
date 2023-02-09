import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        setText("You have clicked on handleUpClick")
    }

    const handleOnChange = (event) => {
        console.log("On change was clicked !" )
        setText(event.target.value);
    }

    const [text, setText] = useState(' Enter text here ');
    // text = "awln"     --- wrong way to change state
    // setText("ai lawi awl");  --- correct way to change the state
    

    return (
        <div className='p-10 w-4/5  mx-auto items-center justify-center flex flex-col bg-white mt-20 rounded-lg shadow-xl '>

            <h1 className='text-4xl font-extrabold mb-5 text-[#363062]'>Submit Form</h1>

            <label htmlFor="myBox" id='myBox' className="block my-5 text-2xl font-medium text-[#363062] ">{text}</label>

            <textarea id="myBox" rows="4" className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#363062] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."  onChange={handleOnChange} />

            <button className='mt-5 bg-[#363062] text-white rounded-md font-semibold p-2 w-20 text-sm hover:bg-[#E9D5CA] hover:text-[#363062]' onClick={handleUpClick}>Submit</button>

        </div>
    )
}
