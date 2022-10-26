import React from 'react'

const Box = ({item}) => {
    const custom ={
        height:`${item.height*30}px`,
        animation: `${item.visible ?'example':''} 0.05s linear`,
        // order:`${item.order}`
    }
  return (
    <div 
      style = {custom} className='mx-[.2rem] w-10 p-1 rounded-sm bg-slate-600'
      
    >

    </div>
  )
}

export default Box