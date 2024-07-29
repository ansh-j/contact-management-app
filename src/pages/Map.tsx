import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import Map from '../components/Map'

const Charts = () => {
 
  
  return (
    <div className='h-screen overflow-y-hidden'>
      <Header title="Charts And Maps" />
      <div className="flex h-full">
        <div className='w-[25%]'>
        <Sidebar />

        </div>
        <div className='h-full w-[75%] p-10 bg-[#FFF8F3] overflow-auto max-sm:pt-7'>

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