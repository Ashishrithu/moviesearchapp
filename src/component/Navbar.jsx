import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({favt}) => {
  const navigate=useNavigate();
 
  
  
  return (
    <>
      <div className='bg-white mx-auto px-4 flex justify-between items-center cursor-pointer flex-wrap flex-col md:flex-row'>
        <div className='flex items-center' onClick={()=>{navigate('/')}}> 
        <img src="/assets/Logo.jpeg" alt="Logo" className='w-[100px]' />
        <p className='text-black text-[20px] '>Home</p>
        </div>
        <p className='text-black text-[32px] cursor-pointer' onClick={()=>{navigate('/')}}>Movie Search App</p>
        <div className='text-black text-[20px] cursor-pointer' onClick={()=>{navigate('/favourites')}}>Favorites <span className="rounded-[50%] relative bg-black px-[0.85em] py-[0.5em] text-[12px] left-[-10px] top-[-15px] font-bold leading-none text-white" >{favt.length} </span></div>
      </div>
    </>
  )
}

export default Navbar