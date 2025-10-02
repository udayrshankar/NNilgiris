import React from 'react'
import { User } from "lucide-react";

const Cards = () => {
    return (
        <div className=" flex items-center justify-center bg-white max-w-96 rounded-2xl p-8 shadow-lg 
    hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border
     border-slate-100 h-full">
            <div className='text-black flex flex-col items-center text-center gap-4'>
                <div className='bg-emerald-500 rounded-2xl w-16 h-16 flex items-center justify-center text-center text-white'>
                    <User size={35}/>
                </div>
                <h2 className='font-bold text-2xl'>Expert Team Building</h2>
                <p className=''>Strengthen bonds and improve collaboration through carefully designed
                    activities and workshops in inspiring natural settings.</p>
            </div>
        </div>
    )
}

export default Cards