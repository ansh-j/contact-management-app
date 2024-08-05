import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import LineChartSetup from '../components/LineChartSetup'
import { Link } from 'react-router-dom'

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

        <div className={`w-[25%]  max-sm:absolute  max-sm:h-[90%] max-sm:w-[75%]  max-sm:transition-all ease-in-out duration-700 bg-white ${placement}`}>
        <Sidebar handlePlacement={handleClick}/>
        </div>

        <div className='h-full w-[75%]   flex-1 p-10 bg-[#FFF8F3] overflow-y-auto max-sm:w-full '>

            <div className='flex justify-center'>
            
            <Link to={'/map'} className="bg-emerald-300 p-3 rounded-lg hover:bg-emerald-200 text-center">
             Go to Map
            </Link>
            </div>

          <div className='h-full w-full text-center  pb-20'>
           
            <LineChartSetup/>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Charts