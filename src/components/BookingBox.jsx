import { IoClose } from "react-icons/io5";


const BookingBox = ({ onClose }) => {
    return (
        <div className="z-50 flex fixed inset-0 backdrop-blur-sm justify-center">
            <div className="max-w-3xl mt-5">
                <div className="flex flex-col gap-3 bg-white border-1 border-teal-200 rounded-lg p-6">
                    <div className='flex justify-between items-center pt-4 pr-4'>
                        <h2 className="font-bold text-2xl">Book Corporate Retreat</h2>
                        <button type="button" onClick={onClose}
                        className="text-black font-extrabold hover:text-red-600"
                        >
                            <span className="flex items-center bg-gray-200 hover:scale-105 hover:bg-gray-400 
                            transition-all 500 rounded-sm"><IoClose /></span>
                        </button>
                    </div>
                    <div className="border-gray-300 border-1">
                    </div>
                    <form>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-8">
                                <div>
                                    <label htmlFor='name' className='block text-sm font-medium text-black'>
                                        Name
                                    </label>
                                    <div className="mt-1 relative rounded-md">
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            className="block px-3 py-2 pl-3 h-13 w-80 bg-transparent border border-gray-300 
                                            rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-600 sm:text-sm"
                                            placeholder="Enter your name here"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='email' className='block text-sm font-medium text-black'>
                                        Email
                                    </label>
                                    <div className='mt-1 relative rounded-md'>
                                        <input
                                            id='email'
                                            type='email'
                                            required
                                            className="block px-3 py-2 pl-3 h-13 w-80 bg-transparent border border-gray-300 
                                            rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-600 sm:text-sm"
                                            placeholder='you@example.com'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div>
                                    <label htmlFor='phone' className='block text-sm font-medium text-black'>
                                        Phone
                                    </label>
                                    <div className='mt-1 relative rounded-md'>
                                        <input
                                            id='phone'
                                            type='string'
                                            required
                                            className="block px-3 py-2 pl-3 h-13 w-80 bg-transparent border border-gray-300 
                                            rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-600 sm:text-sm"
                                            placeholder='+91 9876543210'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='company' className='block text-sm font-medium text-black'>
                                        Company name
                                    </label>
                                    <div className='mt-1 relative rounded-md'>
                                        <input
                                            id='company'
                                            type='text'
                                            required
                                            className="block px-3 py-2 pl-3 h-13 w-80 bg-transparent border border-gray-300 
                                            rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-600 sm:text-sm"
                                            placeholder='Enter company name'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div>
                                    <label htmlFor='participants' className='block text-sm font-medium text-black'>
                                        Number of participants
                                    </label>
                                    <div className='mt-1 relative rounded-md'>
                                        <input
                                            id='participants'
                                            type='string'
                                            required
                                            className="block px-3 py-2 pl-3 h-13 w-80 bg-transparent border border-gray-300 
                                            rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-600 sm:text-sm"
                                            placeholder='No. of members'
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label htmlFor='dates' className='block text-sm font-medium text-black'>
                                        Preferred Dates
                                    </label>
                                    <div className='mt-1 relative rounded-md'>
                                        <input
                                            id='dates'
                                            type='date'
                                            required
                                            className="block px-3 py-2 pl-3 h-13 w-80 bg-transparent border border-gray-300 
                                            rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-600 sm:text-sm"
                                            placeholder='Select your dates'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col max-w-2xl">
                                    <label htmlFor='budget' className='block text-sm font-medium text-black'>
                                        Budget Range
                                    </label>
                                    <div className='mt-1 relative rounded-md'>
                                        <input
                                            id='budget'
                                            type='string'
                                            required
                                            className="block px-3 py-2 pl-3 h-13 w-full bg-transparent border border-gray-300 
                                            rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-600 sm:text-sm"
                                            placeholder='Select budget range'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col max-w-2xl">
                                    <label htmlFor='additional' className='block text-sm font-medium text-black'>
                                        Additional Details
                                    </label>
                                    <div className='mt-1 relative rounded-md'>
                                        <textarea
                                            id='additional'
                                            type='text'
                                            required
                                            rows={20}
                                            className="block px-3 py-2 pl-3 h-13 w-full bg-transparent border border-gray-300 
                                            rounded-md placeholder-gray-400 focus:outline-none focus:border-gray-600 sm:text-sm"
                                            placeholder='Tell us about your plan, goals, and requirements you would like to include'
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="flex justify-center cursor-pointer hover:scale-105 transition-all duration-300 
                            bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl">
                                <span className="px-4 my-3 text-white font-semibold text-xl">Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingBox