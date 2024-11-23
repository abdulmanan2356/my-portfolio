import React, { useEffect, useRef } from 'react';
import './HomePage.css' 


const HomePage: React.FC = () => {
  // Added types for refs to specify they refer to HTMLDivElement or could be null
  const wrapper = useRef<HTMLDivElement | null>(null);
  const components = useRef<HTMLDivElement | null>(null);
  const picDiv = useRef<HTMLDivElement | null>(null);

  // Defined the function type for the image load handler
  const imageLoadHandler = () => {
    // Add image load logic here, if any
  };

  useEffect(() => {
    const wrapperElement = wrapper.current;
    const componentsElement = components.current;
    let number = 0;

    const interval = setInterval(() => {
      if (componentsElement) { // Checked if componentsElement exists to avoid potential null errors
        const height = componentsElement.getBoundingClientRect().height;
        const numberOfDivs = componentsElement.children.length;

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
      <div ref={picDiv} className="pic_div">
        <div className="subPicDiv max-w-[23vw] max-h-[23vw] min-w-[56px] min-h-[56px] flex justify-center items-center">
          <img
            loading="lazy"
            onLoad={imageLoadHandler}
            src="src/assets/portfolio_1.png"
            alt=""
          />
        </div>

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