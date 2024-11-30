import React from 'react'
import img1 from '../../assets/body_card1.png'
import img2 from '../../assets/img-8.jpg'
export default function Videos() {
  const popularItems = [
    "Why the world would end without political polls",
    "Meet The Man Who Designed The Ducati Monster",
    "2020 Audi R8 Spyder spy shots release",
    "Lamborghini makes Huracán GT3 racer faster for 2019",
    "ZF plans $14 billion autonomous vehicle push, concept van",
  ];
  return (
    <>
   
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div className="flex justify-center items-center py-3">
  <img src={img1} alt="صورة" />
</div>

<div className="relative inline-block my-8">
  <span className="text-2xl md:text-3xl font-bold">
    فيديوهات
  </span>
  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full" />
</div>



      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 ">

        {/* الفيديو الرئيسي */}
        <div className="sm:col-span-4">
        <div className="max-w-md mx-auto p-5 border">
      <h2 className="text-xl font-bold mb-4 text-gray-900 border-b-2 py-2">Most Popular</h2>
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
    <div>
<img src={img2}alt="" />
    </div>
        </div>

        {/* الفيديوهات الصغيرة */}
        <div className="sm:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {["mNzenfB3OuY", "UGvDnb-Fs9Y", "DH9CO_VQwl8", "mNzenfB3OuY", "UGvDnb-Fs9Y", "DH9CO_VQwl8"].map((videoId, index) => (
            <div key={index}>
              <a href="#">
                <div className="h-40 bg-cover text-center overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </a>
              <a href="#" className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Video {index + 1} Title
              </a>
            </div>
          ))}
        </div>

      </div>

      <div className='text-center py-3'>
 <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    عرض المزيد
</button>
 </div>

    </div>
   

    </>
  )
}
