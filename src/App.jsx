import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Footer from './components/Footer'




function App() {
  return (
    <div className='max-w-sm h-screen mx-auto bg-slate-200 flex-row justify-center items-center'>
      <Navbar/>
      <Center/>
      <Footer/>
    </div>
  )
}

export default App
