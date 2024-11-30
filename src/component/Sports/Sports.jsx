import React from 'react'
import img1 from '../../assets/body_card1.png'
import img2 from '../../assets/img-8.jpg'
export default function Sports() {
    const popularItems = [
        "Why the world would end without political polls",
        "Meet The Man Who Designed The Ducati Monster",
        "2020 Audi R8 Spyder spy shots release",
        "Lamborghini makes Huracán GT3 racer faster for 2019",
        "ZF plans $14 billion autonomous vehicle push, concept van",
      ];
      const cardData = [
        {
          title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
          date: { day: 25, month: "May" },
          category: "Politics",
          imageUrl: "https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=",
        },
        {
          title: "Afghanistan's President Ashraf Ghani Speaks At The Council",
          date: { day: 10, month: "Mar" },
          category: "Politics",
          imageUrl: "https://media.gettyimages.com/photos/ashraf-ghani-afghanistans-president-speaks-at-the-council-on-foreign-picture-id850794338?k=6&m=850794338&s=612x612&w=0&h=b_XBw5S38Cioslqr6VL3e36cWQU205IsInqDXZpDOD4=",
        },
        {
          title: "Middle East Participants Gather In Warsaw",
          date: { day: 20, month: "Jan" },
          category: "Politics",
          imageUrl: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=",
        },
        {
            title: "Middle East Participants Gather In Warsaw",
            date: { day: 20, month: "Jan" },
            category: "Politics",
            imageUrl: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=",
          },
          {
            title: "Middle East Participants Gather In Warsaw",
            date: { day: 20, month: "Jan" },
            category: "Politics",
            imageUrl: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=",
          },
          {
            title: "Middle East Participants Gather In Warsaw",
            date: { day: 20, month: "Jan" },
            category: "Politics",
            imageUrl: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=",
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
    اخبار رياضيه
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
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              <a
                href="#"
                className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
              >
                {card.category}
              </a>
              <div className="text-white font-regular flex flex-col justify-start">
                <span className="text-3xl leading-0 font-semibold">{card.date.day}</span>
                <span className="-mt-3">{card.date.month}</span>
              </div>
            </div>
            <main className="p-5 z-10">
              <a
                href="#"
                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
                {card.title}
              </a>
            </main>
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
