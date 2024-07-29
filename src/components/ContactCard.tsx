import React from 'react'
import { contactType } from '../utils/types'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { deleteContact } from '../redux/slices/contactSlice'

const ContactCard = ({item}:{item:contactType}) => {

  const dispatch = useDispatch();

  return (
    <div className='flex flex-col p-5 gap-2 bg-[#F7E7DC] h-fit rounded-lg'>
        <p><span className='font-semibold'>First Name</span> : {item.firstName}</p>
        <p><span className='font-semibold'>Last Name</span> : {item.lastName}</p>
        <p><span className='font-semibold'>Status</span> : {item.status}</p>
        <div className='flex flex-col gap-2 mt-2 items-center'>
        <Link to={`/editContact/${item.id}`} className='bg-emerald-100 rounded-lg w-fit px-2 py-1 hover:bg-emerald-300 '>Edit</Link>
        <button onClick={()=>dispatch(deleteContact(item.id))} className='bg-rose-200 rounded-lg w-fit px-2 py-1 hover:bg-rose-300'>Delete</button>

        </div>

    </div>
  )
}

export default ContactCard