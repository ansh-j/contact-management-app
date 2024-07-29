import React from 'react';
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

  return (
    <div className='h-screen overflow-y-hidden'>
      <Header title="Contact Page" />
      <div className="flex h-full">
        <div className='w-[25%]'>
        <Sidebar />

        </div>
        <div className='h-full  p-10 bg-[#FFF8F3] w-[75%] '>

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
