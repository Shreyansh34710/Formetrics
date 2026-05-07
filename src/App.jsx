import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Footer from './components/Footer'




function App() {
  return (
    <div className='w-full max-w-sm h-screen mx-auto bg-slate-100 flex flex-col justify-between  rounded-4xl border-2 border-slate-300 '>
      <Navbar/>
      <Center/>
      <Footer/>
    </div>
  )
}

export default App
