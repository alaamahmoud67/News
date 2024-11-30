import { useState } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes ,FaSearch } from 'react-icons/fa';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGooglePlusG, FaYoutube } from 'react-icons/fa';

import { FaNewspaper, FaBullhorn, FaRegNewspaper } from 'react-icons/fa'
export default function Navbar() {
    
// 
const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
    <div>
      {/* Topbar */}
      <div className="hidden lg:flex items-center bg-gray-400 text-white px-3 py-2">
        <div className="flex-1 flex items-center space-x-4">
          <a href="#" className="text-sm">الاثنين 1 يناير 2045</a>
          <a href="#" className="text-sm border-l border-gray-700 pl-4">اعلان</a>
          <Link className='text-sm border-l border-gray-700 pl-4' to="/contact">
          تواصل معنا 
          </Link>
          <Link className='text-sm border-l border-gray-700 pl-4' to="/about">
          من نحن
          </Link>
        </div>
        <div className="flex space-x-4">
  <Link to="/twitter" className="text-sm"><FaTwitter /></Link>
  <Link to="/facebook" className="text-sm"><FaFacebookF /></Link>
  <Link to="/linkedin" className="text-sm"><FaLinkedinIn /></Link>
  <Link to="/instagram" className="text-sm"><FaInstagram /></Link>
  <Link to="/google-plus" className="text-sm"><FaGooglePlusG /></Link>
  <Link to="/youtube" className="text-sm"><FaYoutube /></Link>
</div>
      </div>

      {/* Navbar */}

 <div >
 <div className="antialiased bg-gray-900">
      <div className="w-full text-gray-700 bg-gray-900">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <img src={logo} alt="Logo" className="w-20 h-20" />

            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>

          <nav
            className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            {[
              { name: "تواصل معنا", link: "/contact" },
              { name: "من نحن", link: "/about" },

              { name: "الصور", link: "/image" }, 
              { name: "الفيديوهات", link: "/videos" },
              { name: "الرئيسية", link: "/" }

            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg text-white md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                {item.name}
              </Link>
            ))}

            <div
              className="relative"
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                <span>الأخبار</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
  <div className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right z-50">
    <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "رياضة", description: "Easy customization", link: "/sports" },
          {
            title: "أخبار إقليمية ودولية",
            description: "Check your latest comments",
            link: "/international"
          },
          {
            title: "أخبار اقتصادية ومالية",
            description: "Take a look at your statistics",
            link: "/financial"
          }
          ,
          {
            title: "مجتمع مدني وثقافة",
            description: "Take a look at your statistics",
            link: "/civilian"
          }
        ].map((item, idx) => (
          <Link
            key={idx}
            to={item.link} // الرابط هنا يعتمد على خاصية `link` من البيانات
            className="flex flex-row items-start p-2 rounded-lg dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            <div className="bg-teal-500 text-white rounded-lg p-3">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="md:h-6 md:w-6 h-4 w-4"
              >
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <div className="ml-3">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}
            </div>
          </nav>
        </div>
      </div>
    </div>
</div>
    </div>
    </>
  )
}
