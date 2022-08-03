import React from 'react'

const Monitor = ({wyniki}) => {
  if (wyniki === 'noob') {
    return (
      <div className=' flex justify-evenly items-center bg-gray-200 w-full h-[500px] rounded-3xl'>
        <h1 className=' text-[6rem] text-red-700'>{wyniki}</h1>
      </div>
    )
  } else {
    return (
      <div className=' flex justify-evenly items-center bg-gray-200 w-full h-[500px] rounded-3xl'>
        <h1 className=' text-3xl'>{wyniki}</h1>
      </div>
    )
  }
}

export default Monitor