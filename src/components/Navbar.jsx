import React from 'react'

function Navbar() {
  return (
    <div className='bg-slate-200 h-[14vh] w-[100%] p-[25px]  flex flex-row justify-between items-center rounded-t-4xl'>
      <h1 className='text-2xl'>Hello, User</h1>
      <div className='h-[40px] w-[40px] bg-slate-400 rounded-4xl mr-[5px]'></div>
    </div>

  )
}

export default Navbar
