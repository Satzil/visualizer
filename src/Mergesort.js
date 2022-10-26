import React from 'react'

var k = 0;

const animate = (animations,height,setHeight,a)=>{
    k = 0;
    const arr = [...animations];
    for(let i =0;i < arr.length;i++){
        if(arr[i][0] == 0){
            setTimeout(()=>{
                setHeight((height)=>{
                    const h = [...height];
                    [h[arr[i][1]].visible,h[arr[i][2]].visible] = [true,true];
                    return h;         
                })
            },k);
            setTimeout(()=>{
                setHeight((height)=>{
                    const h = [...height];
                    [h[arr[i][1]].visible,h[arr[i][2]].visible] = [false,false];
                    return h;         
                })
            },k+=a);
        }else{
            setTimeout(()=>{
                setHeight((height)=>{
                    const h = [...height];
                    [h[arr[i][1]].height] = [arr[i][2]];
                    h[arr[i][1]].visible = true; 
                    return h;         
                })
            },k);
            setTimeout(()=>{
                setHeight((height)=>{
                    const h = [...height];
                    h[arr[i][1]].visible = false; 
                    return h;         
                })
            },k+=a);
        }
        
    }
}


const merge = (arr,l,m,r,height,setHeight)=>{
   
    const temp = [];
    const animations = [];
    let p1 = l;
    let p2 = m+1;
    
    for(p1,p2;p1 <= m && p2 <= r;){
        
        if(arr[p1].height > arr[p2].height){
            temp.push(arr[p1]);
            animations.push([0,p1,p2]);;
            p1++;
        }else{
            temp.push(arr[p2]);
            animations.push([0,p1,p2]);
            p2++;
        }
        
        
    }    
    while(p1 <= m){
        temp.push(arr[p1]);
        p1++;  
    }
    while(p2 <= r){
        temp.push(arr[p2]);
        p2++;
    }

    for(let j = l;j <= r;j++){
        arr[j] = temp[j-l];
        animations.push([1,j,temp[j-l].height]);
    }
    return animations;
   
}

const sort = (arr,l,r,height,setHeight)=>{
    if(l >=r )return;
    let m = Math.floor((l+r)/2);
    const bait1 = sort(arr,l,m,height,setHeight);
    const bait2 = sort(arr,m+1,r,height,setHeight);
    return [].concat(bait1,bait2,merge(arr,l,m,r,height,setHeight));
}


const Mergesort = (sorted,isrun,setIsrun,height,setHeight,per,setSorted) => {
    if(sorted || isrun) return;
    setIsrun(true)
    let a = 40 - per*40/90;
    let arr = [...height];
    k = 0;
    const animations = sort(arr,0,arr.length-1,height,setHeight).filter(item => item);
    
    animate(animations,height,setHeight,a);
    setTimeout(()=>{setIsrun(false) ;setSorted(true) },k);
}

export default Mergesort