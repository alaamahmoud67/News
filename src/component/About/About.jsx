import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import img1 from '../../assets/img-9.jpg'
import img2 from '../../assets/img-10.jpg'

export default function About() {
  return (
    <>
<div className="flex flex-col lg:flex-row w-full h-auto bg-gray-200">
  {/* الـ div الأكبر */}
  <div className="lg:flex-[2.3] text-black flex flex-col  p-6">
  {/* الصورة */}
  <div className='text-center'>
  <img 
    src={img2}
    alt="About Us" 
    className=" mb-4"
  />
  </div>
  {/* النص */}
  <h2 className="text-3xl font-bold mb-4">من نحن</h2>
  <p className="text-lg leading-relaxed">
    نحن فريق متخصص في تقديم حلول مبتكرة وشاملة مصممة لتلبية احتياجات عملائنا المتنوعة في مختلف المجالات. 
    نؤمن بأن النجاح يتحقق من خلال العمل الجاد، الابتكار، والالتزام بالقيم الأساسية التي تشمل النزاهة، المهنية، والتفاني.
    <br /><br />
    على مدار السنوات، قمنا ببناء سمعة قوية من خلال تقديم خدمات استثنائية تلبي توقعات العملاء وتتفوق عليها. 
    نحن نعمل بشغف لتحقيق التميز في كل ما نقدمه، ونسعى دائمًا إلى تعزيز شراكاتنا مع عملائنا عبر تقديم الدعم المستمر والمشورة المتخصصة.
    <br /><br />
    رؤيتنا هي أن نصبح من رواد السوق في تقديم الخدمات التي تتجاوز الحدود التقليدية، مع التركيز على التكنولوجيا الحديثة 
    والابتكار كعناصر رئيسية في نهجنا. نحن نسعى لتحقيق تأثير إيجابي في حياة عملائنا وشركائنا.
    <br /><br />
    قيمنا تعكس إيماننا بأهمية التواصل، الاحترام، والتعاون. نحن ملتزمون بخلق بيئة عمل متميزة ومبدعة تعزز من إمكانيات فريقنا 
    وتلهمهم لتحقيق المزيد من النجاح.
    <br /><br />
    إذا كنت تبحث عن شريك موثوق وملتزم بتحقيق نجاحك، نحن هنا لتقديم الدعم الذي تحتاجه. مرحبًا بك في عالمنا حيث نضع 
    الجودة والتميز دائمًا في المقدمة.
  </p>
</div>
  {/* الـ div الأصغر */}
  <div className="lg:flex-[1.5] mt-20 text-black flex flex-col items-center justify-center text-center p-6">
  {/* العنوان */}
  <h2 className="text-2xl font-bold mb-4">Follow Us</h2>

  {/* قائمة السوشيال ميديا */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center mb-6">
    {/* فيسبوك */}
    <div className="flex items-center space-x-3">
      <FaFacebookF className="w-6 h-6 text-blue-700" />
      <p>8,045</p>
    </div>
    {/* تويتر */}
    <div className="flex items-center space-x-3">
      <FaTwitter className="w-6 h-6 text-blue-400" />
      <p>8,045</p>
    </div>
    {/* إنستغرام */}
    <div className="flex items-center space-x-3">
      <FaInstagram className="w-6 h-6 text-pink-500" />
      <p>8,045</p>
    </div>
    {/* يوتيوب */}
    <div className="flex items-center space-x-3">
      <FaYoutube className="w-6 h-6 text-red-600" />
      <p>8,045</p>
    </div>
  </div>

  {/* الصورة */}
  <div className="hidden lg:block w-full mt-10">
    <img src={img1} alt="Follow Us" className="w-72 h-auto rounded-lg mx-auto" />
  </div>
</div>
</div>

    </>
  )
}
