import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} />
      <div className='grid grid-cols-2 m-10 py-10 '>
        <div className='my-auto w-full font-extrabold ml-10 space-y-10'>
          <h1 className='text-7xl   text-[#363062]  '>Learning React Js with Aayush Yadav</h1>
          <button className='w-24 p-3 bg-[#363062]  text-[#E9D5CA] rounded-md font-bold'>Github</button>
        </div>
        <TextForm title="TextUtils" />
      </div>

      <About/>
    </>
  );
}

export default App;
