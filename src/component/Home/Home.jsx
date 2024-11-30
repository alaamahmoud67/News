import React, { useState } from 'react';
import img1 from '../../assets/img-1.jpg'

import img4 from '../../assets/img-4.jpg'
import img5 from '../../assets/img-5.jpg'
import logo from '../../assets/logo.png'
import { FaPlay } from 'react-icons/fa'; 
import Marquee from 'react-fast-marquee';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import {   Parallax, Pagination, Navigation } from 'swiper/modules';

import Hours from '../Hour/Hours';
import Article from '../Articles/Article';

export default function Home() {
  

const marqueeData = [
  { text: "مرحباً بكم في موقعنا الإلكتروني! | اكتشف أحدث الأخبار والمقالات هنا.", link: "/somepage" },
  { text: "تابعونا على وسائل التواصل الاجتماعي لمزيد من التحديثات.", link: "/somepage" },
  { text: "مرحباً بكم في موقعنا الإلكتروني! | اكتشف أحدث الأخبار والمقالات هنا.", link: "/somepage" },
  { text: "تابعونا على وسائل التواصل الاجتماعي لمزيد من التحديثات.", link: "/somepage" }
];

const card = [
  {
    title: "Incredible accommodation for your team",
    description: "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.",
    imgSrc: "https://loremflickr.com/g/320/240/team",
    link: "#"
  },
  {
    title: "Amazing team building activities",
    description: "Create strong bonds with your team with exciting and challenging team-building exercises designed to foster collaboration and communication.",
    imgSrc: "https://loremflickr.com/g/320/240/business",
    link: "#"
  },
  {
    title: "Relaxing environments for creativity",
    description: "Find a peaceful place for your team to brainstorm and come up with new ideas while enjoying a calm, natural setting.",
    imgSrc: "https://loremflickr.com/g/320/240/nature",
    link: "#"
  }
];
const card2 = [
  {
    title: "Incredible accommodation for your team",
    description: "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.",
    imgSrc: "https://loremflickr.com/g/320/240/team",
    link: "#"
  },
  {
    title: "Amazing team building activities",
    description: "Create strong bonds with your team with exciting and challenging team-building exercises designed to foster collaboration and communication.",
    imgSrc: "https://loremflickr.com/g/320/240/business",
    link: "#"
  },
  {
    title: "Relaxing environments for creativity",
    description: "Find a peaceful place for your team to brainstorm and come up with new ideas while enjoying a calm, natural setting.",
    imgSrc: "https://loremflickr.com/g/320/240/nature",
    link: "#"
  }
];
const card3 = [
  {
    title: "Incredible accommodation for your team",
    description: "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.",
    imgSrc: "https://loremflickr.com/g/320/240/team",
    link: "#"
  },
  {
    title: "Amazing team building activities",
    description: "Create strong bonds with your team with exciting and challenging team-building exercises designed to foster collaboration and communication.",
    imgSrc: "https://loremflickr.com/g/320/240/business",
    link: "#"
  },
  {
    title: "Relaxing environments for creativity",
    description: "Find a peaceful place for your team to brainstorm and come up with new ideas while enjoying a calm, natural setting.",
    imgSrc: "https://loremflickr.com/g/320/240/nature",
    link: "#"
  }
];

const card1=[
  {
    date: "Aug 18",
    title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
    imageUrl: "https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4="
  },
  {
    date: "Jan 18",
    title: "Barcelona v Bayern Munich",
    imageUrl: "https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&m=1266763488&s=612x612&w=0&h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw="
  },
  {
    date: "Aug 18",
    title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
    imageUrl: "https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4="
  },
  {
    date: "July 23",
    title: "Barcelona v Bayern Munich - UEFA Champions League",
    imageUrl: "https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY="
  }
]

const articles = [
  {
    id: 1,
    date: { day: 25, month: "May" },
    category: "Politics",
    title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
    image:
      "https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8="
  },
  {
    id: 2,
    date: { day: 10, month: "Mar" },
    category: "Politics",
    title: "Afghanistan's President Ashraf Ghani Speaks At The Council",
    image:
      "https://media.gettyimages.com/photos/ashraf-ghani-afghanistans-president-speaks-at-the-council-on-foreign-picture-id850794338?k=6&m=850794338&s=612x612&w=0&h=b_XBw5S38Cioslqr6VL3e36cWQU205IsInqDXZpDOD4="
  },
  {
    id: 3,
    date: { day: 20, month: "Jan" },
    category: "Politics",
    title: "Middle East Participants Gather In Warsaw",
    image:
      "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs="
  },
  {
    id:4,
    date: { day: 10, month: "Mar" },
    category: "Politics",
    title: "Afghanistan's President Ashraf Ghani Speaks At The Council",
    image:
      "https://media.gettyimages.com/photos/ashraf-ghani-afghanistans-president-speaks-at-the-council-on-foreign-picture-id850794338?k=6&m=850794338&s=612x612&w=0&h=b_XBw5S38Cioslqr6VL3e36cWQU205IsInqDXZpDOD4="
  }
];
const videos = [
  "https://www.youtube.com/embed/DH9CO_VQwl8",
  "https://www.youtube.com/embed/mNzenfB3OuY",
  "https://www.youtube.com/embed/UGvDnb-Fs9Y"
];

  return (
    <>
<section>
  <div className="container mx-auto px-3 py-5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* الصورة الكبيرة مع النص */}
      <Swiper
  style={{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  }}
  speed={600}
  parallax={true}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Parallax, Pagination, Navigation]}
  className="mySwiper"
