import React from 'react';
import { useState, useEffect,useRef  } from 'react';
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
      <div ref={mainDivRef} className={`main bg-[#9797975b] w-[90%] h-[90%] flex flex-col ${divVisible? "opacity-0 ":"z-10 opacity-100"} transition-all duration-[1000ms]`}>  
        <div className='w-[100%] flex justify-center items-center '>
      <p className='text-[#fff] text-[2rem] font-extrabold '>School Managment app</p>
        </div>
        <div className=' w-[50%] flex flex-col justify-start items-start'>
      <p className='text-[#fff] text-[2rem] font-extrabold  '>Keys Points</p>
      <p className='text-[#000] text-[2rem] font-extralight hover:scale-105 transition-all duration-[100ms] ease-in-out  '>-All essentails</p>
      <p className='text-[#000] text-[2rem] font-extralight hover:scale-105 transition-all duration-[100ms] ease-in-out  '>-Ready to use</p>
      <p className='text-[#000] text-[2rem] font-extralight hover:scale-105 transition-all duration-[100ms] ease-in-out  '>-User Friendly</p>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;