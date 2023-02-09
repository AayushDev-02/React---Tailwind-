import React, { useState } from 'react'
// useState is a hook - hooks let you use state and other react features without writing a class

// import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleLowClick = () =>{
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On change was clicked !")
        if (event.target.value === '') {
            setText("Enter text here ")
        } else {

            setText(event.target.value);
        }
        
    }

    const handleClearClick = () => {
        setText("");
        
    }

    const [text, setText] = useState(' Enter text here ');
    // text = "awln"     --- wrong way to change state
    // setText("ai lawi awl");  --- correct way to change the state


    return (
        <div className='p-10 w-4/5  mx-auto items-center justify-center flex flex-col bg-white mt-20 rounded-lg shadow-xl '>

            <h1 className='text-4xl font-extrabold mb-5 text-[#363062]'>Submit Form</h1>

            <label htmlFor="myBox" id='myBox' className="block my-5 text-lg font-medium bg-[#E9D5CA] w-full rounded-md px-2 py-5 text-[#363062] ">{text}</label>

            <textarea id="myBox" rows="4" className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#363062] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." onChange={handleOnChange} />
            <div className='space-x-5'>
                <button className='mt-5 w-fit bg-[#363062] text-white rounded-md font-semibold p-2 text-sm hover:bg-[#E9D5CA] hover:text-[#363062]' onClick={handleUpClick}>Upper Case</button>
                <button className='mt-5 w-fit bg-[#363062] text-white rounded-md font-semibold p-2 text-sm hover:bg-[#E9D5CA] hover:text-[#363062]' onClick={handleLowClick}>Lower Case</button>
                <button className='mt-5 w-fit bg-gray-400 text-white rounded-md font-semibold p-2 text-sm hover:bg-[#E9D5CA] hover:text-[#363062]' onClick={handleClearClick}>Clear</button>
            </div>

        </div>
    )
}
