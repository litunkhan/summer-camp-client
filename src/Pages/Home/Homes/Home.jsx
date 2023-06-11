
import { useState } from 'react';
import Banner from './Banner';
import HomeInstractor from './HomeInstractor';
import Slider from './Slider'
const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        console.log('clicked')
      };
    return (
        <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} ${isDarkMode?'text-white':'text-black'}`}>
        <button
          className="bg-gray-300 mt-5 -mb-6 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
          <div className='my-12'>
          <Slider></Slider>
          </div>
           <Banner></Banner>
           <HomeInstractor></HomeInstractor>
        </div>
    );
};

export default Home;