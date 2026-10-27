import { Link } from "react-router-dom";
import logoSDU from '../assets/logoSDU.jpg';

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* 1. Navbar (ส่วนหัว) */}
      <header className="w-full flex flex-col font-sans">
        {/* 1. Top Banner (แถบประกาศด้านบน) */}
        <div className="bg-[#f4f9ff] py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          {/* ป้ายกำกับ (Badge) */}
          <div className="bg-[#e1effe] text-blue-600 px-3 py-1 rounded-full flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            เปิดรับสมัครภาคการศึกษาใหม่
          </div>

          {/* ข้อความและลิงก์ */}
          <div className="flex flex-wrap justify-center gap-2 text-gray-600">
            <span>
              ปลดล็อกโอกาสและศักยภาพนักศึกษาสวนดุสิต ด้วยทุนเสริมโอกาส 75 ชม.
              และพาน้องขึ้นห้องเรียน
            </span>
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-700 transition"
            >
              ดูรายละเอียดและสมัครวันนี้
            </a>
          </div>
        </div>

        {/* 2. Main Navigation (แถบนำทางหลัก) */}
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4 bg-white border-b border-gray-100 shadow-sm">
          {/* โลโก้และชื่อหน่วยงาน (ด้านซ้าย) */}
          <div className="flex items-center gap-4">
            {/* ใส่รูปภาพโลโก้ตรงนี้ */}
            <img
              src={logoSDU}
              alt="SDU Logo"
              className="h-10 w-auto object-contain"
              // หากยังไม่มีไฟล์รูป สามารถใช้ div จำลองแทนได้ชั่วคราว:
              // <div className="h-10 w-10 text-blue-500 font-serif italic text-2xl font-bold flex items-center justify-center">SDU</div>
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-base md:text-lg">
                ศูนย์สนเทศแนะแนวการศึกษาและอาชีพ
              </span>
              <span className="text-xs text-gray-500">มหาวิทยาลัยสวนดุสิต</span>
            </div>
          </div>

          {/* เมนูนำทางแบบกรอบมน (ด้านขวา) */}
          <div className="hidden md:flex items-center gap-8 px-8 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm">
            <a href="#" className="hover:text-blue-600 transition">
              โครงงาน
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              ที่มา
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              เกณฑ์&สัญญา
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              วิธีปฏิบัติ
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              ขั้นตอน
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              ติดต่อ
            </a>
          </div>
        </nav>
      </header>

      {/* 2. Hero Section (ส่วนแบนเนอร์ด้านบน) */}
      <header className="relative px-6 py-20 text-center bg-gradient-to-b from-blue-50 via-white to-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
            เปิดรับสมัคร ปีการศึกษา 2567
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            โครงการทุนการศึกษาเพื่อการทำงาน
            <br />
            <span className="text-blue-700">มหาวิทยาลัยสวนดุสิต</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            สร้างทักษะ ประสบการณ์ และรายได้ กับ โครงการสวนดุสิตเสริมโอกาส (75
            ชั่วโมง)
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/application" className="px-8 py-3 font-semibold text-white bg-blue-700 rounded-full shadow-md hover:bg-blue-800 transition">
              สมัครเข้าร่วมโครงการ
            </Link>
            <button className="px-8 py-3 font-semibold text-blue-700 bg-white border border-blue-200 rounded-full shadow-sm hover:bg-blue-50 transition">
              ดูรายละเอียดโครงการ
            </button>
          </div>
        </div>
      </header>

      {/* 3. Main Content (รายละเอียดโครงการ) */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* หัวข้อ section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            โครงการสวนดุสิตเสริมโอกาส (75 ชั่วโมง)
          </h2>
          <p className="text-gray-500 mt-2">
            รูปแบบการปฏิบัติงานเพื่อสนับสนุนการเรียนรู้ ทักษะวิชาชีพ
            และการทำงานร่วมกับผู้อื่น
          </p>
        </div>

        {/* Grid Card รายละเอียด */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card ซ้าย: โครงการนี้คืออะไร */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              โครงการนี้คืออะไร?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              โครงการเปิดโอกาสให้นักศึกษาระดับปริญญาตรี
              ได้เข้ามามีส่วนร่วมในการปฏิบัติงานกับหน่วยงานต่างๆ
              ภายในมหาวิทยาลัย เพื่อเสริมสร้างประสบการณ์ตรงจากการทำงานจริง
              เรียนรู้ความรับผิดชอบ และมีรายได้ระหว่างเรียน
              ซึ่งจะเป็นประโยชน์ต่อการพัฒนาศักยภาพของนักศึกษาเตรียมความพร้อมสู่การทำงานในอนาคต
            </p>
            <div className="flex gap-4">
              <div className="bg-blue-50 p-4 rounded-xl flex-1">
                <div className="font-semibold text-blue-700">ระยะเวลา</div>
                <div className="text-sm text-gray-600">
                  75 ชั่วโมง/ภาคการศึกษา
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl flex-1">
                <div className="font-semibold text-blue-700">
                  สถานที่ปฏิบัติงาน
                </div>
                <div className="text-sm text-gray-600">
                  หน่วยงานภายในมหาวิทยาลัย
                </div>
              </div>
            </div>
          </div>

          {/* Card ขวา: จำนวนเงิน */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
            <div className="text-gray-500 font-medium mb-2">ทุนการศึกษา</div>
            <div className="text-5xl font-bold text-blue-700 mb-2">3,000 ฿</div>
            <div className="text-sm text-gray-500">
              ต่อภาคการศึกษา (เหมาจ่าย)
            </div>
            <hr className="w-full my-6 border-gray-100" />
            <ul className="text-sm text-left w-full space-y-3 text-gray-600">
              <li className="flex justify-between">
                <span>ค่าตอบแทนรายชั่วโมง</span> <span>40 ฿ / ชั่วโมง</span>
              </li>
              <li className="flex justify-between">
                <span>จำนวนชั่วโมงสูงสุด</span> <span>75 ชั่วโมง</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Section เจตนารมณ์ (ข้อความ + รูปภาพ) */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              เจตนารมณ์ในการสนับสนุนการศึกษา
            </h3>
            <p className="text-gray-600 leading-relaxed">
              มหาวิทยาลัยมุ่งเน้นการมอบโอกาสให้นักศึกษาได้พัฒนาตนเองแบบองค์รวม
              นอกเหนือจากการเรียนในห้องเรียน การทำงานจริงจะช่วยหล่อหลอมทักษะ
              Soft Skills ที่จำเป็น เช่น การสื่อสาร การแก้ปัญหา
              และการทำงานเป็นทีม
            </p>
          </div>
          <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-xl overflow-hidden">
            {/* ใส่รูปภาพสถานที่จริงตรงนี้ */}
            <img
              src="/api/placeholder/400/300"
              alt="SDU Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 5. Section ขั้นตอนการสมัคร */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            เริ่มต้นก้าวสำคัญสู่อนาคตของคุณวันนี้
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                step: 1,
                title: "ตรวจสอบคุณสมบัติ",
                desc: "อ่านรายละเอียดและเงื่อนไขของโครงการ",
              },
              {
                step: 2,
                title: "เตรียมเอกสาร",
                desc: "เตรียมบัตรนักศึกษาและเอกสารที่เกี่ยวข้อง",
              },
              {
                step: 3,
                title: "กรอกใบสมัครออนไลน์",
                desc: "ผ่านระบบรับสมัครของมหาวิทยาลัย",
              },
              {
                step: 4,
                title: "รอรับการติดต่อกลับ",
                desc: "หน่วยงานจะติดต่อกลับเพื่อนัดหมายสัมภาษณ์",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 6. Footer (ติดต่อสอบถาม) */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-800 mb-4">
              ติดต่อสอบถามข้อมูลเพิ่มเติม
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              กองพัฒนานักศึกษา มหาวิทยาลัยสวนดุสิต
            </p>
            <p className="text-sm text-gray-600">โทร: 02-244-XXXX</p>
            <p className="text-sm text-gray-600">
              อีเมล: studentaffairs@dusit.ac.th
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl flex items-center justify-between">
            <div>
              <div className="font-bold text-gray-800">
                ศูนย์บริการข้อมูลนักศึกษา (SDU Help Desk)
              </div>
              <div className="text-sm text-gray-500 mt-1">
                ให้บริการวันจันทร์ - ศุกร์ 08:30 น. - 16:30 น.
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm font-medium">
              ติดต่อ Help Desk
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
