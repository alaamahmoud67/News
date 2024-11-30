import React, { useState } from 'react';
import img1 from '../../assets/body_card1.png'
import img2 from '../../assets/img-8.jpg'
import Hours from './Hours';
export default function Hour() {
   
    const popularItems = [
        "Why the world would end without political polls",
        "Meet The Man Who Designed The Ducati Monster",
        "2020 Audi R8 Spyder spy shots release",
        "Lamborghini makes Huracán GT3 racer faster for 2019",
        "ZF plans $14 billion autonomous vehicle push, concept van",
      ];
     
  return (
    <><div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className="flex justify-center items-center py-3">
        <img src={img1} alt="صورة" className="w-full h-auto" />
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
<Hours/>
          </div>
        </div>
      </div>
      <div className='text-center py-3'>
 <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    عرض المزيد
</button>
 </div>
    </div>
    
    </>
  )
}