>
  <SwiperSlide className='bg-1'>
    <div className="title" data-swiper-parallax="-300">
    لاعب ليفربول يعتزل بشكل مفاجئ.. ويفتتح متجراً للمثلجات

    </div>
    <div className="subtitle" data-swiper-parallax="-200">
    أعلن كريستيان أدورغان لاعب ليفربول السابق اعتزاله كرة القدم عن عمر يناهز 31 عامًا، وافتتح متجراً للمثلجات في بودابست المجرية.


    </div>
    <div className="text" data-swiper-parallax="-100">
      <p>
      أعلن كريستيان أدورغان لاعب ليفربول السابق اعتزاله كرة القدم عن عمر يناهز 31 عامًا، وافتتح متجراً للمثلجات في بودابست المجرية.

</p>
    </div>
  </SwiperSlide>

  <SwiperSlide className='bg-2'>
    <div className="title" data-swiper-parallax="-300">
    لاعب ليفربول يعتزل بشكل مفاجئ.. ويفتتح متجراً للمثلجات
    </div>
    <div className="subtitle" data-swiper-parallax="-200">
    أعلن كريستيان أدورغان لاعب ليفربول السابق اعتزاله كرة القدم عن عمر يناهز 31 عامًا، وافتتح متجراً للمثلجات في بودابست المجرية.
    </div>
    <div className="text" data-swiper-parallax="-100">
      <p>
      أعلن كريستيان أدورغان لاعب ليفربول السابق اعتزاله كرة القدم عن عمر يناهز 31 عامًا، وافتتح متجراً للمثلجات في بودابست المجرية.
      </p>
    </div>
  </SwiperSlide>

  <SwiperSlide className='bg-3'>
    <div className="title" data-swiper-parallax="-300">
    لاعب ليفربول يعتزل بشكل مفاجئ.. ويفتتح متجراً للمثلجات
    </div>
    <div className="subtitle" data-swiper-parallax="-200">
    أعلن كريستيان أدورغان لاعب ليفربول السابق اعتزاله كرة القدم عن عمر يناهز 31 عامًا، وافتتح متجراً للمثلجات في بودابست المجرية.
    </div>
    <div className="text" data-swiper-parallax="-100">
      <p>
      أعلن كريستيان أدورغان لاعب ليفربول السابق اعتزاله كرة القدم عن عمر يناهز 31 عامًا، وافتتح متجراً للمثلجات في بودابست المجرية.
      </p>
    </div>
  </SwiperSlide>
