import React from 'react'

const Upload = () => {
  return (
    <div className="">
      <form action="" className="p-12 bg-gray-300 absolute w-full md:w-4/12 my-36 mx-auto right-0 left-0">
        <input type="text" placeholder='Model Name' className="p-4 my-4 w-full bg-gray-200"/>
        <input type="text" placeholder='Provider' className="p-4 my-4 w-full bg-gray-200"/>
        <textarea name="" id="" cols="30" rows="10" className='bg-gray-200 text-gray-400'>Description</textarea>
        <textarea name="" id="" cols="30" rows="10" className='bg-gray-200 text-gray-400'>Example Code</textarea>
        <button className="p-4 my-6 bg-gray-700 w-full rounded-lg">Submit</button>
      </form>
    </div>
  )
}

export default Upload