import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <>
    <footer>
  <div className="bg-gray-900 py-4 text-gray-400">
    <div className="container px-4 mx-auto">
      <div className="-mx-4 flex flex-wrap justify-between">
        <div className="px-4 my-4 w-full xl:w-1/5">
        <Link className="block w-28 h-28 mb-10" >
        <img src={logo} alt="Logo"/>
        </Link>
        <p className="text-justify">
  موقع "أخبار اليوم" هو مصدر موثوق لأحدث الأخبار المحلية والعالمية. يقدم الموقع تغطية شاملة للأحداث الجارية في مجالات السياسة، الاقتصاد، الرياضة، التكنولوجيا، الثقافة والفن، إضافة إلى التقارير التحليلية والمقالات الرأي. نحن نسعى لتقديم الأخبار بشكل دقيق وموضوعي، مع ضمان سرعة الوصول إليها لتكون أول من يعرف آخر التطورات.
</p>
         
        </div>
        <div className="px-4 my-4 w-full sm:w-auto">
  <div>
    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
      الشركة
    </h2>
  </div>
  <ul className="leading-8">
    <li>
      <Link to="/about" className="hover:text-blue-400">
        من نحن
      </Link>
    </li>
    <li>
      <Link to="/videos" className="hover:text-blue-400">
       الفيديوهات
      </Link>
    </li>
    <li>
      <Link to="/image" className="hover:text-blue-400">
      الصور
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-blue-400">
        تواصل معنا
      </Link>
    </li>
  </ul>
</div>

<div className="px-4 my-4 w-full sm:w-auto">
  <div>
    <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
      الاخبار
    </h2>
  </div>
  <ul className="leading-8">
    <li>
      <Link to="/international" className="hover:text-blue-400">
      اخبار اقليميه ودوليه      
      </Link>
    </li>
    <li>
      <Link to="/sports" className="hover:text-blue-400">
      اخبار رياضيه     
       </Link>
    </li>
    <li>
      <Link to="/civilian" className="hover:text-blue-400">
      مدني وثقافه      
        </Link>
    </li>
    <li>
      <Link to="/financial" className="hover:text-blue-400">
      اقتصاديه وماليه      
      </Link>
    </li>
   
  </ul>
</div>
        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
  <div>
  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
  تواصل معنا
</h2>
  </div>
  <Link
    to="#"
    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
  >
    <FaFacebookF className="w-4 h-4" />
  </Link>
  <Link
    to="#"
    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
  >
    <FaTwitter className="w-4 h-4" />
  </Link>
  <Link
    to="#"
    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
  >
    <FaInstagram className="w-4 h-4" />
  </Link>
  <Link
    to="#"
    className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
  >
    <FaLinkedinIn className="w-4 h-4" />
  </Link>
</div>
      </div>
    </div>
  </div>
  
</footer>

    
    </>
  )
}
