import React, { useEffect, useRef } from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const components = useRef<HTMLDivElement | null>(null);
  const picDiv = useRef<HTMLDivElement | null>(null);

  const imageLoadHandler = () => {};

  useEffect(() => {
    const componentsElement = components.current;
    let number = 0;

    const interval = setInterval(() => {
      if (componentsElement) {
        const height = componentsElement.getBoundingClientRect().height;

        if (number > 2) {
          number = 0;
        }

        const first = componentsElement.children[0] as HTMLDivElement;
        first.style.marginTop = number * -height + 'px';
        number++;
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      <div ref={picDiv} className="h-[100vh] md:flex-row flex-col flex justify-center text-white items-center w-full">
        <div className="subPicDiv">
          <img loading="lazy" onLoad={imageLoadHandler} src="src/assets/portfolio_1.png" alt="" />
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