</Swiper>

      {/* الصورتين الصغيرتين مع النصوص */}
      <div className="grid grid-rows-2 gap-4">
        <div className="relative">
          <img src={img4} alt="Small 1" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
            <p>هذا نص فوق الصورة الصغيرة 1</p>
          </div>
        </div>
        <div className="relative">
          <img src={img5} alt="Small 2" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
            <p>هذا نص فوق الصورة الصغيرة 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*  */}
<div className="my-marquee-container">
      <Marquee speed={50} gradient={false}>
        {/* استخدام map لتكرار العناصر */}
        {marqueeData.map((item, index) => (
          <Link key={index} to={item.link} className="flex items-center ml-6">
            <img src={logo} alt="Logo" className="w-6 h-6 mr-2" /> {/* اللوجو بحجم صغير */}
            <span className="text-lg font-bold">{item.text}</span>
          </Link>
        ))}
      </Marquee>
    </div>
{/*  */}

{/*  */}
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
<div className='bg-gray-200 text-black p-4 border-l-4 border-gray-300 shadow-lg'>
  <h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">أبرز العناوين</h1>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
        
        {/* البطاقة الكبيرة الأولى */}
        <div className="sm:col-span-6 lg:col-span-5">
          <a href="#">
            <div>
              <img src="https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY=" alt="" />
            </div>
          </a>
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="lg:pl-16">
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Fashion
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                The perfect summer sweater that you can wear!
              </a>
              <p className="text-gray-700 text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

        {/* مجموعة البطاقات الصغيرة */}
        <div className="sm:col-span-6 lg:col-span-4">
        { card1.map((item, index) => (
            <div className="flex items-start mb-3 pb-3" key={index}>
              <a href="#" className="inline-block mr-3">
                <div
                  className="w-20 h-20 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></div>
              </a>
              <div className="text-sm w-2/3">
                <p className="text-gray-600 text-xs">{item.date}</p>
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* البطاقة الكبيرة الثانية */}
        <div className="sm:col-span-12 lg:col-span-3">
          <a href="#">
          <div>
              <img src="https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY=" alt="" />
            </div>
          </a>
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div>
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Fashion
              </a>
              <a
                href="#"
                className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                The perfect summer sweater that you can wear!
              </a>
              <p className="text-gray-700 text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    {/*  */}
    <section>

      <div className="container mx-auto bg-white py-14 px-6 md:px-18">
<div className="grid md:grid-cols-2  grid-cols-1 gap-4">
<div>
<Link to="/international">
<div className='bg-gray-200 text-black p-4 border-l-4 border-gray-300 shadow-lg'>
  <h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">أخبار إقليمية ودولية
  </h1>
</div>
</Link>
<img src={img1} alt="" />
<div>
<div className="grid grid-cols-1 border gap-8">
      {card.map((card, index) => (
        <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={card.imgSrc} alt="Card Image" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href={card.link} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {card.title}
            </a>
            <p className="mt-2 text-slate-500">{card.description}</p>
          </div>
        </div>
      </div>
      ))}
    </div>
</div>
</div>
<div>
<Link to="/financial">
<div className='bg-gray-200 text-black p-4 border-l-4 border-gray-300 shadow-lg'>
  <h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">أخبار اقتصادية ومالية</h1>
</div>
</Link>
<img src={img1} alt="" />
<div>
<div className="grid grid-cols-1 border gap-8">
      {card2.map((card, index) => (
        <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={card.imgSrc} alt="Card Image" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href={card.link} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {card.title}
            </a>
            <p className="mt-2 text-slate-500">{card.description}</p>
          </div>
        </div>
      </div>
      ))}
    </div>
</div>
</div>
</div>
      </div>
    </section>
    <section>
      <div className="container mx-auto bg-white py-14 px-6 md:px-18">
<Link to="/videos">
<div className='bg-gray-200 text-black p-4 border-l-4 border-gray-300 shadow-lg'>
  <h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">أبرز الفيديوهات</h1>
</div>
</Link>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {card3.map((card, index) => (
         <div className="py-3 relative" key={index}>
         <div className="md:flex">
           <div className="md:shrink-0 relative">
             <img className="h-full w-full object-cover " src={card.imgSrc} alt="Card Image" />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg opacity-75 hover:opacity-100">
               <FaPlay className="h-6 w-6 text-black" />
             </div>
           </div>
          
         </div>
       </div>
      ))}
    </div>
      </div>
    </section>
    {/*  */}
    <section>

<div className="container mx-auto bg-white py-14 px-6 md:px-18">
<div className="grid md:grid-cols-2  grid-cols-1 gap-4">
<div>
  <Link to="/civilian">
  <div className='bg-gray-200 text-black p-4 border-l-4 border-gray-300 shadow-lg'>
<h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">مجتمع مدني وثقافة

</h1>
</div>
  </Link>

<img src={img1} alt="" />
<div>
<div className="grid grid-cols-1 border gap-8">
{card.map((card, index) => (
  <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src={card.imgSrc} alt="Card Image" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href={card.link} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        {card.title}
      </a>
      <p className="mt-2 text-slate-500">{card.description}</p>
    </div>
  </div>
</div>
))}
</div>
</div>
</div>
<div>
<Link to='/sports'>
<div className='bg-gray-200 text-black p-4 border-l-4 border-gray-300 shadow-lg'>
<h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">أخبار رياضية</h1>
</div>
</Link>
<img src={img1} alt="" />
<div>
<div className="grid grid-cols-1 border gap-8">
{card2.map((card, index) => (
  <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src={card.imgSrc} alt="Card Image" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href={card.link} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        {card.title}
      </a>
      <p className="mt-2 text-slate-500">{card.description}</p>
    </div>
  </div>
</div>
))}
</div>
</div>
</div>
</div>
</div>
</section>
{/* articl */}
<section>
  <Link to="/Articles">
  <div className='bg-gray-200 container mx-auto text-black p-4 border-l-4 border-gray-300 shadow-lg'>
<h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">مقالات مختارة
</h1>
</div>
  </Link>

<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1  lg:grid-cols-4 gap-5">
      <Article/>
      </div>
    </div>
</section>
{/*video  */}
<section className='bg-black bg-opacity-70 py-4'>
  <div className='container mx-auto px-3'>
  <div className='bg-gray-200 text-black p-4 border-l-4 border-gray-300 shadow-lg'>
<div className='flex justify-between items-center '>
<h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">معرض الفيديو</h1>
<Link to="/videos">
<h1>مشاهده المزيد</h1>

</Link>
    </div>  
</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* الصورة الكبيرة */}
      <div className="py-3 relative col-span-1">
  <div className="bg-cover text-center overflow-hidden h-96">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/DH9CO_VQwl8"
      title="Main video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

      {/* الصور الصغيرة تحت بعضها */}
      <div className="grid grid-rows-3 gap-4">
      {videos.map((videoUrl, index) => (
        <div className="py-2 relative" key={index}>
          <div className="relative h-24">
            <iframe
              className="h-full w-full object-cover"
              src={videoUrl}
              title={`YouTube Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>
</section>
{/*tabs  */}
<section>
<div  className="container mx-auto px-4 py-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
<Link to="/Hour">
<div className=' '>
 <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    عرض المزيد
</button>
 </div>
 </Link>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<Hours/>


    <div>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className='bg-gray-200 text-black p-4 border-l-4 border-gray-300 shadow-lg'>
  <h1 className="text-3xl md:text-6xl lg:text-3xl font-bold  ">أخبار إقليمية ودولية
  </h1>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900" />
            <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              <a
                href="#"
                className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500"
              >
                {article.category}
              </a>
              <div className="text-white font-regular flex flex-col justify-start">
                <span className="text-3xl leading-0 font-semibold">{article.date.day}</span>
                <span className="-mt-3">{article.date.month}</span>
              </div>
            </div>
            <main className="p-5 z-10">
              <a
                href="#"
                className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline"
              >
                {article.title}
              </a>
            </main>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
 
</div>
  
</section>

    </>
  )
}
