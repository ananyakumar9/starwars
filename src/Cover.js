import React from 'react';
import "./App.css";
import ep1 from "./Component/Images/1.jpg";
import ep2 from "./Component/Images/2.jpg";
import ep3 from "./Component/Images/3.jpg";
import ep4 from "./Component/Images/4.jpg";
import ep5 from "./Component/Images/5.jpg";
import ep6 from "./Component/Images/6.jpg";

const Cover=({ bool,cover })=>{
    let v=0;
    let c=ep1;
    let link='';
    return(
        <div className="covers">
           { bool.map((b,i)=>{
               v=i+1;
               switch(v){
                   case 1:c=ep1;link="https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace";break;
                   case 2:c=ep2;link="https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones";break;
                   case 3:c=ep3;link="https://en.wikipedia.org/wiki/Star_Wars:_Episode_III_%E2%80%93_Revenge_of_the_Sith";break;
                   case 4:c=ep4;link="https://en.wikipedia.org/wiki/Star_Wars_(film)";break;
                   case 5:c=ep5;link="https://en.wikipedia.org/wiki/The_Empire_Strikes_Back";break;
                   case 6:c=ep6;link="https://en.wikipedia.org/wiki/Return_of_the_Jedi";break;
                   default:c=ep1;break;
               }
               if(b){
                   return(
                       <div key={cover[i]} className="coveron">
                           <a href={link} target={`_blank`}>
                            <img src={c} alt={`${v} cover`}/>
                            </a>
                       </div>
                   );
               }
               else{
                return null;
               }
           })
            }
        </div>
    )
}

export default Cover;

//doubt-- local Images folder was not loading after then tried public only then worked