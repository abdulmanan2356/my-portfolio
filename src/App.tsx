import { useState, useEffect } from 'react';
import SecondPage from './components/SecondPage/SecondPage';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  useEffect(() => {
    const topHandleScroll =async () => {
      await delay(500)
      setIsScrolled(window.scrollY > 0); // Trigger halfway through the viewport
    };

    window.addEventListener('scroll', topHandleScroll);
    return () => window.removeEventListener('scroll', topHandleScroll);
  }, []);

  return (
    <>
      <div className="main relative bg-white">
        {/* HomePage Section */}
        <div
          className={` h-[101vh] first transition-all duration-700 ease-in-out relative w-[99vw] ${
            isScrolled ? '-z-10 opacity-50 h-[0vh]' : 'z-10 opacity-100 h-[101vh]'
          }`}
        >
          <HomePage />
        </div>

        {/* SecondPage Section */}
        <div
          className={`second transition-all duration-700 ease-in-out relative ${
            isScrolled ? 'z-10 opacity-100 h-[101vh] ' : 'h-[10vh] -z-10 opacity-50'
          }`}
        >
          <SecondPage />
        </div>
      </div>
    </>
  );
}

export default App;
