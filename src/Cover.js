import React from 'react';
import "./App.css";

const Cover=({ bool,cover })=>{
    let v=0;
    return(
        <div className="covers">
            
           { bool.map((b,i)=>{
               v=i+1;
               if(b){
                   return(
                       <div key={cover[i]} className="coveron">
                         <img src={`Images/${v}.jpg`} alt={`${v} cover`}/>
                       </div>
                   );
               }
               else{
                return(
                    <div key={cover[i]}>
                    </div>
                );
               }
           })
            }
        </div>
    )
}

export default Cover;

//doubt-- local Images folder was not loading after then tried public only then worked