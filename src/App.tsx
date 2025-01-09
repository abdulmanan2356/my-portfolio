import { useState, useEffect, useRef } from 'react';
import SecondPage from './components/SecondPage/SecondPage';
import HomePage from './components/HomePage/HomePage';
import ThirdPage from './components/ThirdPage/ThirdPage';
import Navbar  from './components/NavBar/NavBar';
function App() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const [bgColor, setBgColor] = useState("bg-[#FFFF00]"); // Default color
  const windowHeight = window.innerHeight;

  const scrollHandler = () => {
    let scroll = window.scrollY;
    if(scroll<= 0){setBgColor("bg-[#FFFF00]")}

    if (scroll > 0 && scroll < windowHeight * 0.7) {
      setBgColor("bg-[#FFFF00]");
    } else if (scroll > windowHeight * 0.7 && scroll < windowHeight * 1.8) {
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
        <Navbar />
        <div
          id="home"
          ref={first}
          className={`first transition-all opacity-100 duration-700 ${bgColor} relative w-[99vw] z-10 h-[110vh]`}
        >
          <HomePage />
        </div>

        <div
          id="second"
          ref={second}
          className={`second flex flex-col relative transition-all duration-700 ${bgColor} z-10 h-[100vh]`}
        >
          <SecondPage />
        </div>

        <div
          id="third"
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