import React from 'react'

type Props ={
    title: string
}

const Header = ({ title }: Props) => {
  return (
    <h1 className='text-xl text-center p-4 font-medium bg-[#F7E7DC]'>{title}</h1>

  )
}

export default Header