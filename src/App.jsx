import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import BookingBox from "./components/BookingBox";
import Cards from "./components/Cards";
import Getaways from "./components/Getaways";
import ChoosePage from "./pages/ChoosePage";
import Footer from "./pages/Footer";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import ReviewsPage from "./pages/ReviewsPage";
import StoryPage from "./pages/StoryPage";
import { User, Heart, Globe, Star, Shield, Crown } from "lucide-react";
import Package from "./components/Package";
import GalleryCard from "./components/GalleryCard";

export const cardsData = [
  {
    icon: User,
    title: "Expert Team Building",
    description:
      "Strengthen bonds and improve collaboration through carefully designed activities and workshops in inspiring natural settings.",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Heart,
    title: "Wellness Focus",
    description:
      "Rejuvenate mind and body with yoga, meditation, nature walks, and wellness activities designed to reduce stress and boost creativity.",
    iconBg: "bg-pink-400",
  },
  {
    icon: Globe,
    title: "Cultural Immersion",
    description:
      "Experience the rich heritage of the Nilgiri Hills through local cuisine, traditional crafts, and meaningful cultural exchanges.",
    iconBg: "bg-blue-400",
  },
  {
    icon: Star,
    title: "Local Expertise",
    description:
      "Born and raised in Ooty, we know every hidden gem, best viewpoint, and authentic experience the mountains have to offer.",
    iconBg: "bg-yellow-400",
  },
  {
    icon: Shield,
    title: "End-to-End Control",
    description:
      "Being locals, we have complete control over the entire value chain - from accommodations to activities, ensuring consistent quality.",
    iconBg: "bg-purple-500",
  },
  {
    icon: Crown,
    title: "Premium Partnerships",
    description:
      "We've partnered with the best facilities, guides, and service providers in the region to deliver exceptional experiences.",
    iconBg: "bg-orange-400",
  },
];

const galleryData = [
  {
    img: "/gallery-corporate.jpg",
    title: "Corporate Strategy Sessions",
    badge: "Corporate",
    photos: 4,
  },
  {
    img: "/gallery-wellness.jpg",
    title: "Mountain Wellness",
    badge: "Getaway",
    photos: 4,
  },
  {
    img: "/gallery-adventure.jpg",
    title: "Adventure Activities",
    badge: "Activities",
    photos: 3,
  },
  {
    img: "/gallery-cultural.jpg",
    title: "Cultural Experiences",
    badge: "Activities",
    photos: 4,
  },
  {
    img: "/gallery-luxury.jpg",
    title: "Luxury Accommodations",
    badge: "Getaway",
    photos: 3,
  },
  {
    img: "/gallery-team.jpg",
    title: "Team Building",
    badge: "Corporate",
    photos: 4,
  },
];

const reviewsData = [
  {
    quote: "Our team retreat in Ooty was transformative. The perfect blend of strategy sessions and wellness activities helped us reconnect as a team while planning our next quarter.",
    name: "Priya Sharma",
    company: "TechFlow Solutions",
    stars: 5,
  },
  {
    quote: "The mountain air and structured workshops gave our startup the clarity we needed. Highly recommend for any growing team.",
    name: "Rajesh Kumar",
    company: "Bangalore Startups",
    stars: 5,
  },
  {
    quote: "Our weekend getaway was exactly what we needed - peaceful, rejuvenating, and beautifully organized. The yoga sessions with mountain views were unforgettable.",
    name: "Anita & Vikram",
    company: "Weekend Getaway",
    stars: 5,
  },
  {
    quote: "Beautiful location and well-planned activities. Our creative team came back inspired and energized.",
    name: "Meera Nair",
    company: "Design Studio",
    stars: 5,
  },
];

