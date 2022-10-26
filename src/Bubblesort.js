import React from 'react'

const Bubblesort = (sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid) => {
    if(sorted || isrun) return;
    setIsrun(true)
    var k =0;
    for(let i = height.length-1;i > 0;i--){
      for(let j = 0;j < i;j++){
          setTimeout(()=>{
            setHeight((height) =>{
              const h = [...height];
              const z1 = h[j];const z2 = h[j+1];
              if(z1.height < z2.height){
                [h[j],h[j+1]] = [h[j+1],h[j]];
                [h[j].visible,h[j+1].visible] = [true,true];
                
              } 
              return h;
            })
          },k)
          setTimeout(()=>{
            setHeight((height) =>{
              const h = [...height];
              [h[j].visible,h[j+1].visible] = [false,false];
              return h;
            })
          },k+=40 - per*40/90)
         
          
      }
    }
    setTimeout(()=>{setIsrun(false) ;setSorted(true) },k);
}

export default Bubblesort;