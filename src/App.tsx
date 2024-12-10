import { useState, useEffect, useRef } from 'react';
import SecondPage from './components/SecondPage/SecondPage';
import HomePage from './components/HomePage/HomePage';

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
      console.log(scroll)
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
          className={`second flex items-center relative transition-all duration-700 ${bgColor} z-10 h-[110vh]`}
        >
          <SecondPage displayBool={1} />
        </div>

        <div
          ref={third}
          className={`third relative transition-all duration-700 ${bgColor} z-10 h-[110vh]`}
        ></div>
      </div>
    </>
  );
}

export default App;

/*



useEffect(() => {
  const topHandleScroll =async () => {
    await delay(500)
    if (window.scrollY > 0){
      num.current =+ 1
    }else if (window.scrollY < 0){
      if(num.current > 0){
        num.current =+ 1
      }
    }
    console.log(num.current)
  };

  window.addEventListener('scroll', topHandleScroll);
  return () => window.removeEventListener('scroll', topHandleScroll);
}, []);


*/

/*

setFC(!FC)
if(num.current > 0 && num.current < 2){
  console.log('num.current', num.current)
  console.log(atBottom.current);
  {atBottom.current ? num.current+=1  : ''}

  {atTop.current ? num.current-=1 : ''}
} else if (num.current ===0 ){
  console.log("2");
  {atBottom.current ? num.current+=1 : ''}
}else if (num.current ===2){
  console.log("3");
  {atTop.current ? num.current-=1 : ''}
}
setFC(!FC)
console.log('num',num.current)
*/
// Comment the command to scroll to a specific position
// window.scrollTo({ top: 0, behavior: 'smooth' });