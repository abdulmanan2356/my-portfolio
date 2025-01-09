import React from 'react';
import { useState, useEffect,useRef  } from 'react';
import './ThirdPage.css';
const ThirdPage: React.FC = () => {

  const mainDivRef = useRef<HTMLDivElement | null>(null);
  const [divVisible, setDivVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (mainDivRef.current) {
        const rect = mainDivRef.current.getBoundingClientRect();
        const heightInView = rect.height*0.5 ;
        const inView = rect.top >= heightInView;
        setDivVisible(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={mainDivRef} className={`main bg-[#9797975b] w-[90%] h-[90%] flex flex-col gap-[25%]
       ${divVisible? "opacity-0  -z-10 scale-[1.5]":"z-10 opacity-100"}  
          transition-all duration-[1000ms] `}>  
        <div className='w-[100%] flex justify-center items-center '>
      <p className='text-[#fff] text-[2rem] font-extrabold '>School Managment app</p>
        </div>

        <div className='flex flex-row justify-between items-start max-h-[100%] p-4'>
        <div className=' w-[50%] h-[100%] flex flex-col justify-start items-start'>
      <p className='text-[#fff] text-[2rem] font-extrabold  '>Keys Points</p>
      <p className='text-[#000] text-[2rem] font-extralight hover:scale-105 transition-all duration-[100ms] ease-in-out  '>-All essentails</p>
      <p className='text-[#000] text-[2rem] font-extralight hover:scale-105 transition-all duration-[100ms] ease-in-out  '>-Ready to use</p>
      <p className='text-[#000] text-[2rem] font-extralight hover:scale-[1.05] transition-all duration-[100ms] ease-in-out  '>-User Friendly</p>
        </div>
        <div className='w-[50%] h-[100%] flex flex-col justify-center items-center '>
          <div className='w-[25%] h-[25%] '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"> <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
          <p className=' oswald-500 ' >your Goto for school Managment</p> 
          </div>
        </div>
        </div>
        <div className='w-[100%] flex  justify-center items-center roboto-bold  '>
          <a href="www.google.com" className='demo-item'>Demo here</a>
        </div>
       
      </div>
    </>
  );
};

export default ThirdPage;