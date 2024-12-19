import { useState, useEffect, useRef } from 'react';
import SecondPage from './components/SecondPage/SecondPage';
import HomePage from './components/HomePage/HomePage';
import ThirdPage from './components/ThirdPage/ThirdPage';


function App() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const [bgColor, setBgColor] = useState("bg-[#FFFF00]"); // Default color
  const windowHeight = window.innerHeight;

  const scrollHandler = () => {
    let scroll = window.scrollY;

    if (scroll>0 && scroll < windowHeight * 0.8) {
      setBgColor("bg-[#FFFF00]");
      // console.log(scroll)
    }
     else if (scroll > windowHeight * 0.8 && scroll < windowHeight * 1.8) {
      setBgColor("bg-[#0099FF]");
    } else if (scroll > windowHeight * 1.8) {
      setBgColor("bg-[#E0FF00]");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <div className="main relative z-10">
        <div
          ref={first}
          className={`first transition-all opacity-100 duration-700 ${bgColor} relative w-[99vw] z-10 h-[100vh]`}
        >
          <HomePage />
        </div>

        <div
          ref={second}
          className={`second flex  relative transition-all  duration-700 ${bgColor} z-10 h-[100vh]`}
        >
          <SecondPage  />
        </div>

        <div
          ref={third}
          className={`third relative flex items-center justify-center transition-all duration-700 ${bgColor} z-10 h-[100vh]`}
        >
          <ThirdPage />
        </div>
      </div>
    </>
  );
}

export default App;

/*

*/