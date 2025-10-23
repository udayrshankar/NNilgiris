import React from 'react';
import { Leaf, MapPin, Heart, Waypoints } from 'lucide-react';

const StoryPage = () => {
  return (
    <section className="bg-emerald-900 text-white py-24 px-6"
      style={{ 
        // You will need to add a suitable background image to your public folder
        backgroundImage: "url('/mountain-dark-bg.png')", 
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(10, 77, 60, 0.9)" 
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <span className="font-semibold text-emerald-300 flex items-center gap-2">
            <Heart size={18} /> A Personal Story
          </span>
          <h2 className="text-5xl font-bold text-white leading-tight">
            Born in the Mountains, Sharing the Magic
          </h2>
          <p className="text-gray-200 text-lg">
            Growing up in the enchanting hills of Ooty, I have been blessed to witness the magic of these mountains through every season, every sunrise, and every misty evening. As a native of this beautiful land, the Nilgiris aren't just a destination for me—they're home, they're my childhood playground, and they hold the essence of who I am.
          </p>
          <p className="text-gray-200 text-lg">
            From exploring hidden trails as a child to understanding the deep cultural heritage passed down through generations, I have lived and breathed the soul of these mountains. Every pathway, every viewpoint, every local story is woven into my being. This intimate connection with my homeland is what drives my passion to share these experiences with others.
          </p>
          <p className="text-emerald-100 font-semibold text-lg border-l-4 border-emerald-400 pl-4">
            My mission is simple yet profound: I want everyone who visits to feel the same sense of wonder, peace, and connection that I have experienced since childhood. Through Nilgiri Retreats, I'm not just offering a service—I'm sharing a piece of my heart, my heritage, and the transformative power of these sacred mountains.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <Leaf className="text-emerald-400" size={24} />
              <span className="font-semibold">Native Born</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <MapPin className="text-emerald-400" size={24} />
              <span className="font-semibold">Local Expert</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg">
              <Heart className="text-emerald-400" size={24} />
              <span className="font-semibold">Passionate</span>
            </div>
          </div>
        </div>

        {/* Image & Quote */}
        <div className="flex flex-col gap-8">
          <img 
            // You will need to add this image to your public folder
            src="/wave-mountain.jpg" 
            alt="Nilgiri Mountains" 
            className="rounded-2xl shadow-2xl object-cover w-full h-80" 
          />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-emerald-200">
              <Waypoints size={28} />
              <span className="text-xl font-semibold">Creating Authentic Experiences</span>
              <p className="text-sm">Where tradition meets transformation</p>
            </div>
            <p className="text-3xl font-semibold text-white italic text-center px-4">
              "These mountains have shaped who I am. Now, let them transform who you can become."
            </p>
            <span className="text-right text-emerald-300 font-medium pr-4">— Founder, Nilgiri Retreats</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StoryPage;