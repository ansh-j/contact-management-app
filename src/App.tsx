import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { contactType } from './utils/types';
import ContactCard from './components/ContactCard';
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const App: React.FC = () => {

  const contacts = useSelector((store: any) => store.contacts);

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
      <Header title="Contact Page" />
      <div className="flex h-full">
        <button className='absolute sm:hidden p-2  bg-emerald-300 rounded-lg top-[4.5rem] left-3' onClick={handleClick}>Menu</button>
        <div className={`w-[25%]  max-sm:absolute max-sm:h-[90%] max-sm:w-[75%] max-sm:transition-all ease-in-out duration-700 bg-white ${placement}`}>
        <Sidebar handlePlacement={handleClick}/>

        </div>
        <div className='h-full  p-10 bg-[#FFF8F3] w-[75%] max-sm:w-full  '>

          <div className='h-full flex flex-col justify-center items-center gap-8 '>
            
            <Link to={'/createContact'} className="bg-emerald-300 p-3 rounded-lg hover:bg-emerald-200 text-center">
              Create Contact
            </Link>

            {contacts.length < 1 ?
              <div className='flex gap-5 p-8'>
                <ImCross size={50} className='self-center' />
                <div className='text-xl max-md:text-base max-sm:text-sm'>
                  <p>No Contact Found.</p>
                  <p>Please add contact from Create Contact Button. </p>
                </div>
              </div>
              :
              <div className='flex gap-10 flex-wrap justify-center h-[100%] pb-10 overflow-y-auto'>
                {contacts.map((contact: contactType, index: number) => {
                  return <ContactCard key={index} item={contact} />
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
