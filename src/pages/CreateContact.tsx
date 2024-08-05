import React, { FormEvent, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { contactType } from '../utils/types'
import { addContact } from '../redux/slices/contactSlice'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const CreateContact = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [contact, setContact] = useState<contactType>({
    id:uuidv4(),
    firstName: '',
    lastName: '',
    status: ''
  })

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contact.firstName || !contact.lastName || !contact.status) {
      alert("Fill all the field please!")
      return;
    }
    dispatch(addContact(contact));
    navigate('/', { replace: true });
  }
  return (
    <div className='h-screen scroll overflow-y-hidden'>
      <Header title="Contact Page" />
      <div className="flex h-full">
      <button className='absolute sm:hidden p-2  bg-emerald-300 rounded-lg top-[4.5rem] left-3' onClick={handleClick}>Menu</button>
        <div className={`w-[25%]  max-sm:absolute max-sm:h-[90%] max-sm:w-[75%] max-sm:transition-all ease-in-out duration-700 bg-white ${placement}`}>
        <Sidebar handlePlacement={handleClick}/>

        </div>

        <div className='w-[75%] p-10 bg-[#FFF8F3] max-md:px-5 max-sm:px-3 max-sm:w-full '>
          <div className='flex flex-col justify-center items-center gap-8 '>
            <h1 className='font-semibold text-xl'>Create Contact</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-8 items-center max-sm:gap-4  '>

              <div className='p-14 bg-white flex flex-col gap-8 max-sm:gap-4 max-sm:px-3 max-md:p-10' >
                <div className='flex gap-5 justify-center'>
                  <label htmlFor="firstName" className=' text-center font-semibold'>First Name</label>
                  <input className='border-2 ' id='firstName' value={contact.firstName} name='firstName' onChange={handleChange} />
                </div>

                <div className='flex gap-5 justify-center'>
                  <label htmlFor="lastName" className=' text-center font-semibold'>Last Name</label>
                  <input className='border-2' id='lastName' value={contact.lastName} name='lastName' onChange={handleChange} />
                </div>

                <div className='flex gap-5 justify-center items-center '>
                  <p className='text-center font-semibold'>Status</p>
                  <div className='flex flex-col gap-2'>
                    <div className='flex gap-1'>
                      <input type="radio" name="status" id="active" value={"Active"} onChange={handleChange} />
                      <label htmlFor="active">Active</label>
                    </div>
                    <div className='flex gap-1'>
                      <input type="radio" name="status" id="inactive" value={"Inactive"} onChange={handleChange} />
                      <label htmlFor="inactive">Inactive</label>
                    </div>
                  </div>
                </div>
              </div>

              <button type='submit' className="max-w-fit bg-emerald-300 p-3 rounded-lg hover:bg-emerald-200 text-center ">
                Save Contact
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateContact