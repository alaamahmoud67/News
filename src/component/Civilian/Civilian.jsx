import React from 'react'
import img1 from '../../assets/body_card1.png'
import img2 from '../../assets/img-8.jpg'
export default function Civilian() {
    const popularItems = [
        "Why the world would end without political polls",
        "Meet The Man Who Designed The Ducati Monster",
        "2020 Audi R8 Spyder spy shots release",
        "Lamborghini makes Huracán GT3 racer faster for 2019",
        "ZF plans $14 billion autonomous vehicle push, concept van",
      ];
      
      const cardsData = [
        {
          image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
          title: "Beautiful Mountain View",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex at turpis rutrum viverra.",
          
        },
        {
          image: "https://images.unsplash.com/photo-1550684848-fac1c5ea4b9e",
          title: "Sunset at the Beach",
          description: "Experience the breathtaking beauty of a sunset by the beach. Let the serene waves and vibrant colors take your mind to a peaceful state.",
         
        },
        {
          image: "https://images.unsplash.com/photo-1530569673472-307dc017a73c",
          title: "Cityscape at Night",
          description: "The city never sleeps, and neither do the lights. Discover the vibrant life of the city as it shines through the night.",
         
        },
        {
            image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
            title: "Beautiful Mountain View",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex at turpis rutrum viverra.",
            
          },
      ];
  return (
    <>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
<div className="flex justify-center items-center py-3">
    <img src={img1} alt="صورة" className="w-full h-auto" />
  </div>
  <div className="relative inline-block my-8">
  <span className="text-2xl md:text-3xl font-bold">
    اخبار مدني وثقافه
  </span>
  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full" />
</div>
  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
    {/* الكارد الأصغر على اليسار */}
    <div className="sm:col-span-5">
      <div className="bg-white rounded-lg shadow-md p-5">
      <div className="max-w-md mx-auto p-5 border rounded-lg shadow-md">
        <ul className="space-y-3">
          {popularItems.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 border-b-2 py-5 font-medium hover:text-indigo-600 transition duration-300 ease-in-out"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <img src={img2} alt="" className="w-full h-auto rounded-lg" />
      </div>
      </div>
    </div>

    {/* الكارد الأكبر على اليمين */}
    <div className="sm:col-span-7">
      <div className="bg-white rounded-lg shadow-md p-5">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 bg-gray-100 min-h-screen p-6">
  {cardsData.map((card, index) => (
    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <img src={card.image} alt="Mountain" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{card.title}</h2>
        <p className="text-gray-700 leading-tight mb-4">{card.description}</p>
        
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
