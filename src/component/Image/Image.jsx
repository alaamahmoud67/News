import React from 'react'
import img1 from '../../assets/body_card1.png'
export default function Image() {
  return (
    <>
    <section>
        <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
        <div className="flex justify-center items-center">
  <img src={img1} alt="صورة" />
</div>
<div>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

        {/* Main article */}
        <div className="sm:col-span-5">
          <a href="#">
            <div
              className="bg-cover text-center overflow-hidden"
              style={{
                minHeight: "300px",
                backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')"
              }}
              title="Woman holding a mug"
            ></div>
          </a>
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div>
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Election
              </a>
              <a
                href="#"
                className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                Revenge of the Never Trumpers
              </a>
              <p className="text-gray-700 text-base mt-2">
                Meet the Republican dissidents fighting to push Donald Trump out of office—and reclaim their party
              </p>
            </div>
          </div>
        </div>

        {/* Other articles */}
        <div className="sm:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[
            {
              title: "The perfect summer sweater that you can wear!",
              img: "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY="
            },
            {
              title: "The perfect summer sweater that you can wear!",
              img: "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY="
            },
            {
              title: "The perfect summer sweater that you can wear!",
              img: "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY="
            },
            {
              title: "  The perfect summer sweater that you can wear!",
              img: "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY="
            },
            {
              title: " The perfect summer sweater that you can wear!",
              img: "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY="
            },
            {
              title: "  The perfect summer sweater that you can wear!",
              img: "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY="
            }
          ].map((article, idx) => (
            <div key={idx}>
              <a href="#">
                <div
                  className="h-40 bg-cover text-center overflow-hidden"
                  style={{ backgroundImage: `url(${article.img})` }}
                  title="Woman holding a mug"
                ></div>
              </a>
              <a
                href="#"
                className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                {article.title}
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
</div>

<div className='text-center py-3'>
 <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    عرض المزيد
</button>
 </div>
        </div>
    </section>
    
    </>
  )
}
