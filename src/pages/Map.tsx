import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Map from '../components/Map'

const Charts = () => {
 
  const [placement,setPlacement] = useState<string>("left-[-500px]");

  const handleClick=()=>{
    setPlacement((prev:string)=>{
      if(prev==='left-[-500px]')
      {
        return "left-0";
      }
      return "left-[-500px]"
    })
  }
  
  return (
    <div className='h-screen overflow-y-hidden'>
      <Header title="Charts And Maps" />
      <div className="flex h-full">
      <button className='absolute sm:hidden p-2  bg-emerald-300 rounded-lg top-[4.5rem] left-3' onClick={handleClick}>Menu</button>

        <div className={`w-[25%]  max-sm:absolute  max-sm:h-[90%] max-sm:w-[75%]  max-sm:transition-all ease-in-out duration-700 bg-white ${placement} z-[1500]`}>
        <Sidebar handlePlacement={handleClick}/>

        </div>
        <div className='h-full w-[75%] p-10 bg-[#FFF8F3] overflow-auto max-sm:pt-7 max-sm:w-full '>

            <div className='flex justify-center '>
            
            <Link to={'/chart'} className="bg-emerald-300 p-3 rounded-lg hover:bg-emerald-200 text-center">
             Go to Line Chart
            </Link>
            </div>

            <h1 className='text-center pt-3 font-semibold'>Map of active cases, recovered cases and deaths</h1>

          <div className='h-[85%] w-full pt-5 pb-10'>
            <Map/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Charts