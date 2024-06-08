import React from 'react'
import masxaf from '../../public/masxaf.jpg'
import Doctor from '../../public/Doctor.jpg'
const Works = () => {
  return (

<div className=' w-full  mt-6 text-center  md:flex-row items-center'>
     <div className='gap-4   '>
         <h1 className='font-bold text-3xl text-teal-700'>Our Project's</h1>
         <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adip <br /> a nemo iste placeat.</p>
 
    <div className="flex w-full items-center md:flex-row justify-center flex-col gap-8 mt-8  ">
        <div className=" p-[15px] rounded-md  " >
        <img src={masxaf} alt="" className='w-[250px] h-[150px]' />
        </div>

     <div className="gap-5">
     <h3 className='font-bold  text-teal-700'>Qur'an Memorizing</h3>
     <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Repell</p>
     <button className='mt-10 px-6 py-1 border-teal-700 bg-white hover:text-white transition-all  rounded-lg border-2 text-teal-700   hover:bg-teal-600 '>View details</button>
     </div>
    </div>
    
<div className="flex w-full items-center md:flex-row justify-center mt-8 gap-8  flex-col ">


        <div className="gap-5">
     <h3 className='font-bold  text-teal-700'>Doctor Appointmenr</h3>
     <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Repell</p>
     <button className='mt-10 px-6 py-1 border-teal-700 bg-white hover:text-white transition-all  rounded-lg border-2 text-teal-700   hover:bg-teal-600 '>View details</button>
     </div>
     <div className="  p-[15px] rounded-md" >
        <img src={Doctor} alt="" className='w-[250px] h-[150px]' />
        </div>
     </div>
 </div>
</div>


    
  )
}

export default Works