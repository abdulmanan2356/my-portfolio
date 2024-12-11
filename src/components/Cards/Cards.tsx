
import './Cards.css';

// import FigmaLogo from '../../assets/figma.svg';
// import { HtmlHTMLAttributes } from 'react';






const Cards: React.FC<{ svgObj: String,text_1:String,classImg:string,fontName:String }> = ({svgObj,text_1,classImg,fontName }) => { 
      
  return (
    <>
    

      <div  className={ ` flex flex-col gap-[13%] justify-center  items-center `}>

        
        <h1 className={`  transition-all delay-75 duration-700
         text-[#fff] sm:text-[100%] lg:text-[200%] md:text-[200%] overflow-hidden ${fontName} relative top-1  `}>{text_1}</h1>

        

        <div >
          <img className={classImg.toString()} src={svgObj.toString()} alt="Figma logo" />
        </div>


      </div>

    
    </>
  );
};

export default Cards;