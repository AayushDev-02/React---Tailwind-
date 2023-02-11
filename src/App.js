import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Alert from './components/Alert';
import New from './components/New';
import Footer from './components/Footer';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

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
      showAlert("Light Mode has been enabled");
      addAlert();
    } else {
      setdarkMode({
        color: '#363062',
        bgColor: '#E9D5CA',
        icon: MoonIcon,
      })
      showAlert("Dark Mode has been enabled");
      addAlert();
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      msg: message,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeAlert = () => {
    const x = document.querySelector('#alert-close');
    x.classList.add('invisible');
  }
  const addAlert = () => {
    const x = document.querySelector('#alert-close');
    x.classList.remove('invisible');

  }


  return (
    // <Router>
      <div className={`bg-[${darkMode.bgColor}]`}>
        <Navbar title="TextUtils" color={darkMode.color} Heroicon={darkMode.icon} bg={darkMode.bgColor} enableDarkMode={toggleDarkMode} />
        <Alert alert={alert} color={darkMode.color} bg={darkMode.bgColor} remove={removeAlert} />
        <div className='grid grid-cols-2 m-10 py-10 '>
          <div className='my-auto w-full font-extrabold ml-10 space-y-10'>
            <div className={`text-7xl space-y-5  text-[${darkMode.color}]  `}><div className={`text-7xl font-thin text-[${darkMode.color}]`}>Learning React Js with</div><div>Aayush Yadav</div></div>
            <button className={`w-24 p-3 bg-[${darkMode.color}]  text-[${darkMode.bgColor}] rounded-md font-bold`}><a href='https://github.com/AayushDev-02/React---Tailwind-'>Github</a></button>
          </div>
          <TextForm add={addAlert} remove={removeAlert} showAlert={showAlert} title="TextUtils" />
        </div>
        {/* <hr className={`text-[${darkMode.color} mt-10]`} /> */}

        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About color={darkMode.color} bg={darkMode.bgColor} />} /> */}
           
          {/* <Route exact path="/" element={<New bg={darkMode.bgColor} />}> */}
          {/* </Route> */}



        {/* </Routes> */}
        <About color={darkMode.color} bg={darkMode.bgColor} />
        <New bg={darkMode.bgColor} />
        <Footer bg={darkMode.bgColor} color={darkMode.color} />
      </div>
    // </Router>


  );
}

export default App;