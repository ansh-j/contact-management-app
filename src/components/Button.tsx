import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    href: string
    title: string
}

const Button = ({ href, title }: Props) => {
    return (
        <NavLink to={href} className={`bg-[#EEEDEB] p-3 max-sm:p-2  rounded-lg hover:bg-emerald-200 text-center ${({ isActive }:any) => {
            return isActive ? 'bg-black' : "";
        }}`}>
            {title}
        </NavLink>
    )
}

export default Button