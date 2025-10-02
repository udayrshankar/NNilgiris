import { Link } from 'react-router-dom'
import { FaCalendar, FaCheck, FaUser } from 'react-icons/fa'

const Getaways = ({ openForm }) => {
    return (
        <div className='flex flex-col max-w-md h-auto drop-shadow-2xl text-left 
        rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-500 
        transform hover:scale-105 hover:-translate-y-2 overflow-hidden border-teal-400 border-1'>

            <div className='bg-blue-50 w-full text-black p-6'>
                <div className='flex items-center justify-between pb-4'>
                    <p className='font-bold text-2xl max-w-3xs'>Premium Corporate Retreat</p>
                    <span className='text-green-600 bg-blue-100 rounded-md px-2'>Corporate</span>
                </div>
                <div className='flex items-center pb-3'>
                    <span className='font-semibold text-xl'>₹</span>
                    <h2 className='font-bold text-3xl'>15,000</h2>
                    <h4 className='font-semibold text-2xl'> - 25,000</h4>
                    <span className='text-xl ml-2'>per person</span>
                </div>
                <div className='flex gap-5 items-center'>
                    <span className='flex items-center gap-1'><FaCalendar />3 days</span>
                    <span className='flex items-center gap-1'><FaUser />Up to 60</span>
                </div>
            </div>

            <div className='bg-white w-full text-black p-6 flex flex-col gap-6 pb-10'>
                <p className='max-w-sm text-md'>
                    Intimate couples retreat focusing on romance, relaxation, and reconnection in
                     stunning mountain settings
                </p>
                <div className="flex flex-col max-w-sm text-left gap-3">
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Couples spa treatments
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Private dining 
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Sunrise viewings
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Romantic walks
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Wine tasting
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Photography session
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Luxury accommodations
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Personalized service
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCheck className='text-emerald-400 text-xs' /> Surprise arrangements
                    </span>
                </div>

                <div className="flex justify-center">
                    <Link to="/packages">
                        <button className='cursor-pointer bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl mt-4'
                        onClick={openForm}>
                            <span className='flex items-center justify-center text-white px-30 py-3'>
                                Select Package
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Getaways