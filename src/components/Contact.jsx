import React from "react";
export default function Contact(){
    return(
        <div name = "contact" className="w-full h-screen bg-[#0a192f] flex justify-center item-center p-4">
            <form action="https://getform.io/f/f42d9137-8bc7-4e57-b153-cc0f8003a4a2" method="post" className="flex flex-col max-w-[600px] w-full ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4 ">
                        Submit the form below or shoot me an email at Dpak8179@gmail.com
                    </p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name = "name"/>
                <input className="p-2 my-4 bg-[#ccd6f6]" type="email" placeholder="Email" name = "email"/>
                <textarea className="bg-[#ccd6f6] p-2" placeholder="Message" name="message" rows="10"></textarea>
                <button type="submit" className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center  ">Lets Collaborate</button>
            </form>
        </div>
    )
}