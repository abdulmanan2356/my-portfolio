import Cards from "../Cards/Cards";
import "./SecondPage.css";
import figmaSvg from "../../assets/figma.svg";
import reactSvg from "../../assets/react.svg";
import { useRef, useState, useEffect } from "react";

const SecondPage: React.FC = () => {
  const mainDivRef = useRef<HTMLDivElement | null>(null);
  const card1 = useRef<HTMLDivElement | null>(null);
  const card2 = useRef<HTMLDivElement | null>(null);
  const [divVisible, setDivVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainDivRef.current) {
        const rect = mainDivRef.current.getBoundingClientRect();
        const heightInView = rect.height * 0.3; 
        const inView = rect.top >= -heightInView && rect.bottom - heightInView <= window.innerHeight;
        setDivVisible(inView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={mainDivRef}
        className={`main flex flex-col lg:flex-row md:flex-row sm:flex-row
      items-center justify-around h-[90vh] gap-[13%] w-[99vw]`}
      >
        <div
          ref={card1}
          className={`${
            divVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          } transition-all duration-[1500ms]`}
        >
          <Cards
            fontName="irish-grover-regular"
            svgObj={figmaSvg}
            text_1={"Designing"}
            classImg="w-[50vw] h-[40vh] md:w-[20vw] md:h-[27vh]"
          />
        </div>

        <div
          ref={card2}
          className={`${
            divVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          } transition-all duration-[1300ms]`}
        >
          <Cards
            fontName="roboto-bold"
            svgObj={reactSvg}
            text_1={"Development"}
            classImg="w-[50vw] h-[40vh] z-10 md:w-[18vw] md:h-[27vh]"
          />
        </div>
      </div>
    </>
  );
};

export default SecondPage;
