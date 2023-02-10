import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
function Alert(props) {

    

    return (    
        props.alert && <div id='alert-close' className="absolute top-20 m-auto left-0 right-0 bg-transparent w-fit mx-auto text-center py-4 lg:px-4 mt-5">
            <div className={`p-2 bg-[${props.color}] items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`} role="alert">
                <span className={`flex rounded-full bg-[${props.bg}] uppercase px-2 py-1 text-xs text-[${props.color}] font-bold mr-3`}>New</span>
                <span className={`font-semibold mr-2 text-left flex-auto text-[${props.bg}] `}>{props.alert.msg}</span>
                <XMarkIcon className={`w-6 h-6 text-[${props.bg}] font-bold cursor-pointer `} onClick={props.remove}/>
            </div>
        </div>
    )
}

export default Alert
