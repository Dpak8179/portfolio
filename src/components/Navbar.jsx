import React, { useState } from "react";
import {RiMenuLine} from "react-icons/ri"
import {RxCross1} from "react-icons/rx";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { Link } from "react-scroll";


export default function Navbar(){
    function setNav(){
        navI(!nav);
    }
    
    const [nav, navI] = useState(false);
    return (
        
        <div className="fixed px-4 text-gray-400 w-full flex h-[80px] bg-[#0a192f] items-center justify-center">
            <ul className="hidden md:flex">
                <li className="px-4  cursor-pointer hover:text-white font-bold"> <Link activeClass="active" to="home"  smooth={true} duration={500} >
                Home
        </Link></li>
                <li className="px-4  cursor-pointer hover:text-white font-bold"><Link activeClass="active" to="about"  smooth={true} duration={500} >
                About
        </Link></li>
                <li className="px-4  cursor-pointer hover:text-white font-bold"><Link activeClass="active" to="skills"  smooth={true} duration={500} >
                Skills
        </Link></li>
                <li className="px-4  cursor-pointer hover:text-white font-bold"><Link activeClass="active" to="contact"  smooth={true} duration={500} >
                Contact
        </Link></li>
            </ul>
            <div onClick={setNav}  className="items-center md:hidden z-10">
                {!nav ? <RiMenuLine color="white" size = {30}  /> : <RxCross1 color="white" size={30}  />}
            </div>
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "}>
                <li  className="px-4  cursor-pointer hover:text-white font-bold py-6 text-3xl"><Link onClick={setNav} activeClass="active" to="home"  smooth={true} duration={500} >
                Home
        </Link></li>
                <li  className="px-4  cursor-pointer hover:text-white font-bold py-6 text-3xl"><Link onClick={setNav} activeClass="active" to="about"  smooth={true} duration={500} >
                About
        </Link></li>
                <li  className="px-4  cursor-pointer hover:text-white font-bold py-6 text-3xl"><Link onClick={setNav} activeClass="active" to="skills"  smooth={true} duration={500} >
                Skills
        </Link></li>
                <li  className="px-4  cursor-pointer hover:text-white font-bold py-6 text-3xl"><Link onClick={setNav} activeClass="active" to="contact"  smooth={true} duration={500} >
                Contact
        </Link></li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
                <ul>
                    <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 "> 
                        <a href="https://www.linkedin.com/in/dpak8179/" className="flex justify-between w-full items-center text-gray-300">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] "> 
                        <a href="https://github.com/Dpak8179" className="flex justify-between w-full items-center text-gray-300">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] "> 
                        <a href="mailto:Dpak8179@gmail.com" className="flex justify-between w-full items-center text-gray-300">
                            Email <HiOutlineMail  size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] px-4 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f68] "> 
                        <a href="https://drive.google.com/file/d/1QzBTCasjfRlWrYi_2Dol-eoV5BsjpanZ/view?usp=share_link" className="flex justify-between w-full items-center text-gray-300">
                            Resume <BsFillPersonLinesFill  size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}