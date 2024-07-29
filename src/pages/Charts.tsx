import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import LineChartSetup from '../components/LineChartSetup'
import { Link } from 'react-router-dom'

const Charts = () => {
 
  
  return (
    <div className='h-screen overflow-y-hidden'>
      <Header title="Charts And Maps" />
      <div className="flex h-full">

        <div className='w-[25%]'>
        <Sidebar />
        </div>

        <div className='h-full w-[75%]   flex-1 p-10 bg-[#FFF8F3] overflow-y-auto'>

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