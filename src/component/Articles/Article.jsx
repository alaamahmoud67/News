import React from 'react'

export default function Article() {
    const items = [
        {
          image: "https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=",
          date: { day: "25", month: "May" },
          title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
          link: "#"
        },
        {
          image: "https://media.gettyimages.com/photos/ashraf-ghani-afghanistans-president-speaks-at-the-council-on-foreign-picture-id850794338?k=6&m=850794338&s=612x612&w=0&h=b_XBw5S38Cioslqr6VL3e36cWQU205IsInqDXZpDOD4=",
          date: { day: "10", month: "Mar" },
          title: "Afghanistan's President Ashraf Ghani Speaks At The Council",
          link: "#"
        },
        {
          image: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=",
          date: { day: "20", month: "Jan" },
          title: "Middle East Participants Gather In Warsaw",
          link: "#"
        },
        {
          image: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-speaks-during-a-gathering-in-jalalabad-picture-id1205021905?k=6&m=1205021905&s=612x612&w=0&h=nwAH1XuZxF_H4f6LfHv-lgqtZe0h1tVFXfzhpMwFqao=",
          date: { day: "25", month: "May" },
          title: "Afghan President Ashraf Ghani Visits Jalalabad",
          link: "#"
        }
      ];
  return (
    <>
    {items.map((item, index) => (
          <div
            key={index}
            className="relative w-full flex items-end justify-start text-left bg-cover bg-center"
            style={{ height: "450px", backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              <a
                href={item.link}
                className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
              >
                Politics
              </a>
              <div className="text-white font-regular flex flex-col justify-start">
                <span className="text-3xl leading-0 font-semibold">{item.date.day}</span>
                <span className="-mt-3">{item.date.month}</span>
              </div>
            </div>
            <main className="p-5 z-10">
              <a
                href={item.link}
                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
                {item.title}
              </a>
            </main>
          </div>
        ))}
    </>
  )
}
