import { useState, useEffect, useRef } from 'react';
import SecondPage from './components/SecondPage/SecondPage';
import HomePage from './components/HomePage/HomePage';

function App() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const [num, setNum] = useState(0); // replaced useRef with useState for num
  const [FC, setFC] = useState(true);
  const atTop = useRef(false);
  const atBottom = useRef(false);

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const topHandleScroll = async () => {

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      await delay(10);

      // Check if at the top
      if (scrollTop === 0) {
        atTop.current = true;
        pageSlideHandler();
      } else {
        atTop.current = false;
      }

      // Check if at the bottom
      if (scrollTop + windowHeight >= fullHeight ) {
        // console.log('scrollTop', scrollTop);
        // console.log('windowHeight', windowHeight);
        // console.log('fullHeight', fullHeight);
        pageSlideHandler();
        atBottom.current = true;
      } else {
        atBottom.current = false;
      }

      setFC(!FC);
    };

    window.addEventListener('scroll', topHandleScroll);
    return () => window.removeEventListener('scroll', topHandleScroll);
  }, [FC]);

  const pageSlideHandler = async () => {
    await delay(100);
    if (atBottom.current) setNum(prevNum => Math.min(prevNum + 1, 2)); // Increment num, max to 2
    if (atTop.current) setNum(prevNum => Math.max(prevNum - 1, 0));  // Decrement num, min to 0

    window.scrollTo({ top: 10, behavior: 'smooth' })
    console.log('num', num);
  };

  useEffect(() => {
    console.log('fc updated');

  }, [num]); // Trigger the effect when num changes

  return (
    <>
      <div className="main relative z-10 bg-[#FFFF00] ">
        <div
          ref={first}
          className={`first transition-all duration-700 bg-[#FFFF00] relative w-[99vw] ${num === 0 ? 'z-10 h-[100vh]' : 'z-0 h-0'}`} 
        >
          <HomePage displayBool={num===0 ? 1 : 0} />
        </div>

        <div
          ref={second}
          className={`second bg-[#0a60ff] flex  items-center relative transition-all duration-700 ${num === 1 ? 'z-10 h-[110vh]' : 'z-0 h-0'}`}
        >
          <SecondPage displayBool={num===1 ? 1 : 0} />
        </div>

        <div
          ref={third}
          className={`third relative transition-all duration-700 bg-red-600 ${num === 2 ? 'z-10 h-[110vh]' : 'z-0 h-0'}`}
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