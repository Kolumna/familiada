import React from 'react'

const Monitor = ({odpowiedzi}) => {
  return (
    <div className='flex justify-center items-center'>
        <div className=' flex justify-evenly items-center bg-gray-200 shadow-xl w-[1000px] h-[500px] rounded-3xl'>
          <div className=' flex justify-evenly items-center flex-col h-[200px]'>
            <h1>{odpowiedzi[0][0]}</h1>
            <h1>{odpowiedzi[1][0]}</h1>
          </div>
          <div className=' flex justify-evenly items-center flex-col h-[200px]'>
            <h1>{odpowiedzi[0][1]}</h1>
            <h1>{odpowiedzi[1][1]}</h1>
          </div>
        </div>
    </div>
  )
}

export default Monitor