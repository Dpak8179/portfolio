import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home(){
    return (
        <div name = "home" className="bg-[#0a192f] w-full h-screen ">
            <div className=" max-w-[1000px] mx-auto px-8 top-[30%]  flex flex-col justify-center h-full">
                <p className="px-1 text-pink-600">Hi, my name is  </p>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6f6]  ">Deepak Kumar</h1>
                <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0] ">I'm a Freelancer and an Undergraduate</h2>
                <p className="px-1 py-6 max-w-[700px] text-[#8892b0] font-bold ">
                I am a third-year BTech Computer Science Engineering student with a strong foundation in programming,
                 algorithms and database management systems. I am passionate about technology and strive to stay up-to-date
                  with industry advancements. Seeking new opportunities to apply my skills and knowledge. Connect with me 
                  to learn more about my academic background.
                </p>
                <div className="px-1 ">
                <button className=" text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">Know More 
                <span className="hover:rotate-90 duration-300"> 
                    <HiArrowNarrowRight className="ml-2" /> 
                </span></button>
                </div>
            </div>
        </div>
    )
}