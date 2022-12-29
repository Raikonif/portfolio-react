import React from 'react'
import { Outlet } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full hidden">Raikonif Developer</h1>
            <ul className="flex hidden">
                <li className="p-4">Home</li>
                <li className="p-4">Work Experience</li>
                <li className="p-4">Technologies</li>
                <li className="p-4">Contact</li>
                <li className="p-4">Blog</li>
            </ul>
        <div>
            <AiOutlineMenu size={20} />
        </div>
        <div  className="flex left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600">
        <h1 className="w-full text-3xl font-bold text-green-300 m-8">Raikonif Developer</h1>
        <ul className="p-4 uppercase">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Work Experience</li>
            <li className="p-4 border-b border-gray-600">Technologies</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
            <li className="p-4 border-b border-gray-600">Blog</li>
        </ul>
        </div>
    </div>
    
  )
}

export default Navbar
