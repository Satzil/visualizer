import {useState,useEffect} from 'react';
import Box from './Box';
import Slider from './Slider';
import Navbar from './Navbar';
import Bubblesort from './Bubblesort';
import Insertionsort from './Insertionsort';
import Selectionsort from './Selectionsort';
import Mergesort from './Mergesort';
import Quicksort from './Quicksort';

function App() {
  const [height,setHeight] = useState([]);
  const [per,setPer] = useState(30);
  const [isrun,setIsrun] = useState(false);
  const [sorted,setSorted] = useState(false);
  const [sortName,setSortName] = useState("Bubble sort");
  const [reset,setReset] = useState(false);
  const [avoid,setAvoid] = useState(false);


  useEffect(()=>{
    let arr = [];
    for(let i = 1;i <= per;i++){
      arr.push({height:(Math.random()*10) + 1,index:i-1,order:i,visible:false});
    }
    setHeight(arr);
    setSorted(false);
    setReset(false);
  },[per,reset]) 
  
  
  const handleChange =()=>{
    if(sortName === "Bubble sort") Bubblesort(sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid);
    if(sortName === "Insertion sort") Insertionsort(sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid);
    if(sortName === "Selection sort") Selectionsort(sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid);
    if(sortName === "Merge sort") Mergesort(sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid);
    if(sortName === "Quick sort") Quicksort(sorted,isrun,setIsrun,height,setHeight,per,setSorted,setAvoid);
  }
  var key = 1;
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-700">
      <div className=' flex flex-col justify-center items-center space-y-3 p-20 pt-10 m-3 bg-slate-800 rounded-lg'>
        <Navbar
          sortName = {sortName}
          setSortName = {setSortName}
        />
        <div className='flex items-end justify-center h-[20rem] w-[70rem]'>
          {height.map((item) => (
            <Box 
              item = {item}
              key = {key++}
            />
          ))}
        </div>
        <div>
          <Slider
            per = {per}
            setPer = {setPer}
            isrun = {isrun}
          />
        </div>
        <div className='flex space-x-3 space-y-0'>
          <button 
            className='px-6 py-2 rounded-sm bg-slate-500 text-xl hover:-translate-y-0.5 duration-500'
            onClick={handleChange}
          >
            run
          </button>
          <button 
            className='px-6 py-2 rounded-sm bg-slate-500 text-xl hover:-translate-y-0.5 duration-500'
            onClick={()=>{!isrun && setReset(true)}}
          >
            reset
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
