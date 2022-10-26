import React from 'react'

const Selectionsort = (sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid) => {
    if(sorted || isrun) return;
    setIsrun(true);
    var k =0;
    var a = 40 - per*40/90;
    var arr = [...height];
    for(let i = 0;i < height.length;i++){
        let m = i;
        for(let j = i+1;j < height.length;j++){
            if(arr[m].height < arr[j].height){
                m = j;
            }
            setTimeout(()=>{
                setHeight((height) =>{
                    const h = [...height];
                    h[j].visible = true;
                    return h;
                })
            },k);
            setTimeout(()=>{
                setHeight((height) =>{
                    const h = [...height];
                    h[j].visible = false;
                    return h;
                })
            },k+=a);
           
            
        }
        setTimeout(()=>{
            setHeight((height) =>{
                const h = [...height];
                [h[m],h[i]] = [{...h[i]},{...h[m]}];
                [h[m].visible,h[i].visible] = [true,true];
                return h;
            })
        },k);
        [arr[m],arr[i]] = [arr[i],arr[m]]; 
    }
    setTimeout(()=>{setIsrun(false) ;setSorted(true)},k);
}

export default Selectionsort