
import './Cards.css';

import FigmaLogo from '../../assets/figma.svg';
import { HtmlHTMLAttributes } from 'react';






const Cards: React.FC<{ svgObj: String ,text_1:String,height:number,width:number }> = ({svgObj,text_1,height,width }) => { 


  return (
    <>
    

      <div  className={ ` transition-all delay-75 duration-700 
       card  z-inherit  min-h-[40%] w-[20%]
       p-[1.2rem] max-h-[50%] flex flex-col justify-center items-center gap-3`}>

        
        <h1 className={`  transition-all delay-75 duration-700
         text-[#000000] text-[2rem] font-bold relative top-1  `}>{text_1}</h1>

        

        <div className={` transition-all delay-75 duration-700 `}>
          <img width={width} height={height} src={svgObj.toString()} alt="Figma logo" />
        </div>


      </div>

    
    </>
  );
};

export default Cards;