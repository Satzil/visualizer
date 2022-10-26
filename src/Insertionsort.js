import React from 'react'

const Insertionsort = (sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid) => {
    if(sorted || isrun) return;
    setIsrun(true)
    var k =0;
    var a = 40 - per*40/90;
    var arr = [...height];
    for(let i = 1;i < height.length;i++){
        for(let j = i-1;j>=0;j--){
            if(arr[j].height < arr[j+1].height){
                setTimeout(()=>{
                    setHeight((height) =>{
                        const h = [...height];
                        [h[j],h[j+1]] = [{...h[j+1]},{...h[j]}];
                        [h[j].visible,h[j+1].visible] = [true,true];
                        return h;
                    })
                },k);
                setTimeout(()=>{
                    setHeight((height) =>{
                        const h = height.map((item)=>(
                            item.index === j || item.index === j+1?
                                {...item,visible:false}:
                                    item
                    ));
                        return h;
                    })
                },k+=a);
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }  
        }
        a = 40 - per*40/90;
        
    }
    setTimeout(()=>{setIsrun(false) ;setSorted(true) },k);
}

export default Insertionsort