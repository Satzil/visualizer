import React from 'react'

var k = 0

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
                    [h[arr[i][1]],h[arr[i][2]]] = [h[arr[i][2]],h[arr[i][1]]];
                    return h;         
                })
            },k+=a);
        }
        
    }
}

const sort = (arr,l,r,height,setHeight)=>{
    const animations = [];
    if(l >= r)return[];
    for(let i = l,j = r-1;;){
        for(;arr[i] >= arr[r] && i < r;){
            animations.push([0,i,r]);
            i++;
        } 
        for(;arr[j] <= arr[r] && j > l;){
            animations.push([0,j,r]);
            j--; 
        }
        if(i >= j){
            [arr[r],arr[i]] = [arr[i],arr[r]];
            animations.push([1,r,i]);
            return animations.concat(sort(arr,l,i-1),sort(arr,i+1,r));
        }
        [arr[i],arr[j]] = [arr[j],arr[i]]; 
        animations.push([1,i,j]);
    }
    
}

const Quicksort = (sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid) => {
    if(sorted || isrun) return;
    setIsrun(true)
    let a = 40 - per*40/90;
    let l = 0;
    const arr = height.map(item => item.height);
    let animations = [];
    animations = sort(arr,0,arr.length-1,height,setHeight);
    animations.filter(item => (item))
    animate(animations,height,setHeight,a);
    setTimeout(()=>{setIsrun(false) ;setSorted(true)},k);
}


export default Quicksort