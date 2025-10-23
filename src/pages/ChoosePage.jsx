import React from 'react'

const ChoosePage = () => {
    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center text-center mx-auto mb-1 max-w-3xl mt-10">
                <div 
                  className='transition-all duration-800  transform hover:scale-105'
                  data-aos="fade-up"
                >
                    <h2 className="text-7xl font-bold">Why Choose</h2>
                    <h2 className="text-7xl font-bold animate-pulse text-emerald-600">Nilgiri Retreats?</h2>
                </div>
                <p 
                  className="mt-4 w-max-lg text-lg font-semibold text-gray-600"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                    We specialize in creating transformative experiences that combine strategy, wellness,
                    and culture in the serene beauty of the Nilgiri Hills.
                </p>
            </div>
        </div>
    )
}

export default ChoosePage