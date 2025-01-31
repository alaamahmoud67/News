import React, { useState } from 'react';

export default function Hours() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
      { 
        id: 0, 
        label: 'كل الأخبار', 
        content: [
            { time: '15:37', text: 'غارة على بلاط وقصف للخيام' },
            { time: '15:34', text: 'طوارىء الصحة: 14 شهيدا في حصيلة غير نهائية لغارات العدو أمس على دير قانون راس العين في قضاء صور' },
            { time: '15:18', text: '23 شهيدا و8 جرحى في غارة علمات حتى الساعة والطيران الحربي يستهدف جبشيت وكفردجال' },
            { time: '15:01', text: '23 شهيدا وأشلاء و 6 جرحى في حصيلة غير نهائية للغارة على علمات قضاء جبيل' },
            { time: '14:57', text: 'غارة على يانوح' },
            { time: '14:49', text: 'غارة على خربة سلم' },
            { time: '14:14', text: 'غارة على منزل في رسم الحدث' },
            { time: '14:08', text: 'قصف بلدتي بيت ليف وعين ابل' },
            { time: '14:02', text: 'جريحان في استهداف سيارتين في جديدة مرجعيون' },
            { time: '13:42', text: 'قصف صديقين وجبال البطم' },
            { time: '13:12', text: 'سقوط 3 شهداء في عدلون' },
            { time: '12:57', text: 'غارة على جديدة مرجعيون استهدفت سيارتين' },
            { time: '12:46', text: 'غارة على كفرصير وصير الغربية' },
            { time: '12:44', text: 'إجمالي خسائر القوات الأوكرانية خلال المعارك على محور كورسك بلغ أكثر من 31090 عسكري بالإضافة إلى 194 دبابة' },
            { time: '12:38', text: 'وزارة الصحة: شهيد و 4 جرحى في الحصيلة النهائية للغارة على سحمر في البقاع الغربي' },
            { time: '12:31', text: 'هيئة شؤون الأسرى: جيش الاحتلال الإسرائيلي أعدم بالرصاص 3 أسرى من غزة بعد لحظات من الإفراج عنهم' },
            { time: '12:29', text: 'وزارة الصحة: 3 شهداء وجريحان في الحصيلة النهائية لغارة الاحتلال ليل أمس على مشغرة في البقاع الغربي' },
            { time: '12:22', text: 'ارتفاع عدد شهداء الغارة التي شُنت على منطقة علمات - قضاء جبيل إلى 21 شهيداً حتى اللحظة' },
            { time: '12:12', text: 'حزب الله يعلن استهداف قاعدة شراغا شمالي عكا وكريات شمونة برشقة صاروخية' },
            { time: '11:51', text: 'غارة بين بلدتي كفرتبنيت وارنون' },
            { time: '11:45', text: 'وزارة الصحة في غزة: ارتفاع عدد ضحايا العدوان الإسرائيلي إلى 43603 شهداء و102929 مصابا منذ 7 تشرين الأوّل 2023' },
            { time: '11:26', text: 'إذاعة الجيش الإسرائيلي عن مصادر: مخطط حزب الله باجتياح الجليل أزيل لكنه قد يواصل إطلاق الصواريخ' },
            { time: '11:21', text: 'صفارات الإنذار تدوي في بلدة المنارة بالجليل الأعلى بعد رصد إطلاق صواريخ' },
            { time: '11:21', text: '"لبنان الحر": الغارة على علمات إستهدفت منزلًا عائدًا للآل حيدر الذين لا يقطنون فيه حاليًا إنما يسكنه نازحون و14 شهيدًا في حصيلة أولية' },
            { time: '11:16', text: 'إذاعة الجيش الإسرائيلي عن مصادر: بعد إنهاء الجيش عمليته بقرى أمامية جنوبي لبنان سيتمركز على الحدود بقوة كبيرة' },
            { time: '11:14', text: 'غارة إسرائيلية على بلدة مرجعيون' },
            { time: '11:13', text: 'إنطلاق صلية صاروخية بإتجاه نهاريا وسماع إنفجارات عديدة في المنطقة' },
            { time: '11:12', text: 'سرايا القدس: قصفنا بالاشتراك مع ألوية الناصر صلاح الدين بقذائف "الهاون" مركز قيادة وسيطرة للعدو في "الإدارة المدنية" شرقي مخيم جباليا' },
            { time: '11:09', text: 'حزب الله: إستهدفنا تجمعاً لقوات جيش العدو بين بلدتي حولا ومركبا شرقاً بصلية صاروخية' },
            { time: '11:07', text: 'كندا ترصد أول حالة إصابة بشرية محتملة بفيروس إنفلونزا الطيور "إتش5"' },
            { time: '11:06', text: 'رئيس دولة الإمارات الشيخ محمد بن زايد يبدأ زيارة رسمية إلى دولة الكويت' },
            { time: '11:03', text: 'غارة على الوزاني' },
            { time: '11:03', text: '3 غارات على النبطية: غارتان على حي المسلخ وغارة على حي المشاع-البياض' },
            { time: '11:02', text: 'رويترز: مدير الوكالة الدولية للطاقة الذرية يزور إيران يوم الأربعاء المقبل' },
        ]
    },
      { id: 1, label: 'محلي',content: [
        { time: '15:37', text: 'غارة على بلاط وقصف للخيام' },
        { time: '15:34', text: 'طوارىء الصحة: 14 شهيدا في حصيلة غير نهائية لغارات العدو أمس على دير قانون راس العين في قضاء صور' },
        { time: '15:18', text: '23 شهيدا و8 جرحى في غارة علمات حتى الساعة والطيران الحربي يستهدف جبشيت وكفردجال' },
        { time: '15:01', text: '23 شهيدا وأشلاء و 6 جرحى في حصيلة غير نهائية للغارة على علمات قضاء جبيل' },
        { time: '14:57', text: 'غارة على يانوح' },
        { time: '14:49', text: 'غارة على خربة سلم' },
        { time: '14:14', text: 'غارة على منزل في رسم الحدث' },
        { time: '14:08', text: 'قصف بلدتي بيت ليف وعين ابل' },
        { time: '14:02', text: 'جريحان في استهداف سيارتين في جديدة مرجعيون' },
        { time: '13:42', text: 'قصف صديقين وجبال البطم' },
        { time: '13:12', text: 'سقوط 3 شهداء في عدلون' },
        { time: '12:57', text: 'غارة على جديدة مرجعيون استهدفت سيارتين' },
        { time: '12:46', text: 'غارة على كفرصير وصير الغربية' },
        { time: '12:44', text: 'إجمالي خسائر القوات الأوكرانية خلال المعارك على محور كورسك بلغ أكثر من 31090 عسكري بالإضافة إلى 194 دبابة' },
        { time: '12:38', text: 'وزارة الصحة: شهيد و 4 جرحى في الحصيلة النهائية للغارة على سحمر في البقاع الغربي' },
        { time: '12:31', text: 'هيئة شؤون الأسرى: جيش الاحتلال الإسرائيلي أعدم بالرصاص 3 أسرى من غزة بعد لحظات من الإفراج عنهم' },
        { time: '12:29', text: 'وزارة الصحة: 3 شهداء وجريحان في الحصيلة النهائية لغارة الاحتلال ليل أمس على مشغرة في البقاع الغربي' },
        { time: '12:22', text: 'ارتفاع عدد شهداء الغارة التي شُنت على منطقة علمات - قضاء جبيل إلى 21 شهيداً حتى اللحظة' },
        { time: '12:12', text: 'حزب الله يعلن استهداف قاعدة شراغا شمالي عكا وكريات شمونة برشقة صاروخية' },
        { time: '11:51', text: 'غارة بين بلدتي كفرتبنيت وارنون' },
        { time: '11:45', text: 'وزارة الصحة في غزة: ارتفاع عدد ضحايا العدوان الإسرائيلي إلى 43603 شهداء و102929 مصابا منذ 7 تشرين الأوّل 2023' },
        { time: '11:26', text: 'إذاعة الجيش الإسرائيلي عن مصادر: مخطط حزب الله باجتياح الجليل أزيل لكنه قد يواصل إطلاق الصواريخ' },
        { time: '11:21', text: 'صفارات الإنذار تدوي في بلدة المنارة بالجليل الأعلى بعد رصد إطلاق صواريخ' },
        { time: '11:21', text: '"لبنان الحر": الغارة على علمات إستهدفت منزلًا عائدًا للآل حيدر الذين لا يقطنون فيه حاليًا إنما يسكنه نازحون و14 شهيدًا في حصيلة أولية' },
        { time: '11:16', text: 'إذاعة الجيش الإسرائيلي عن مصادر: بعد إنهاء الجيش عمليته بقرى أمامية جنوبي لبنان سيتمركز على الحدود بقوة كبيرة' },
        { time: '11:14', text: 'غارة إسرائيلية على بلدة مرجعيون' },
        { time: '11:13', text: 'إنطلاق صلية صاروخية بإتجاه نهاريا وسماع إنفجارات عديدة في المنطقة' },
        { time: '11:12', text: 'سرايا القدس: قصفنا بالاشتراك مع ألوية الناصر صلاح الدين بقذائف "الهاون" مركز قيادة وسيطرة للعدو في "الإدارة المدنية" شرقي مخيم جباليا' },
        { time: '11:09', text: 'حزب الله: إستهدفنا تجمعاً لقوات جيش العدو بين بلدتي حولا ومركبا شرقاً بصلية صاروخية' },
        { time: '11:07', text: 'كندا ترصد أول حالة إصابة بشرية محتملة بفيروس إنفلونزا الطيور "إتش5"' },
        { time: '11:06', text: 'رئيس دولة الإمارات الشيخ محمد بن زايد يبدأ زيارة رسمية إلى دولة الكويت' },
        { time: '11:03', text: 'غارة على الوزاني' },
        { time: '11:03', text: '3 غارات على النبطية: غارتان على حي المسلخ وغارة على حي المشاع-البياض' },
        { time: '11:02', text: 'رويترز: مدير الوكالة الدولية للطاقة الذرية يزور إيران يوم الأربعاء المقبل' },
    ]},
      { id: 2, label: 'إقليمي دولي', 
        content:  [
        { time: '15:37', text: 'غارة على بلاط وقصف للخيام' },
        { time: '15:34', text: 'طوارىء الصحة: 14 شهيدا في حصيلة غير نهائية لغارات العدو أمس على دير قانون راس العين في قضاء صور' },
        { time: '15:18', text: '23 شهيدا و8 جرحى في غارة علمات حتى الساعة والطيران الحربي يستهدف جبشيت وكفردجال' },
        { time: '15:01', text: '23 شهيدا وأشلاء و 6 جرحى في حصيلة غير نهائية للغارة على علمات قضاء جبيل' },
        { time: '14:57', text: 'غارة على يانوح' },
        { time: '14:49', text: 'غارة على خربة سلم' },
        { time: '14:14', text: 'غارة على منزل في رسم الحدث' },
        { time: '14:08', text: 'قصف بلدتي بيت ليف وعين ابل' },
        { time: '14:02', text: 'جريحان في استهداف سيارتين في جديدة مرجعيون' },
        { time: '13:42', text: 'قصف صديقين وجبال البطم' },
        { time: '13:12', text: 'سقوط 3 شهداء في عدلون' },
        { time: '12:57', text: 'غارة على جديدة مرجعيون استهدفت سيارتين' },
        { time: '12:46', text: 'غارة على كفرصير وصير الغربية' },
        { time: '12:44', text: 'إجمالي خسائر القوات الأوكرانية خلال المعارك على محور كورسك بلغ أكثر من 31090 عسكري بالإضافة إلى 194 دبابة' },
        { time: '12:38', text: 'وزارة الصحة: شهيد و 4 جرحى في الحصيلة النهائية للغارة على سحمر في البقاع الغربي' },
        { time: '12:31', text: 'هيئة شؤون الأسرى: جيش الاحتلال الإسرائيلي أعدم بالرصاص 3 أسرى من غزة بعد لحظات من الإفراج عنهم' },
        { time: '12:29', text: 'وزارة الصحة: 3 شهداء وجريحان في الحصيلة النهائية لغارة الاحتلال ليل أمس على مشغرة في البقاع الغربي' },
        { time: '12:22', text: 'ارتفاع عدد شهداء الغارة التي شُنت على منطقة علمات - قضاء جبيل إلى 21 شهيداً حتى اللحظة' },
        { time: '12:12', text: 'حزب الله يعلن استهداف قاعدة شراغا شمالي عكا وكريات شمونة برشقة صاروخية' },
        { time: '11:51', text: 'غارة بين بلدتي كفرتبنيت وارنون' },
        { time: '11:45', text: 'وزارة الصحة في غزة: ارتفاع عدد ضحايا العدوان الإسرائيلي إلى 43603 شهداء و102929 مصابا منذ 7 تشرين الأوّل 2023' },
        { time: '11:26', text: 'إذاعة الجيش الإسرائيلي عن مصادر: مخطط حزب الله باجتياح الجليل أزيل لكنه قد يواصل إطلاق الصواريخ' },
        { time: '11:21', text: 'صفارات الإنذار تدوي في بلدة المنارة بالجليل الأعلى بعد رصد إطلاق صواريخ' },
        { time: '11:21', text: '"لبنان الحر": الغارة على علمات إستهدفت منزلًا عائدًا للآل حيدر الذين لا يقطنون فيه حاليًا إنما يسكنه نازحون و14 شهيدًا في حصيلة أولية' },
        { time: '11:16', text: 'إذاعة الجيش الإسرائيلي عن مصادر: بعد إنهاء الجيش عمليته بقرى أمامية جنوبي لبنان سيتمركز على الحدود بقوة كبيرة' },
        { time: '11:14', text: 'غارة إسرائيلية على بلدة مرجعيون' },
        { time: '11:13', text: 'إنطلاق صلية صاروخية بإتجاه نهاريا وسماع إنفجارات عديدة في المنطقة' },
        { time: '11:12', text: 'سرايا القدس: قصفنا بالاشتراك مع ألوية الناصر صلاح الدين بقذائف "الهاون" مركز قيادة وسيطرة للعدو في "الإدارة المدنية" شرقي مخيم جباليا' },
        { time: '11:09', text: 'حزب الله: إستهدفنا تجمعاً لقوات جيش العدو بين بلدتي حولا ومركبا شرقاً بصلية صاروخية' },
        { time: '11:07', text: 'كندا ترصد أول حالة إصابة بشرية محتملة بفيروس إنفلونزا الطيور "إتش5"' },
        { time: '11:06', text: 'رئيس دولة الإمارات الشيخ محمد بن زايد يبدأ زيارة رسمية إلى دولة الكويت' },
        { time: '11:03', text: 'غارة على الوزاني' },
        { time: '11:03', text: '3 غارات على النبطية: غارتان على حي المسلخ وغارة على حي المشاع-البياض' },
        { time: '11:02', text: 'رويترز: مدير الوكالة الدولية للطاقة الذرية يزور إيران يوم الأربعاء المقبل' },
    ] 
  },
    ];
   
  return (
    <>
              <div className="pt-14 ">
  <div className="border-b bg-blue-950">
    <ul className="flex space-x-4">
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            className={`py-2 px-4 focus:outline-none ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-400 text-white'
                : 'text-white hover:text-blue-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
  <div className="mt-4 max-h-96 border-blue-950 overflow-y-auto">
    {tabs[activeTab].content.map((item, index) => (
      <p key={index} className="px-3 border-b-2 py-3">
        <span className="font-bold text-blue-500">{item.time}</span> : {item.text}
      </p>
    ))}
  </div>
</div>
    </>
  )
}
