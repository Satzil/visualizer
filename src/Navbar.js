import React from 'react'

const Navbar = ({sortName,setSortName}) => {
  return (
    <div className= "flex w-full py-3 px-6 space-x-2 space-y-0 justify-between mb-8">
      <div className='text-white text-4xl font-serif '>
        Sorting Visualizer
      </div>
        <select className='bg-slate-500 text-black text-xl px-4 py-1 items-center'
          value={sortName}
          onChange = {(e) => setSortName(e.target.value)}
        >
            <option value = "Bubble sort">Bubble sort</option>
            <option value = "Selection sort">Selection sort</option>
            <option value = "Insertion sort">Insertion sort</option>
            <option value = "Merge sort">Merge sort</option>
            <option value = "Quick sort">Quick sort</option>
        </select>
    </div>
  )
}

export default Navbar