import React from 'react'

function Center() {
    return (
        <div class="bg-slate-50 h-[80vh] flex-row  justify-center items-center pt-[5px] rounded-sm">
            <div className='bg-slate-100 h-[10%] w-[100%] mb-[10px] p-[25px]  flex flex-row justify-between items-center'>
                <h1 className='text-2xl'>Hello, User</h1> 
                <div className='h-[40px] w-[40px] bg-slate-400 rounded-4xl mr-[5px]'></div>
            </div>
            <div className='bg-slate-100 h-[70%] w-[100%] mb-[10px] rounded-sm'></div>
            <div className='bg-slate-100 h-[15%] w-[100%]'></div>
            
        </div>
    )
}

export default Center
