import React from 'react'
import Button from './Button'

const Sidebar = ({handlePlacement}:{handlePlacement:()=>void}) => {
    return (
        <div className='flex flex-col gap-10 p-14 h-full max-md:p-8 z-10'>
            <button onClick={handlePlacement} className='sm:hidden'>X</button>
            <Button href='/' title="Contact" />
            <hr className='border-2' />
            <Button href='/chart' title="Charts and Maps" />
            <hr className='border-2' />
            <p className='text-center font-semibold'>Sidebar</p>
        </div>
    )
}

export default Sidebar