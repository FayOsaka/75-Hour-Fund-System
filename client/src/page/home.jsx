import { Link } from "react-router-dom";
import React, { useState } from "react";
import logoSDU from "../assets/logoSDU.jpg";
import hour from "../assets/hour.jpg";

export default function ScholarshipPage() {
  // State สำหรับควบคุมการสลับโครงการ: "75h" (โครงการ 75 ชม.) หรือ "laor" (โครงการพาน้องขึ้นห้องเรียน)
  const [activeProject, setActiveProject] = useState("75h");

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* เพิ่ม Style เพื่อให้การคลิกเลื่อนหน้าเว็บเป็นแบบนุ่มนวล (Smooth Scrolling) */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* *********************************************************************
                                  Navbar (ส่วนหัว)
      ************************************************************************/}
      <header className="w-full flex flex-col font-sans">
        {/* 1. Top Banner (แถบประกาศด้านบน) */}
        <div className={`py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm transition-colors duration-300 ${activeProject === "laor" ? "bg-[#faf5ff]" : "bg-[#f4f9ff]"}`}>
          {/* ป้ายกำกับ (Badge) */}
          <div className={`px-3 py-1 rounded-full flex items-center gap-2 font-medium ${activeProject === "laor" ? "bg-[#f3e8ff] text-purple-600" : "bg-[#e1effe] text-blue-600"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${activeProject === "laor" ? "bg-purple-500" : "bg-blue-500"}`}></span>
            เปิดรับสมัครภาคการศึกษาใหม่
          </div>

          {/* ข้อความและลิงก์ */}
          <div className="flex flex-wrap justify-center gap-2 text-gray-600">
            <span>
              {activeProject === "75h"
                ? "ปลดล็อกโอกาสและศักยภาพนักศึกษาสวนดุสิต ด้วยทุนเสริมโอกาส 75 ชม. และพาน้องขึ้นห้องเรียน"
                : "สร้างรอยยิ้ม ความปลอดภัย และจิตสาธารณะ กับ โครงการพาน้องละอออุทิศขึ้นห้องเรียน"}
            </span>
            <a
              href="#section-overview"
              className={`underline transition ${activeProject === "laor" ? "text-purple-500 hover:text-purple-700" : "text-blue-500 hover:text-blue-700"}`}
            >
              ดูรายละเอียดและสมัครวันนี้
            </a>
          </div>
        </div>

        {/* 2. Main Navigation (แถบนำทางหลัก) */}
        <nav className="flex items-center justify-between px-6 lg:px-12 py-4 bg-white border-b border-gray-100 shadow-sm">
          {/* โลโก้และชื่อหน่วยงาน (ด้านซ้าย) */}
          <div className="flex items-center gap-4">
            <img
              src={logoSDU}
              alt="SDU Logo"
              className="h-10 w-auto object-contain"
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
            <a href="#section-overview" className={`hover:text-${activeProject === "laor" ? "purple" : "blue"}-600 transition`}>
              โครงงาน
            </a>
            <a href="#section-background" className={`hover:text-${activeProject === "laor" ? "purple" : "blue"}-600 transition`}>
              ที่มา
            </a>
            <a href="#section-criteria" className={`hover:text-${activeProject === "laor" ? "purple" : "blue"}-600 transition`}>
              เกณฑ์&สัญญา
            </a>
            <a href="#section-directive" className={`hover:text-${activeProject === "laor" ? "purple" : "blue"}-600 transition`}>
              วิธีปฏิบัติ
            </a>
            <a href="#section-steps" className={`hover:text-${activeProject === "laor" ? "purple" : "blue"}-600 transition`}>
              ขั้นตอน
            </a>
            <a href="#section-contact" className={`hover:text-${activeProject === "laor" ? "purple" : "blue"}-600 transition`}>
              ติดต่อ
            </a>
          </div>
        </nav>
      </header>

      {/* *********************************************************************
                            Hero Section (ส่วนแบนเนอร์ด้านบน)
      ************************************************************************/}
      <header className={`relative w-full px-6 py-20 text-center overflow-hidden flex flex-col items-center justify-center min-h-[650px] font-sans transition-colors duration-500 ${activeProject === "laor" ? "bg-[#faf5ff]" : "bg-[#f4f7fb]"}`}>
        {/* พื้นหลังแสงสีแบบนุ่มนวล (Glow Effect) ซ้าย-ขวา */}
        <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] opacity-70 pointer-events-none ${activeProject === "laor" ? "bg-purple-100" : "bg-blue-100"}`}></div>
        <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] opacity-70 pointer-events-none ${activeProject === "laor" ? "bg-purple-50" : "bg-blue-50"}`}></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* 1. ปุ่มสลับโครงการด้านบน (Toggle Badge) */}
          <div className="flex items-center bg-white/70 backdrop-blur-sm p-1.5 rounded-full mb-12 shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveProject("75h")}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${
                activeProject === "75h"
                  ? "bg-[#78b3ea] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 bg-transparent"
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${activeProject === "75h" ? "bg-white" : "bg-gray-300"}`}></div>
              โครงการ 75 ชม. (สวนดุสิตเสริมโอกาส)
            </button>
            <button
              onClick={() => setActiveProject("laor")}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all ${
                activeProject === "laor"
                  ? "bg-[#a855f7] text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 bg-transparent"
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${activeProject === "laor" ? "bg-white" : "bg-gray-300"}`}></div>
              โครงการพาน้องขึ้นห้องเรียน (ละอออุทิศ)
            </button>
          </div>

          {/* 2. หัวข้อหลัก (Title & Subtitle) */}
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#1a2542] mb-6 leading-tight tracking-tight">
            โครงการทุนการศึกษาเพื่อการทำงาน
            <br />
            มหาวิทยาลัยสวนดุสิต
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 font-medium">
            {activeProject === "75h" ? (
              <>สร้างโอกาสก้าวสู่อนาคต กับ <span className="text-[#64a5e8]">โครงการสวนดุสิตเสริมโอกาส (75 ชั่วโมง)</span></>
            ) : (
              <>สร้างรอยยิ้ม ความปลอดภัย และจิตสาธารณะ กับ <span className="text-[#a855f7]">โครงการพาน้องละอออุทิศขึ้นห้องเรียน</span></>
            )}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/application" className={`px-8 py-3 font-semibold text-white rounded-full shadow-md transition ${activeProject === "laor" ? "bg-purple-600 hover:bg-purple-700" : "bg-blue-700 hover:bg-blue-800"}`}>
              สมัครเข้าร่วมโครงการ
            </Link>
            <button className={`px-8 py-3 font-semibold bg-white border rounded-full shadow-sm transition ${activeProject === "laor" ? "text-purple-600 border-purple-200 hover:bg-purple-50" : "text-blue-700 border-blue-200 hover:bg-blue-50"}`}>
              ดูรายละเอียดโครงการ
            </button>
          </div>
        </div>
      </header>

      {/* *********************************************************************
                            Main Content (รายละเอียดโครงการ)
      ************************************************************************ */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* หัวข้อ section: โครงงาน */}
        <div id="section-overview" className="scroll-mt-12">
          <div className="flex flex-col items-start font-sans">
            {/* ป้ายกำกับ (Badge) */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full text-sm font-medium ${activeProject === "laor" ? "bg-purple-50 text-purple-600" : "bg-[#def2fb] text-[#5cb5e5]"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              รายละเอียดโครงการฉบับสมบูรณ์
            </div>

            {/* หัวข้อหลัก */}
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#141b2d] tracking-tight mb-3">
              {activeProject === "75h" ? "โครงการสวนดุสิตเสริมโอกาส (75 ชั่วโมง)" : "โครงการรับน้องขึ้นห้องเรียน (โรงเรียนสาธิตละอออุทิศ)"}
            </h2>

            {/* ข้อความอธิบาย */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-4xl">
              {activeProject === "75h"
                ? "ทุนการศึกษาเพื่อการทำงาน (Work-Study Program) พัฒนาประสบการณ์วิชาชีพ สร้างรายได้แบ่งเบาภาระครอบครัว"
                : "โครงการพี่เลี้ยงดูแลความปลอดภัยและความสะดวกในการรับ-ส่งนักเรียนตัวน้อยแห่งโรงเรียนสาธิตละอออุทิศ มสด."}
            </p>
          </div>

          {/* Grid Card รายละเอียด */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans mt-8">
            {/* Card ซ้าย: โครงงานนี้คืออะไร? */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              {/* Top Badges */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit ${activeProject === "laor" ? "bg-purple-50 text-purple-600" : "bg-[#f0f7ff] text-[#5cb5e5]"}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  หัวข้อที่ 1 : ภาพรวมและคำจำกัดความ
                </div>
                <div className="px-4 py-1.5 bg-gray-100 text-gray-500 rounded-full text-xs font-mono font-medium tracking-wide w-fit">
                  {activeProject === "75h" ? "PROJECT CODE: SDU-75H" : "PROJECT CODE: SDU-LAOR"}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#141b2d] tracking-tight">
                โครงงานนี้คืออะไร?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                {activeProject === "75h"
                  ? "โครงการทุนการศึกษาเพื่อการทำงาน (Work-Study Program) ของมหาวิทยาลัยสวนดุสิต เปิดโอกาสให้นักศึกษาได้พัฒนาทักษะวิชาชีพควบคู่กับการเรียน โดยเน้นการฝึกปฏิบัติงานจริงในหน่วยงาน สถาบัน สำนัก และศูนย์การศึกษาต่างๆ ภายใต้การกำกับดูแลของมหาวิทยาลัยสวนดุสิต ทำให้นักศึกษามีทักษะความพร้อมก่อนก้าวเข้าสู่ตลาดแรงงานจริงในอนาคต"
                  : "โครงการพี่เลี้ยงดูแลความปลอดภัยและความสะดวกในการรับ-ส่งนักเรียนตัวน้อยแห่งโรงเรียนสาธิตละอออุทิศ จากจุดรับส่งบริเวณประตูทางเข้าสู่ห้องเรียนอย่างอบอุ่นและปลอดภัย ช่วยส่งเสริมนักศึกษาด้านความรับผิดชอบ การตรงต่อเวลา และการมีจิตสาธารณะในการดูแลสังคม"}
              </p>

              <hr className="border-gray-100 mb-8" />

              {/* 3 Sub-cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
                {activeProject === "75h" ? (
                  <>
                    <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                      <div className="font-bold text-[#141b2d] text-sm mb-1">ประสบการณ์จริง</div>
                      <div className="text-xs text-gray-500">ปฏิบัติงานในหน่วยงานมหาลัย</div>
                    </div>
                    <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                      <div className="font-bold text-[#141b2d] text-sm mb-1">รายได้มั่นคง</div>
                      <div className="text-xs text-gray-500">3,000 บ./เดือน ตลอด 12 เดือน</div>
                    </div>
                    <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                      <div className="font-bold text-[#141b2d] text-sm mb-1">เวลาที่ยืดหยุ่น</div>
                      <div className="text-xs text-gray-500">จัดตารางงานตามเวลาว่างจากการเรียน</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                      <div className="font-bold text-[#141b2d] text-sm mb-1">ดูแลเด็กปฐมวัย</div>
                      <div className="text-xs text-gray-500">รร.สาธิตละอออุทิศ มสด.</div>
                    </div>
                    <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                      <div className="font-bold text-[#141b2d] text-sm mb-1">กะเช้าพิเศษ</div>
                      <div className="text-xs text-gray-500">06:00 น. - 08:00 น.</div>
                    </div>
                    <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                      <div className="font-bold text-[#141b2d] text-sm mb-1">จิตสาธารณะ</div>
                      <div className="text-xs text-gray-500">สร้างความอุ่นใจแก่ผู้ปกครอง</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Card ขวา: อัตราค่าตอบแทนหลัก */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-500 text-sm font-medium">
                  อัตราค่าตอบแทนหลัก
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ${activeProject === "laor" ? "text-purple-500" : "text-[#5cb5e5]"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className="mb-8">
                <div className="text-4xl md:text-5xl font-bold text-[#141b2d] tracking-tight mb-3">
                  {activeProject === "75h" ? "3,000 ฿" : "50 ฿ / ชม."}
                </div>
                <div className={`text-sm font-medium ${activeProject === "laor" ? "text-purple-500" : "text-[#5cb5e5]"}`}>
                  {activeProject === "75h" ? "ต่อเดือน (ปฏิบัติงานครบ 75 ชม.)" : "อัตราพิเศษยามเช้า (06:00 - 08:00 น.)"}
                </div>
              </div>

              <hr className="border-gray-100 mb-8" />

              <ul className="text-sm w-full space-y-5 text-gray-500 mt-auto">
                <li className="flex justify-between items-center">
                  <span>เกณฑ์ขั้นต่ำคำนวณราย ชม.</span>
                  <span className="font-bold text-gray-800">{activeProject === "75h" ? "40 ฿ / ชั่วโมง" : "เฉลี่ย 2,000 - 2,200 ฿"}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>ระยะเวลาการรับทุน</span>
                  <span className="font-bold text-gray-800">{activeProject === "75h" ? "12 เดือน / ปี" : "จันทร์ - ศุกร์"}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>รวมยอดทุนต่อปีสูงสุด</span>
                  <span className={`font-bold ${activeProject === "laor" ? "text-purple-500" : "text-[#5cb5e5]"}`}>{activeProject === "75h" ? "36,000 บาท" : "40 - 44 ชม. / เดือน"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Section เจตนารมณ์ (ที่มา) */}
        <div id="section-background" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-10 items-stretch font-sans scroll-mt-12">
          {/* ฝั่งซ้าย: เนื้อหา */}
          <div className="flex-1 flex flex-col">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit mb-6 ${activeProject === "laor" ? "bg-purple-50 text-purple-600" : "bg-[#f0f7ff] text-[#5cb5e5]"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              หัวข้อที่ 2 : ความเป็นมาและความสำคัญ
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#141b2d] mb-6 tracking-tight">
              เจตนารมณ์ในการจัดตั้งและการสนับสนุนนักศึกษา
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              {activeProject === "75h"
                ? "ทุนการศึกษาโครงการสวนดุสิตเสริมโอกาส (75 ชั่วโมง) ต้องการเปิดโอกาสให้นักศึกษาของมหาวิทยาลัยสวนดุสิต ที่กำลังศึกษาอยู่ ให้มีรายได้โดยต้องทำงานภายในหน่วยงานของมหาวิทยาลัยหรือศูนย์การศึกษาของมหาวิทยาลัย โดยทางมหาวิทยาลัยให้ค่าตอบแทนเป็นรายชั่วโมงตามหน้าที่ที่รับผิดชอบไม่น้อยกว่า 75 ชั่วโมงต่อเดือน"
                : "โครงการพาน้องขึ้นห้องเรียน โรงเรียนสาธิตละอออุทิศ มุ่งเน้นการสร้างเสริมจิตสาธารณะและความรับผิดชอบของนักศึกษามหาวิทยาลัยสวนดุสิต ในการช่วยเหลือดูแลความปลอดภัยให้น้องๆ ในช่วงเช้าก่อนเข้าเรียน"}
            </p>

            {/* Highlight Quote Box */}
            <div className="bg-[#f4f7fb] border border-[#e1ebf5] p-6 rounded-2xl text-gray-700 leading-relaxed text-base font-medium mt-auto">
              {activeProject === "75h"
                ? '"ซึ่งในปัจจุบันคือโครงการสวนดุสิตเสริมโอกาส การให้ทุนการศึกษาวิธีนี้จะช่วยฝึกให้นักศึกษารู้คุณค่าของเงินทุนที่ได้รับ มีความผูกพันกับมหาวิทยาลัยฯมากขึ้นและยังมีนิสัย “การให้” ตอบแทนผู้ที่ให้ความช่วยเหลือตนเมื่อมีโอกาสด้วย"'
                : '"สร้างรอยยิ้ม ความอบอุ่น และความปลอดภัย พร้อมฝึกฝนให้นักศึกษามีวินัย ตรงต่อเวลา และมีจิตอาสาในการดูแลสังคมรอบข้าง"'}
            </div>
          </div>

          {/* ฝั่งขวา: รูปภาพ */}
          <div className="w-full lg:w-[35%] min-h-[350px] lg:min-h-full relative rounded-2xl overflow-hidden shrink-0">
            <img
              src={hour}
              alt="SDU Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="text-white/90 text-xs font-bold tracking-[0.15em] uppercase">
                Philosophy of opportunity
              </span>
            </div>
          </div>
        </div>

        {/* 5. Section ขั้นตอนการสมัคร (เกณฑ์และสัญญา) */}
        <div id="section-criteria" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 font-sans scroll-mt-12">
          {/* ฝั่งซ้าย: เกณฑ์คุณสมบัติผู้มีสิทธิ์ยื่นขอทุน */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit mb-6 ${activeProject === "laor" ? "bg-purple-50 text-purple-600" : "bg-[#f0f7ff] text-[#5cb5e5]"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              หัวข้อที่ 3 : คุณสมบัติของผู้ขอทุน
            </div>

            <h3 className="text-2xl font-bold text-[#141b2d] tracking-tight mb-8">
              เกณฑ์คุณสมบัติผู้มีสิทธิ์ยื่นขอทุน
            </h3>

            <div className="space-y-4 mb-12 flex-1">
              {(activeProject === "75h" ? [
                { num: 1, title: "เป็นนักศึกษาของมหาวิทยาลัยสวนดุสิต", desc: "กำลังศึกษาอยู่ในระดับปริญญาตรี ทุกสาขาวิชา" },
                { num: 2, title: "มีผลการเรียนผ่านเกณฑ์ของมหาวิทยาลัย", desc: "มีผลการเรียนเฉลี่ยสะสมผ่านเกณฑ์ตามที่กำหนด" },
                { num: 3, title: "มีความประพฤติดีเหมาะสมกับการเป็นนักศึกษา", desc: "มีความประพฤติดีเหมาะสมกับการเป็นนักศึกษาของมหาวิทยาลัย" }
              ] : [
                { num: 1, title: "เป็นนักศึกษาของมหาวิทยาลัยสวนดุสิต", desc: "เปิดรับสมัครทุกสาขาวิชาและทุกชั้นปี" },
                { num: 2, title: "มีความตรงต่อเวลา ความรับผิดชอบสูง และตื่นเช้าได้", desc: "พร้อมเริ่มปฏิบัติหน้าที่ตั้งแต่เวลา 06:00 น. ตรง" },
                { num: 3, title: "มีจิตวิทยาและใจรักในการดูแลเด็กเล็ก", desc: "ยิ้มแย้มแจ่มใส มนุษยสัมพันธ์ดี ใจเย็นและมีสติในการสื่อสาร" },
                { num: 4, title: "มีความประพฤติเรียบร้อย", desc: "ปฏิบัติตามมาตรฐานความปลอดภัยและระเบียบของโรงเรียนสาธิตละอออุทิศอย่างเคร่งครัด" }
              ]).map((item) => (
                <div
                  key={item.num}
                  className="flex items-center gap-4 bg-[#f8fafc] border border-[#eef2f6] p-4 rounded-xl"
                >
                  <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-inner ${activeProject === "laor" ? "bg-purple-300" : "bg-[#bcdcf5]"}`}>
                    {item.num}
                  </div>
                  <div>
                    <div className="font-bold text-[#141b2d] text-[15px] mb-0.5">
                      {item.num}. {item.title}
                    </div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-100 mb-6" />
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-gray-500">ตรวจสอบคุณสมบัติผ่านระบบ SDU Portal</span>
              <span className={`font-medium ${activeProject === "laor" ? "text-purple-500" : "text-[#5cb5e5]"}`}>เกณฑ์เป็นไปตามประกาศ มสด.</span>
            </div>
          </div>

          {/* ฝั่งขวา: โครงสร้างค่าตอบแทนและการต่อสัญญา */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit mb-6 ${activeProject === "laor" ? "bg-purple-50 text-purple-600" : "bg-[#f0f7ff] text-[#5cb5e5]"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              หัวข้อที่ 4 : ค่าตอบแทนและเงื่อนไขการรับทุน
            </div>

            <h3 className="text-2xl font-bold text-[#141b2d] tracking-tight mb-8">
              โครงสร้างค่าตอบแทนและการต่อสัญญา
            </h3>

            <div className="space-y-4 mb-12 flex-1">
              {activeProject === "75h" ? (
                <>
                  <div className="bg-[#f8fafc] border border-[#eef2f6] p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#141b2d]">นักศึกษาที่ทำงานครบ 75 ชั่วโมง/เดือน หรือมากกว่า</div>
                      <span className="bg-[#e1effe] text-[#5cb5e5] text-[11px] font-bold px-3 py-1 rounded-full">เกณฑ์เต็ม</span>
                    </div>
                    <div className="text-sm text-gray-600 pl-7">จะได้รับค่าตอบแทน <span className="font-bold text-[#141b2d] text-base">เดือนละ 3,000 บาท</span></div>
                  </div>
                  <div className="bg-[#f8fafc] border border-[#eef2f6] p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#141b2d]">หากทำงานไม่ครบ 75 ชม. แต่มากกว่า 35 ชั่วโมง / เดือน</div>
                      <span className="text-gray-500 text-[11px] font-bold">รายชั่วโมง</span>
                    </div>
                    <div className="text-sm text-gray-600 pl-7">จะได้รับค่าตอบแทนเป็นรายชั่วโมงๆ ละ <span className="font-bold text-[#141b2d] text-base">40 บาท</span></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#f8fafc] border border-[#eef2f6] p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#141b2d]">อัตราค่าตอบแทนพิเศษกะเช้า</div>
                      <span className="bg-purple-100 text-purple-600 text-[11px] font-bold px-3 py-1 rounded-full">Special Rate</span>
                    </div>
                    <div className="text-sm text-gray-600">ได้รับค่าตอบแทนในอัตราพิเศษสูงสุด <span className="font-bold text-[#141b2d] text-base">50 บาท / ชั่วโมง</span> (มากกว่าเกณฑ์ปกติ)</div>
                  </div>
                  <div className="bg-[#f8fafc] border border-[#eef2f6] p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#141b2d]">รอบปฏิบัติงานและรายได้เฉลี่ย</div>
                      <span className="text-gray-500 text-[11px] font-bold">40-44 ชม.</span>
                    </div>
                    <div className="text-sm text-gray-600">ปฏิบัติงานทุกวันจันทร์ - ศุกร์ วันละ 2 ชั่วโมง (06:00 น. - 08:00 น.) รวมประมาณ 40-44 ชั่วโมงต่อเดือน รายได้เฉลี่ย <span className="font-bold text-[#141b2d] text-base">2,000 - 2,200 บาท / เดือน</span></div>
                  </div>
                </>
              )}

              <div className="bg-[#f8fafc] border border-[#eef2f6] p-5 rounded-xl">
                <div className="text-[13px] text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#141b2d]">เงื่อนไขการเบิกจ่าย: </span>
                  {activeProject === "75h"
                    ? "ทุนการศึกษานี้ เป็นประเภททุนเฉพาะปี นักศึกษาที่ได้รับทุนแล้วถ้าประสงค์จะขอรับทุนในปีการศึกษาต่อไป จะต้องยื่นเรื่องขอใหม่ทุกปีและต้องผ่านการพิจารณาจากคณะกรรมการพิจารณาทุนการศึกษาของมหาวิทยาลัย"
                    : "สามารถเบิกจ่ายได้ตามรอบบัญชีของมหาวิทยาลัยสวนดุสิตโดยตรงหลังผ่านการตรวจสอบใบบันทึกเวลา"}
                </div>
              </div>
            </div>

            <hr className="border-gray-100 mb-6" />
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-gray-500">จ่ายเงินผ่านระบบบัญชีทุกรอบสิ้นเดือน</span>
              <span className={`font-medium ${activeProject === "laor" ? "text-purple-500" : "text-[#5cb5e5]"}`}>ประเมินผลปีต่อปี</span>
            </div>
          </div>
        </div>

        {/* 6. Section ระเบียบการปฏิบัติ */}
        <div id="section-directive" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 font-sans mt-12 scroll-mt-12">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit ${activeProject === "laor" ? "bg-purple-50 text-purple-600" : "bg-[#f0f7ff] text-[#5cb5e5]"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              หัวข้อที่ 5 : หลักเกณฑ์และระเบียบการทำงาน
            </div>
            <div className="text-[11px] text-gray-500 font-mono font-bold tracking-widest uppercase">
              OPERATIONAL DIRECTIVE
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#141b2d] tracking-tight mb-10">
            ระเบียบปฏิบัติและกระบวนการส่งบัญชีเวลาปฏิบัติงาน
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeProject === "75h" ? [
              { num: "01", title: "สถานที่ปฏิบัติงาน", desc: "ทำงานในหน่วยงานของมหาวิทยาลัยหรือศูนย์การศึกษาของมหาวิทยาลัยที่รับผิดชอบไม่น้อยกว่า 75 ชั่วโมง / เดือน", tag: "≥ 75 Hours/Mo", color: "blue" },
              { num: "02", title: "เกณฑ์ชั่วโมงขั้นต่ำ", desc: "กรณีที่ทำงานไม่ถึง 75 ชั่วโมง / เดือน แต่ไม่น้อยกว่า 35 ชั่วโมง/เดือน ให้คิดค่าตอบแทนเป็นรายชั่วโมง (ชั่วโมงละ 40 บาท)", tag: "35 - 74 Hours", color: "blue" },
              { num: "03", title: "เกณฑ์ที่ไม่ได้รับค่าตอบแทน", desc: "ถ้าปฏิบัติงานไม่ถึงครึ่งหนึ่งหรือน้อยกว่า 35 ชั่วโมง / เดือน จะไม่ได้ค่าตอบแทนในเดือนนั้น", tag: "< 35 Hours = 0 ฿", color: "red" },
              { num: "04", title: "การส่งบัญชีเวลา", desc: "นักศึกษาต้องเขียน “บัญชีเวลาปฏิบัติงานของนักศึกษา 75 ชั่วโมง” ส่งที่ศูนย์สนเทศฯ ทุกวันที่ 30 ของเดือน", tag: "ส่งทุกวันที่ 30", color: "blue" }
            ] : [
              { num: "01", title: "ยืนประจำจุดรับน้อง", desc: "ยืนประจำจุดรอรับน้องนักเรียนตั้งแต่เวลา 06:00 น. ถึง 08:00 น. ณ จุดรับส่งที่กำหนดอย่างพร้อมเพรียง", tag: "06:00 - 08:00 น.", color: "purple" },
              { num: "02", title: "ดูแลส่งมอบถึงห้องเรียน", desc: "พาเด็กนักเรียนเดินขึ้นห้องเรียนอย่างปลอดภัย ตรวจสอบความเรียบร้อย และส่งมอบให้นิตรอภิบาล/ครูประจำชั้น", tag: "ส่งมอบครูประจำชั้น", color: "purple" },
              { num: "03", title: "ตรวจเช็กการลงเวลาเช้า", desc: "ปฏิบัติตามมาตรการความปลอดภัยและตรวจเช็กการลงเวลาปฏิบัติงานผ่านระบบทุกเช้าก่อนเข้าปฏิบัติหน้าที่", tag: "Check-in ประจำวัน", color: "purple" },
              { num: "04", title: "รับรองลายมือชื่อครูเวร", desc: "บันทึกและส่งใบบันทึกเวลาการปฏิบัติงานพร้อมรับการลงนามรับรองจากครูเวรประจำวันของโรงเรียนสาธิตละอออุทิศ", tag: "ลงนามครูเวรประจำวัน", color: "purple" }
            ]).map((card, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-[#eef2f6] p-6 rounded-2xl flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-6 ${
                  card.color === "red" ? "bg-[#ffeceb] text-[#ff8080]" : card.color === "purple" ? "bg-purple-100 text-purple-600" : "bg-[#e1effe] text-[#5cb5e5]"
                }`}>
                  {card.num}
                </div>
                <div className="font-bold text-[#141b2d] text-[17px] mb-3">{card.title}</div>
                <div className="text-[14px] text-gray-600 leading-relaxed flex-1">{card.desc}</div>
                <div className={`text-[11px] font-mono font-bold mt-6 ${card.color === "red" ? "text-[#ff8080]" : card.color === "purple" ? "text-purple-600" : "text-[#5cb5e5]"}`}>
                  {card.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Section สมัคร 75 ชม. (หรือโครงการ) */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 font-sans mt-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${activeProject === "laor" ? "bg-purple-100 text-purple-600" : "bg-[#e6f0fe] text-[#1a5eb8]"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11l2 2 4-4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#141b2d] mb-1">
                พร้อมก้าวสู่โอกาสใหม่กับเราหรือยัง?
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                เลือกสมัครเข้าร่วมโครงการ หรือเข้าสู่ระบบบันทึกเวลาปฏิบัติงานประจำวัน
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
            <Link to="/application" className={`flex items-center justify-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white rounded-full shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap ${activeProject === "laor" ? "bg-gradient-to-r from-purple-700 to-purple-500 shadow-purple-900/20" : "bg-gradient-to-r from-[#003d7c] to-[#0070bc] shadow-blue-900/20"}`}>
              สมัครเข้าร่วมโครงการ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            <button className="flex items-center justify-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-[#141b2d] bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#141b2d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              เข้าสู่ระบบเพื่อกรอกลงเวลา
            </button>
          </div>
        </div>
      </main>

      {/* *********************************************************************
                            ตารางเปรียบเทียบการทำงาน
      ************************************************************************/}
      <div className="w-full font-sans py-12 bg-gradient-to-b from-[#f4f7fb]/60 to-transparent">
        <div className="text-center mb-10 px-4">
          <div className="text-[#5cb5e5] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            Comparative Framework
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#141b2d] leading-tight mb-4">
            ตารางเปรียบเทียบหลักเกณฑ์และ
            <br className="hidden sm:block" />
            เงื่อนไข
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            วิเคราะห์ความเหมาะสมและเลือกเส้นทางการทำงานเสริมสร้างประสบการณ์ที่ตอบโจทย์ไลฟ์สไตล์การเรียนของคุณมากที่สุด
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-6 px-8 text-gray-400 font-medium text-[13px] w-[20%]">
                      เกณฑ์การพิจารณา
                    </th>
                    <th className="py-6 px-8 text-[#5cb5e5] font-bold text-[20px] w-[40%]">
                      โครงการสวนดุสิตเสริมโอกาส (75 ชม.)
                    </th>
                    <th className="py-6 px-8 text-[#c4a4f9] font-bold text-[20px] w-[40%]">
                      โครงการพาน้องขึ้นห้องเรียน (ละอออุทิศ)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[15px]">
                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">หน่วยงานที่ปฏิบัติงาน</td>
                    <td className="py-6 px-8 text-gray-600">หน่วยงานภายในมหาวิทยาลัยสวนดุสิต และศูนย์การศึกษา</td>
                    <td className="py-6 px-8 text-gray-600">โรงเรียนสาธิตละอออุทิศ (บริเวณประตูทางเข้าและอาคารเรียน)</td>
                  </tr>
                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">ชั่วโมงปฏิบัติงานต่อเดือน</td>
                    <td className="py-6 px-8 text-gray-600">ไม่น้อยกว่า 75 ชั่วโมง / เดือน (จัดสรรตามเวลาว่าง)</td>
                    <td className="py-6 px-8 text-gray-600">ประมาณ 40 - 44 ชั่วโมง / เดือน (วันละ 2 ชั่วโมง ช่วงเช้า)</td>
                  </tr>
                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">ช่วงเวลาปฏิบัติงาน</td>
                    <td className="py-6 px-8 text-gray-600">เวลาที่นักศึกษาว่างจากการเรียน (จันทร์ - เสาร์)</td>
                    <td className="py-6 px-8 text-gray-600">ช่วงเช้าตรู่ 06:00 น. - 08:00 น. (จันทร์ - ศุกร์)</td>
                  </tr>
                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">อัตราค่าตอบแทน</td>
                    <td className="py-6 px-8 text-gray-600">
                      <span className="font-bold text-[#5cb5e5]">3,000 บาท/เดือน</span> (36,000 บ./ปี)<br />
                      <span className="text-[14px]">เศษชั่วโมง (35-74 ชม.) คิด 40 บ./ชม.</span>
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      <span className="font-bold text-[#c4a4f9]">50 บาท/ชั่วโมง (อัตราพิเศษ)</span><br />
                      <span className="text-[14px]">เฉลี่ย 2,000 - 2,200 บาท/เดือน</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">คุณสมบัติเฉพาะที่ต้องการ</td>
                    <td className="py-6 px-8 text-gray-600">นักศึกษา มสด. ผลการเรียนผ่านเกณฑ์ มีจิตอาสา</td>
                    <td className="py-6 px-8 text-gray-600">ตรงต่อเวลา ตื่นเช้าได้ มีจิตวิทยาและใจรักในการดูแลเด็กปฐมวัย</td>
                  </tr>
                  <tr className="transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">การส่งบัญชีบันทึกเวลา</td>
                    <td className="py-6 px-8 text-gray-600">ส่งที่ศูนย์สนเทศฯ ทุกวันที่ 30 ของเดือน</td>
                    <td className="py-6 px-8 text-gray-600">สแกนลงเวลาผ่านระบบและส่งใบบันทึกรับรองจากครูเวรประจำวัน</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* *********************************************************************
                            ขั้นตอนการสมัครโครงการ
      ************************************************************************/}
      <div id="section-steps" className="max-w-6xl mx-auto px-6 py-12 space-y-12 scroll-mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e1effe] text-[#1a5eb8] rounded-full text-sm font-medium mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          ขั้นตอนการสมัครเข้าร่วมโครงการ
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#141b2d] mb-4 tracking-tight">
          เริ่มต้นก้าวสำคัญสู่อนาคตของคุณวันนี้
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-10 max-w-4xl leading-relaxed">
          ขั้นตอนและกระบวนการตั้งแต่การยื่นใบสมัครออนไลน์ การปฏิบัติงานจริง
          จนถึงการส่งบัญชีบันทึกเวลาเพื่อรับการอนุมัติเบิกจ่ายค่าตอบแทนอย่างเป็นระบบและโปร่งใส
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex gap-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
            <div className="w-10 h-10 rounded-full bg-[#e1effe] text-[#1a5eb8] flex items-center justify-center font-bold text-lg shrink-0">1</div>
            <div>
              <h4 className="font-bold text-[#141b2d] text-[15px] mb-1.5">ขั้นตอนที่ 1 : กรอกแบบฟอร์มและเตรียมเอกสาร</h4>
              <p className="text-sm text-gray-500 leading-relaxed">ทำการกรอกแบบฟอร์มสมัครออนไลน์และดาวน์โหลดเอกสาร พร้อมแนบรูปถ่ายนักศึกษาและหลักฐานการศึกษาที่เกี่ยวข้องให้ครบถ้วน</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex gap-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
            <div className="w-10 h-10 rounded-full bg-[#e1effe] text-[#1a5eb8] flex items-center justify-center font-bold text-lg shrink-0">2</div>
            <div>
              <h4 className="font-bold text-[#141b2d] text-[15px] mb-1.5">ขั้นตอนที่ 2 : ยื่นเอกสารและตรวจสอบสิทธิ์</h4>
              <p className="text-sm text-gray-500 leading-relaxed">ยื่นเอกสารต่อเจ้าหน้าที่ผู้รับผิดชอบ เพื่อตรวจสอบคุณสมบัติและบันทึกรายชื่อเข้าสู่ระบบ โดยสามารถเริ่มปฏิบัติงานได้ทันทีหลังผ่านการอนุมัติ</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex gap-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
            <div className="w-10 h-10 rounded-full bg-[#e1effe] text-[#1a5eb8] flex items-center justify-center font-bold text-lg shrink-0">3</div>
            <div>
              <h4 className="font-bold text-[#141b2d] text-[15px] mb-1.5">ขั้นตอนที่ 3 : บันทึกเวลาปฏิบัติงานรายวัน</h4>
              <p className="text-sm text-gray-500 leading-relaxed">เข้าสู่ระบบออนไลน์ด้วย SDU Account (รหัสนักศึกษา) เพื่อลงเวลาปฏิบัติงานและบันทึกรายละเอียดงานที่ทำในแต่ละวันที่เข้าปฏิบัติงาน</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex gap-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
            <div className="w-10 h-10 rounded-full bg-[#e1effe] text-[#1a5eb8] flex items-center justify-center font-bold text-lg shrink-0">4</div>
            <div>
              <h4 className="font-bold text-[#141b2d] text-[15px] mb-1.5">ขั้นตอนที่ 4 : สรุปส่งเอกสารและรับค่าตอบแทน</h4>
              <p className="text-sm text-gray-500 leading-relaxed">เมื่อครบสิ้นเดือน พิมพ์ใบบันทึกการปฏิบัติงานให้หัวหน้าหน่วยงานลงนามรับรอง แล้วส่งเอกสารเบิกจ่ายตามรอบเพื่อรอรับเงินค่าตอบแทนเข้าบัญชี</p>
            </div>
          </div>
        </div>
      </div>

      {/* *********************************************************************
                            ติดต่อสอบถามข้อมูลเพิ่มเติม
      ************************************************************************ */}
      <div id="section-contact" className="bg-white max-w-6xl mx-auto px-6 py-12 space-y-12 rounded-[2rem] shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col lg:flex-row gap-12 font-sans mt-12 scroll-mt-8">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-[#5cb5e5] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">SUPPORT & INQUIRIES</div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#141b2d] mb-4 tracking-tight">ติดต่อสอบถามข้อมูลเพิ่มเติม</h3>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-xl">
            หากมีข้อสงสัยเกี่ยวกับเกณฑ์การรับทุน การคัดเลือก การคำนวณชั่วโมงปฏิบัติงาน หรือการเบิกจ่ายค่าตอบแทน สามารถติดต่อเจ้าหน้าที่งานแนะแนวและทุนการศึกษาได้ทุกวันทำการ
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5cb5e5] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-gray-600 text-[15px] leading-relaxed">ศูนย์สนเทศแนะแนวการศึกษาและอาชีพ กองพัฒนานักศึกษา มหาวิทยาลัยสวนดุสิต</span>
            </div>

            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5cb5e5] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <a href="http://guidance.dusit.ac.th/WEB" target="_blank" rel="noopener noreferrer" className="text-[#5cb5e5] font-medium text-[15px] hover:underline">
                http://guidance.dusit.ac.th/WEB
              </a>
            </div>

            <div className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5cb5e5] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-600 text-[15px]">02-244-5198 และ 02-244-5199</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] bg-[#f8fafc] border border-[#eef2f6] p-8 md:p-10 rounded-[2rem] flex flex-col items-center justify-center text-center">
          <div className="mb-5 text-[#141b2d]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 9.879a3 3 0 114.242 0c-.81.81-1.121 1.488-1.121 2.121v.5" />
              <circle cx="12" cy="15" r="0.5" fill="currentColor" />
            </svg>
          </div>
          <h4 className="font-bold text-[#141b2d] text-xl mb-3">ศูนย์บริการข้อมูลนักศึกษา (SDU Help Desk)</h4>
          <p className="text-gray-500 text-[13px] mb-8">เปิดให้บริการทุกวันจันทร์ - ศุกร์ เวลา 08:30 น. - 16:30 น.</p>
          <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-[14px] font-bold text-[#141b2d] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm w-fit mx-auto">
            เข้าสู่เว็บไซต์หลักมหาวิทยาลัยสวนดุสิต
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* *********************************************************************
                                  Footer Section
      ************************************************************************ */}
      <footer className="bg-white border-t border-gray-100 mt-16 py-10 font-sans">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg transition-transform hover:scale-105 cursor-default ${activeProject === "laor" ? "bg-gradient-to-br from-purple-600 to-purple-900 shadow-purple-900/20" : "bg-gradient-to-br from-[#1a5eb8] to-[#0d3b6f] shadow-blue-900/20"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
              </svg>
            </div>
            <div className="text-gray-500 text-sm leading-relaxed">
              <span className="font-semibold text-gray-800">© 2026 Suan Dusit University.</span>
              <br className="hidden md:block" /> กองพัฒนานักศึกษา มหาวิทยาลัยสวนดุสิต
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-500 font-medium">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
              <a href="#" className="relative group hover:text-[#1a5eb8] transition-colors duration-300">
                ข้อกำหนดและเงื่อนไข
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#1a5eb8] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group hover:text-[#1a5eb8] transition-colors duration-300">
                นโยบายความเป็นส่วนตัว
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#1a5eb8] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative group hover:text-[#1a5eb8] transition-colors duration-300">
                คู่มือการใช้งานระบบ
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#1a5eb8] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}