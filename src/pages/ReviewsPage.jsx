import { FaQuoteRight, FaStar } from "react-icons/fa";

const ReviewsPage = () => {
    return (
        <div className='my-10'>
            <div className='bg-gradient-to-b from-white to-blue-100 text-center'>
                <div className=" flex items-center justify-center bg-white max-w-96 rounded-2xl p-8 shadow-lg 
                hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border
                border-slate-100 h-full">
                    <div className='text-black flex flex-col justify-between text-left gap-4'>
                        <div className='flex items-center justify-between'>
                            <span className="text-black text-2xl"><FaQuoteRight /></span>
                            <span className="text-yellow-400 text-2xl flex"><FaStar /><FaStar /><FaStar /><FaStar /></span>
                        </div>
                        <p className=''>Strengthen bonds and improve collaboration through carefully designed
                            activities and workshops in inspiring natural settings.</p>
                        <h2 className='font-bold text-2xl'>Priya Sharma + </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsPage