import React, { useState } from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Push to deploy',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]





export default function About(props) {

    const [btnText, setBtnText] = useState('Dark Mode')

    const [myStyle, setmyStyle] = useState({
        color: '#363062',
        backgroundColor: '#E9D5CA',
        

        
    });
    
    const enableDarkMode = () => {
        if (myStyle.backgroundColor === '#E9D5CA') {
            setmyStyle({
                color: '#E9D5CA',
                backgroundColor: '#363062',
                
            })
            setBtnText('Light Mode')
        }
        else {
            setmyStyle({
                color: '#363062',
                backgroundColor: '#E9D5CA',
            })
            setBtnText('Dark Mode')
        }
    }

    return (

        <div className={`bg-[${props.bg}] py-24 sm:py-32 mt-20`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2>
                    <p className={`mt-2 text-3xl font-bold tracking-tight text-[${props.color}] sm:text-4xl`}>
                        Everything you need to deploy your app
                    </p>
                    <p className={`mt-6 text-lg leading-8 text-[${props.color}]`}>
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className={`text-base font-semibold leading-7 text-[${props.color}]`}>
                                    <div className={`absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[${props.color}]`}>
                                        <feature.icon className={`h-6 w-6 text-[${props.bg}]`} aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className={`mt-2 text-base leading-7 text-[${props.color}]`}>{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

            </div>
            <div className='w-full flex p-5 mt-14 '>
                <button className={`mx-auto text-lg font-bold  text-[${props.bg}] bg-[${props.color}] py-2 px-3 rounded-md  `} onClick={enableDarkMode}>{btnText}</button>
            </div>

            <div className='flex justify-center bg-purple-500  items-center h-52 mx-64 mt-10 rounded-lg border-2 border-[#E9D5CA]' style={myStyle}>
                <h1 className=' font-bold  text-5xl '>Effects of Dark Mode in React JS - React Hooks</h1>

            </div>

        </div>

    )
}
