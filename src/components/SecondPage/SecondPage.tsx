
import Cards from "../Cards/Cards"
import "./SecondPage.css"
import figmaSvg from "../../assets/figma.svg" 
import reactSvg from "../../assets/react.svg"
// import nextJs from "../../assets/Nextjs-logo.svg" 

const SecondPage : React.FC = () => {
  
  
   


  return (
    <>

    <div className = {`main  flex flex-col lg:flex-row  md:flex-row sm:flex-row items-center justify-around h-[90vh]   gap-[13%] w-[99vw]`}   >  
    
    <div>
    <Cards fontName='irish-grover-regular' svgObj={figmaSvg} text_1={"Designing"}  classImg="w-[50vw] h-[40vh] md:w-[20vw] md:h-[27vh]" />
    </div>

    <div>
    {/* <Cards  svgObj={nextJs} text_1={""}      classImg="w-[100px] h-[100px]" /> */}
    <Cards fontName='roboto-bold'   svgObj={reactSvg}  text_1={"Development"}  classImg="w-[50vw] h-[40vh] z-10 md:w-[18vw] md:h-[27vh] " />
    </div>

    </div>
  
    </>
  )
}

export default SecondPage