function App() {
  const [openBox, setOpenBox] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,      
      offset: 100,     
    });
  }, []);

  const corporateRetreats = [
    {
      title: "Essential Corporate Retreat",
      minPrice: "12,000",
      maxPrice: "18,000",
      duration: "2 days",
      groupSize: "25",
      badge: "Corporate",
      description:
        "Perfect starter package for small to medium teams focusing on strategy and team building.",
      features: [
        "Strategy workshops",
        "Team building activities",
        "Local cultural experiences",
        "Healthy meals",
        "Basic accommodation",
      ],
    },
    {
      title: "Premium Corporate Retreat",
      minPrice: "25,000",
      maxPrice: "35,000",
      duration: "3 days",
      groupSize: "60",
      badge: "Corporate",
      description:
        "Comprehensive corporate retreat with wellness integration and strategic planning.",
      features: [
        "Executive strategy sessions",
        "Wellness workshops",
        "Yoga and meditation",
        "Adventure activities",
        "Premium accommodation",
        "Professional facilitation",
        "Gourmet meals",
      ],
    },
    {
      title: "Enterprise Corporate Retreat",
      minPrice: "40,000",
      maxPrice: "55,000",
      duration: "4 days",
      groupSize: "100",
      badge: "Corporate",
      description:
        "Full-scale corporate transformation experience with custom programs.",
      features: [
        "Custom program design",
        "Leadership development",
        "Wellness immersion",
        "Cultural deep dive",
        "Luxury accommodation",
        "Executive chef",
        "Professional photography",
        "Transport included",
      ],
    },
  ];

  const getawaysData = [
    {
      title: "Weekend Wellness Getaway",
      minPrice: "5,000",
      maxPrice: "8,000",
      duration: "2 days",
      groupSize: "12",
      badge: "Getaway",
      description:
        "Perfect weekend escape with yoga, nature walks, and local culture.",
      features: [
        "Daily yoga sessions",
        "Guided nature walks",
        "Tea plantation tours",
        "Local craft workshops",
        "Organic meals",
        "Comfortable stay",
      ],
    },
    {
      title: "Mindful Mountain Retreat",
      minPrice: "10,000",
      maxPrice: "15,000",
      duration: "3 days",
      groupSize: "16",
      badge: "Getaway",
      description:
        "Deeper wellness experience with meditation, adventure, and cultural immersion.",
      features: [
        "Meditation sessions",
        "Adventure activities",
        "Cultural workshops",
        "Ayurvedic treatments",
        "Premium accommodation",
        "Photography walks",
        "Cooking classes",
      ],
    },
    {
      title: "Adventure Seeker’s Escape",
      minPrice: "12,000",
      maxPrice: "18,000",
      duration: "3 days",
      groupSize: "10",
      badge: "Getaway",
      description:
        "Thrilling adventure experience combining mountain activities with relaxation and local culture.",
      features: [
        "Rock climbing",
        "Trekking expeditions",
        "Mountain biking",
        "Campfire evenings",
        "Stargazing sessions",
        "Local guide",
        "Adventure gear included",
        "Safety equipment",
        "Photography assistance",
      ],
    },
    {
      title: "Romantic Mountain Retreat",
      minPrice: "15,000",
      maxPrice: "25,000",
      duration: "2 days",
      groupSize: "8",
      badge: "Getaway",
      description:
        "Intimate couples retreat focusing on romance, relaxation, and reconnection in stunning mountain settings.",
      features: [
        "Couples spa treatments",
        "Private dining",
        "Sunrise viewings",
        "Romantic walks",
        "Wine tasting",
        "Photography session",
        "Luxury accommodations",
        "Personalized service",
        "Surprise arrangements",
      ],
    },
  ];

  return (
    <>
      {openBox && <BookingBox onClose={() => setOpenBox(false)} />}

      {/* ---------- HERO SECTION ---------- */}
      <div style={{ backgroundColor: "#f0fdf4" }}>
        <div className="bg-gray-600">
          <HomePage />
        </div>

        <ChoosePage />

        {/* ---------- WHY UNIQUE SECTION ---------- */}
        <div className="flex justify-center pb-2">
          <div className="flex flex-wrap justify-center items-center gap-8 p-10">
            {cardsData.map((card, index) => (
              <div 
                key={index} 
                className="w-full sm:w-[48%] lg:w-[30%]"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <Cards {...card} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center w-full text-center items-center gap-6 pt-3 pb-15">
          <div 
            className="bg-white/80 backdrop-blur-md rounded-4xl shadow-lg border border-white/30"
            data-aos="zoom-in"
          >
            <h2 className="font-bold text-2xl mt-4">What Makes Us Truly Unique?</h2>
            <p className="text-lg px-10 py-6 max-w-7xl mx-auto text-black/90">
              Being native to Ooty, we have complete end-to-end control of our value chain and have carefully partnered with
              the best facilities, guides, and service providers in the region. This means consistent quality,
              authentic experiences, and unmatched local insights that only true locals can provide.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- CORPORATE RETREATS ---------- */}
      <section className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
        <h2 
          className="text-5xl sm:text-6xl font-bold text-emerald-600 tracking-tight mb-6"
          data-aos="fade-up"
        >
          Corporate Retreats
        </h2>
        <p 
          className="max-w-2xl text-lg font-medium text-gray-600 text-left md:text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Transform your team dynamics and strategic thinking with our comprehensive corporate retreat packages.
        </p>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
          {corporateRetreats.map((pkg, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Getaways
                {...pkg}
                openForm={() => setOpenBox(true)}
              />
            </div>
          ))}
          <div 
            data-aos="fade-up"
            data-aos-delay={corporateRetreats.length * 100}
          >
            <Package openModal={() => setOpenBox(true)} />
          </div>
        </div>
      </section>

      {/* ---------- WEEKEND GETAWAYS ---------- */}
      <section className="min-h-screen bg-white flex flex-col items-center px-6 py-16">
        <h2 
          className="text-5xl sm:text-6xl font-bold text-emerald-600 tracking-tight mb-6"
          data-aos="fade-up"
        >
          Weekend Getaways
        </h2>
        <p 
          className="max-w-2xl text-lg text-gray-600 text-left md:text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Escape the city and reconnect with nature through our thoughtfully curated wellness experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl">
          {getawaysData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <Getaways 
                {...item} 
                openForm={() => setOpenBox(true)} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- GALLERY + CTA ---------- */}
      <div className="bg-blue-50 py-16">
        <GalleryPage />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 lg:px-8 mt-16">
          {galleryData.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <GalleryCard
                img={item.img}
                title={item.title}
                badge={item.badge}
                photos={item.photos}
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center w-full py-10 mt-10">
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-3xl 
                  max-w-2xl w-full px-9 py-7 gap-4 border-green-100 border"
                  data-aos="zoom-in" data-aos-delay="200">
            <h2 className="font-bold text-2xl text-gray-900">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-md text-gray-600">
              Join us in the Nilgiris and experience the transformation that awaits in these magical mountains.
            </p>
            <button
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-9 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md font-medium text-base"
              onClick={() => setOpenBox(true)}
            >
              Book Your Experience
            </button>
          </div>
        </div>
      </div>

      {/* ---------- STORY + REVIEWS + FOOTER ---------- */}
      
      <StoryPage />

      <section className="pt-20 pb-24 bg-gradient-to-b from-white to-blue-100 text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-emerald-700 tracking-tight mb-4" data-aos="fade-up">
          What Our Clients Say
        </h2>
        <p className="text-lg font-medium text-gray-600 mb-12 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          Hear from teams and individuals who've experienced transformation in the Nilgiri Hills.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 p-2 max-w-7xl mx-auto">
          {reviewsData.map((review, index) => (
            <div key={index} className="w-full sm:w-[48%] lg:w-[45%]" data-aos="fade-up" data-aos-delay={index * 100}>
              <ReviewsPage 
                quote={review.quote}
                name={review.name}
                company={review.company}
                stars={review.stars}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer openForm={() => setOpenBox(true)} />
    </>
  );
}

export default App;