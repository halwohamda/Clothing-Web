import React from 'react'
import img from '../.././public/sahan.jpg'
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full   text-center  md:flexr-row items-cente  md:gap-0 mt-6 text-white flex-col md:items-center  bg-[#21293c] rounded-xl'>
      <div className=' '>
        <div className=' flex gap-8 items-center ml-[45%] '>
        <img src={img} alt="" className='rounded-full w-[60px] mt-8' />
      
        </div>
        <h1 className='mr-14 font-semibold text-xl text-teal-500 hover:text-white  '>Sahan Tech</h1>
      </div>
      <div className="flex ml-[35%] mt-5 gap-8 md:flex-row flex-col ">
       
         
            <a href="" className='hover:text-teal-700'>Home</a>
            <a href="" className='hover:text-teal-700'>Portfolio</a>
            <a href="" className='hover:text-teal-700'>Works</a>
            <a href="" className='hover:text-teal-700'>Contact</a>
        
      </div>
      <div className="flex ml-[38%] mt-5 gap-8  ">
       
         
       <a href="" className='hover:text-teal-700'>Our Projects</a>
       <a href="" className='hover:text-teal-700'>Our Skill and Tools</a>
       
 </div>
     <div className='w-full flex md:flex-row mt-4 flex-col md:gap-0 gap-8 items-center justify-between px-8 py-10 border-t border-slate-300 border-dashed '>
      <span className='hover:text-teal-700'>
      All Rights Reserved SahanTech  &copy; 2024
      </span>
      
      <div className="flex md:flex-row flex-col justify-center gap-7 ">
      <a href="#"><FaGithub /></a>
      <a href="#"><FaFacebook /></a>
      <a href="#">< FaXTwitter/></a>
      </div>
      <div className=" gap-9 flex md:flex-row flex-col ">
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Cookies</a>
      </div>

      </div>
   
      
    </div> 
  )
}

export default Footer