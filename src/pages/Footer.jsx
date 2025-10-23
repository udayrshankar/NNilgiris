import { Link } from 'react-router-dom'

const Footer = ({openForm}) => {
    return (
        <div id='contact' className='bg-teal-950'>
            <div className='flex flex-col items-center text-center gap-5'>
                <h2 className="text-7xl font-bold animate-pulse text-emerald-300 
                transition-all duration-800 transform hover:scale-105 mt-20">Ready to Transform Your Team?</h2>
                <p className='text-gray-300 text-xl'>Let's create an unforgettable retreat experience tailored to your team's needs.</p>
                <div className='flex gap-5 items-center mb-13'>
                    <button className="cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 text-white 
                    px-8 py-3 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 
                    shadow-lg hover:shadow-2xl font-semibold text-lg transform hover:scale-105 animate-pulse"
                    onClick={openForm}>
                        <span>Start Planning Your Retreat</span>
                    </button>
                    <Link to="/hello@nilgiriretreat.com" className='hover:text-gray-500 text-gray-300 cursor-pointer text-lg'>hello@nilgiriretreat.com</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer