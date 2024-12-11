import React, { useEffect, useRef } from 'react';
import './HomePage.css' 


const HomePage: React.FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const components = useRef<HTMLDivElement | null>(null);
  const picDiv = useRef<HTMLDivElement | null>(null);

  // Defined the function type for the image load handler
  const imageLoadHandler = () => {
    // Add image load logic here, if any
  };


  // const displayBool =  0;

  useEffect(() => {
    const componentsElement = components.current;
    let number = 0;

    const interval = setInterval(() => {
      if (componentsElement) { // Checked if componentsElement exists to avoid potential null errors
        const height = componentsElement.getBoundingClientRect().height;

        if (number > 2) {
          number = 0;
        }

        // Cast the child element to HTMLDivElement to avoid type errors
        const first = componentsElement.children[0] as HTMLDivElement;
        first.style.marginTop = number * -height + 'px';
        number++;
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
 
      <div ref={picDiv}  className=" h-[100vh] md:flex-row flex-col flex justify-center text-white items-center w-full ">
        <div className="subPicDiv">
          <img
            loading="lazy"
            onLoad={imageLoadHandler}
            src="src/assets/portfolio_1.png"
            alt=""
          />
        </div >
        

        <div className="animationSlides">
          <div ref={wrapper} className="wrapper">
            <div ref={components} className="components">
              <div>A Web Developer</div>
              <div>A Student</div>
              <div>Learner</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;




/*

.wrapper{
    
    display: block;
    text-align: center;
    padding: 75px;
    comment this  margin-top: 23px; 
    overflow: hidden;
    width: 500px;
}

.components{
    
    overflow: hidden;
    
    color: #000;
    height: 50px;
    font-size: 2rem;
    
}
.components div {
    vertical-align: middle;
    font-size: 30px;
    font-weight: 300;
    height: 50px;
    transition: margin-top 0.7s ease-in-out ;
}







const wrapper = useRef(null);

useEffect(() => {
    const wrapperElement = wrapper.current;
    const componentsElement = components.current;
    let number = 0;

    const interval = setInterval(() => {
      const height = componentsElement.getBoundingClientRect().height;
      const numberOfDivs = componentsElement.children.length;
      // console.log(numberOfDivs);
      if (number > 2) {
        number = 0;
      }
      const first = componentsElement.children[0];
      first.style.marginTop = number * -height + 'px';
      // console.log(number);
      number++;

    }, 1500);

    return () => clearInterval(interval);
  }, []);

*/