import React from 'react'

const GalleryPage = () => {
    return (
        <div id='gallery'>
            <div className="flex flex-col w-full justify-center items-center text-center mx-auto mb-1 max-w-3xl mt-10">
                <div className='transition-all duration-800 transform hover:scale-105 mt-10'>
                    <h2 className="text-7xl font-bold text-black">Experience the</h2>
                    <h2 className="text-7xl font-bold animate-pulse text-emerald-600">Magic of Nilgiris</h2>
                </div>
                <p className="mt-4 w-max-lg text-lg text-gray-600">
                    Escape the city and reconnect with nature through our thoughtfully curated wellness experiences.
                </p>
            </div>
        </div>
    )
}

export default GalleryPage

