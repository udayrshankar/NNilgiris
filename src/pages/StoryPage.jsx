
import { FaHeart } from 'react-icons/fa'

const StoryPage = () => {
    return (
        <div className="bg-gradient-to-tr from-green-900 via-teal-900 to-emerald-600">
            <div className='flex flex-col items-center py-20 px-35 gap-15'>
                <span className='flex items-center gap-2 text-black rounded-full border-1 border-green-400
                 bg-green-500/20 px-10 py-3 backdrop-blur-sm'>
                    <FaHeart className='text-black' /> A Personal Story
                </span>
                <div className='text-center'>
                    <h2 className='font-bold text-7xl max-w-4xl text-center'>Born in the Mountains,</h2>
                    <h2 className="text-7xl font-bold animate-pulse text-emerald-400">Sharing the Magic</h2>
                </div>
                <div className='flex gap-15 text-gray-300 text-md items-center'>
                    <div className='flex flex-col gap-7'>
                        <p className='max-w-md'>Growing up in the enchanting hills of Ooty, I have been blessed to witness the magic of
                            these mountains through every season, every sunrise, and every misty evening. As a native
                            of this beautiful land, the Nilgiris aren't just a destination for me—they're home, they're
                            my childhood playground, and they hold the essence of who I am.</p>
                        <p className='max-w-md'>From exploring hidden trails as a child to understanding the deep cultural heritage passed
                            down through generations, I have lived and breathed the soul of these mountains. Every pathway,
                            every viewpoint, every local story is woven into my being. This intimate connection with my
                            homeland is what drives my passion to share these experiences with others.</p>
                        <p className='max-w-md'>My mission is simple yet profound: I want everyone who visits to feel the same sense of wonder,
                            peace, and connection that I have experienced since childhood. Through Nilgiri Retreats, I'm
                            not just offering a service—I'm sharing a piece of my heart, my heritage, and the transformative
                            power of these sacred mountains.</p>
                        <div className='flex gap-2'>
                            <span className='w-13 h-13 p-3 rounded-full bg-green-700 text-center'>✨</span>
                            <div>
                                <p className='text-white font-semibold'>Creating Authentic Experiences</p>
                                <p>Where tradition meets transformation</p>
                            </div>
                        </div>
                    </div>
                    <img src='https://live.staticflickr.com/5275/14127541372_614f95fc9a.jpg'
                        className='max-auto h-w-lg rounded-3xl' />
                </div>
                <div className='flex flex-col gap-5 text-center'>
                    <p className="italic text-emerald-500 text-3xl max-w-[930px] text-center">
                        "These mountains have shaped who I am. Now,
                        let them transform who you can become."</p>
                    <span className='text-gray-400'>— Founder, Nilgiri Retreats</span>
                </div>
            </div>
        </div>
    )
}

export default StoryPage