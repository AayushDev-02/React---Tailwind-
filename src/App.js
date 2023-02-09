import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'


function App() {
  const [darkMode, setdarkMode] = useState({
    color: '#363062',
    bgColor: '#E9D5CA',
    icon: MoonIcon,
  });

  const toggleDarkMode = () => {
    if (darkMode.bgColor === '#E9D5CA') {
      setdarkMode({
        color: '#E9D5CA',
        bgColor: '#363062',
        icon: SunIcon,
      })
    } else {
      setdarkMode({
        color: '#363062',
        bgColor: '#E9D5CA',
        icon: MoonIcon,
      })
    }
  }
  return (
    <>
      <Navbar title="TextUtils" color={darkMode.color} Heroicon={darkMode.icon} bg={darkMode.bgColor} enableDarkMode={toggleDarkMode} />
      <div className='grid grid-cols-2 m-10 py-10 '>
        <div className='my-auto w-full font-extrabold ml-10 space-y-10'>
          <div className='text-7xl space-y-5  text-[#363062]  '><div className='text-7xl font-thin'>Learning React Js with</div><div>Aayush Yadav</div></div>
          <button className='w-24 p-3 bg-[#363062]  text-[#E9D5CA] rounded-md font-bold'>Github</button>
        </div>
        <TextForm title="TextUtils" />
      </div>

      <About />
    </>
  );
}

export default App;
