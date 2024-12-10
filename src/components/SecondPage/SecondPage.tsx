
import Cards from "../Cards/Cards"
import "./SecondPage.css"
import figmaSvg from "../../assets/figma.svg" 
import reactSvg from "../../assets/react.svg"
import nextJs from "../../assets/Nextjs-logo.svg" 

const SecondPage : React.FC<{ displayBool: number }> = ({displayBool}) => {
  
  
   


  return (
    <>

  
      

    <div className = {`main  flex flex-col items-center justify-center ${displayBool===1 ? 'h-[90vh] ' :'h-0 hidden' }   gap-[25%]  bg-[#ffffff] w-[99vw + 2px]`}   >  
    
    <div>
    <Cards  svgObj={figmaSvg} text_1={""}     height={150} width={800} />
    </div>

    <div>
    <Cards  svgObj={nextJs} text_1={""}     height={150} width={900} />
    <Cards   svgObj={reactSvg}  text_1={""} height={550} width={750} />
    </div>

    </div>
  
    </>
  )
}

export default SecondPage