import React from 'react'

const Slider = ({per,setPer,isrun}) => {
  return (
    <div>
        <input 
            type = "range" 
            min = "10" 
            max = "80" 
            value = {per}
            onChange={(e) => setPer(e.target.value)}
            disabled = {isrun?true:false}
        />
    </div>
  )
}

export default Slider