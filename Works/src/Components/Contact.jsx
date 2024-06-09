import React from 'react'

const Contact = () => {
  return (
  <div className='bg-slate-200  w-full  mt-6 text-center  md:flex-row items-center'>
    <div className='mt-6 '>
        <h1 className='mt-8 font-bold text-blue-900  text-xl'>Get in Tech</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> lpa rem corrupti asperi</p>
    </div>
   <div className="mt-6">
   <form action="">
        <label>FirstName</label> 
        <input type="FirstName" placeholder='Firstname'/>
        <label>Last Name</label> 
        <input type="LastName" placeholder='LastName' />
        <label htmlFor="">Email</label> 
        <input type="Email" placeholder='Email' />

    </form>
   </div>
  </div>
  )
}

export default Contact