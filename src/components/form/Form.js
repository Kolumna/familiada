import React from 'react'

const Form = () => {
  return (
    <div className=' flex justify-between items-center w-[300px]'>
      <div className=' flex justify-evenly items-center flex-col h-[200px]'>
        <input className=' bg-gray-200' type="text" placeholder='odp' />
        <input className=' bg-gray-200' type="text" placeholder='odp' />
        <input className=' bg-gray-200' type="text" placeholder='odp' />
        <input className=' bg-gray-200' type="text" placeholder='odp' />
        <input className=' bg-gray-200' type="text" placeholder='odp' />
      </div>
      <div className=' flex justify-evenly items-center flex-col h-[200px]'>
        <input className=' bg-gray-200 w-[50px]' type="text" placeholder='pkt' />
        <input className=' bg-gray-200 w-[50px]' type="text" placeholder='pkt' />
        <input className=' bg-gray-200 w-[50px]' type="text" placeholder='pkt' />
        <input className=' bg-gray-200 w-[50px]' type="text" placeholder='pkt' />
        <input className=' bg-gray-200 w-[50px]' type="text" placeholder='pkt' />
      </div>
    </div>
  )
}

export default Form