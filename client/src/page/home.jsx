import React from "react";
import logoSDU from "../assets/logoSDU.jpg";
import hour from "../assets/hour.jpg";

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* *********************************************************************
                                    Navbar (ส่วนหัว)
      *************************************************************************/}
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

      {/* *********************************************************************
                            Hero Section (ส่วนแบนเนอร์ด้านบน)
      *************************************************************************/}
      <header className="relative w-full px-6 py-20 text-center bg-[#f4f7fb] overflow-hidden flex flex-col items-center justify-center min-h-[650px] font-sans">
        {/* พื้นหลังแสงสีฟ้าแบบนุ่มนวล (Glow Effect) ซ้าย-ขวา */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* 1. ปุ่มสลับโครงการด้านบน (Toggle Badge) */}
          <div className="flex items-center bg-white/70 backdrop-blur-sm p-1.5 rounded-full mb-12 shadow-sm border border-gray-100">
            <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#78b3ea] rounded-full shadow-sm transition">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              โครงการ 75 ชม. (สวนดุสิตเสริมโอกาส)
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
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
            สร้างโอกาสก้าวสู่อนาคต กับ{" "}
            <span className="text-[#64a5e8]">
              โครงการสวนดุสิตเสริมโอกาส (75 ชั่วโมง)
            </span>
          </p>

          {/* 3. ปุ่มกด (Action Buttons) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            {/* ปุ่มสมัคร */}
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#0d3b6f] to-[#005fb8] rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
              สมัครเข้าร่วมโครงการ
            </button>

            {/* ปุ่มเข้าสู่ระบบ */}
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-all">
              เข้าสู่ระบบเพื่อกรอกลงเวลา
            </button>
          </div>

          {/* 4. ข้อความเครดิตด้านล่าง (Footer text) */}
          <p className="text-xs text-gray-400 font-light mb-16">
            ขับเคลื่อนโดย กองพัฒนานักศึกษา มหาวิทยาลัยสวนดุสิต • รอบปีการศึกษา
            2568
          </p>

          {/* 5. จุดเลื่อนสไลด์ (Pagination/Carousel Indicators) */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-gray-500 hover:text-gray-800 transition">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2 items-center">
              <div className="w-6 h-2 bg-[#78b3ea] rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>

            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-gray-500 hover:text-gray-800 transition">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* *********************************************************************
                            Main Content (รายละเอียดโครงการ)
      *************************************************************************/}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* หัวข้อ section */}
        <div className="flex flex-col items-start font-sans">
          {/* ป้ายกำกับ (Badge) */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-[#def2fb] text-[#5cb5e5] rounded-full text-sm font-medium">
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
            โครงการสวนดุสิตเสริมโอกาส (75 ชั่วโมง)
          </h2>

          {/* ข้อความอธิบาย */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-4xl">
            ทุนการศึกษาเพื่อการทำงาน (Work-Study Program) พัฒนาประสบการณ์วิชาชีพ
            สร้างรายได้แบ่งเบาภาระครอบครัว
          </p>
        </div>

        {/* Grid Card รายละเอียด */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
          {/* Card ซ้าย: โครงงานนี้คืออะไร? */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            {/* Top Badges */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f0f7ff] text-[#5cb5e5] rounded-full text-sm font-medium w-fit">
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
                PROJECT CODE: SDU-75H
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#141b2d] tracking-tight">
              โครงงานนี้คืออะไร?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
              โครงการทุนการศึกษาเพื่อการทำงาน (Work-Study Program)
              ของมหาวิทยาลัยสวนดุสิต
              เปิดโอกาสให้นักศึกษาได้พัฒนาทักษะวิชาชีพควบคู่กับการเรียน
              โดยเน้นการฝึกปฏิบัติงานจริงในหน่วยงาน สถาบัน สำนัก
              และศูนย์การศึกษาต่างๆ ภายใต้การกำกับดูแลของมหาวิทยาลัยสวนดุสิต
              ทำให้นักศึกษามีทักษะความพร้อมก่อนก้าวเข้าสู่ตลาดแรงงานจริงในอนาคต
            </p>

            <hr className="border-gray-100 mb-8" />

            {/* 3 Sub-cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
              {/* Sub-card 1 */}
              <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#5cb5e5] mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="font-bold text-[#141b2d] text-sm mb-1">
                  ประสบการณ์จริง
                </div>
                <div className="text-xs text-gray-500">
                  ปฏิบัติงานในหน่วยงานมหาลัย
                </div>
              </div>

              {/* Sub-card 2 */}
              <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#5cb5e5] mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div className="font-bold text-[#141b2d] text-sm mb-1">
                  รายได้มั่นคง
                </div>
                <div className="text-xs text-gray-500">
                  3,000 บ./เดือน ตลอด 12 เดือน
                </div>
              </div>

              {/* Sub-card 3 */}
              <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#5cb5e5] mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="font-bold text-[#141b2d] text-sm mb-1">
                  เวลาที่ยืดหยุ่น
                </div>
                <div className="text-xs text-gray-500">
                  จัดตารางงานตามเวลาว่างจากการเรียน
                </div>
              </div>
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
                className="w-5 h-5 text-[#5cb5e5]"
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
              <div className="text-5xl font-bold text-[#141b2d] tracking-tight mb-3">
                3,000 ฿
              </div>
              <div className="text-sm font-medium text-[#5cb5e5]">
                ต่อเดือน (ปฏิบัติงานครบ 75 ชม.)
              </div>
            </div>

            <hr className="border-gray-100 mb-8" />

            <ul className="text-sm w-full space-y-5 text-gray-500 mt-auto">
              <li className="flex justify-between items-center">
                <span>เกณฑ์ขั้นต่ำคำนวณราย ชม.</span>
                <span className="font-bold text-gray-800">40 ฿ / ชั่วโมง</span>
              </li>
              <li className="flex justify-between items-center">
                <span>ระยะเวลาการรับทุน</span>
                <span className="font-bold text-gray-800">12 เดือน / ปี</span>
              </li>
              <li className="flex justify-between items-center">
                <span>รวมยอดทุนต่อปีสูงสุด</span>
                <span className="font-bold text-[#5cb5e5]">36,000 บาท</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Section เจตนารมณ์ (ข้อความ + รูปภาพ) */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-10 items-stretch font-sans">
          {/* ฝั่งซ้าย: เนื้อหา */}
          <div className="flex-1 flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f0f7ff] text-[#5cb5e5] rounded-full text-sm font-medium w-fit mb-6">
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

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#141b2d] mb-6 tracking-tight">
              เจตนารมณ์ในการจัดตั้งและการสนับสนุนนักศึกษา
            </h3>

            {/* Paragraphs */}
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              ทุนการศึกษาโครงการสวนดุสิตเสริมโอกาส (75 ชั่วโมง)
              ต้องการเปิดโอกาสให้นักศึกษาของมหาวิทยาลัยสวนดุสิต
              ที่กำลังศึกษาอยู่
              ให้มีรายได้โดยต้องทำงานภายในหน่วยงานของมหาวิทยาลัยหรือศูนย์การศึกษาของมหาวิทยาลัย
              โดยทางมหาวิทยาลัยให้ค่าตอบแทนเป็นรายชั่วโมงตามหน้าที่ที่รับผิดชอบไม่น้อยกว่า
              75 ชั่วโมงต่อเดือน
            </p>

            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              นักศึกษาที่ได้รับทุนจะต้องทำงานในหน่วยงานของมหาวิทยาลัยฯ
              และศูนย์การศึกษาอย่างน้อยเดือนละ 75
              ชั่วโมงและนักศึกษาจะได้รับค่าตอบแทนเป็นรายเดือนๆละ 3,000 บาท
              เป็นเวลา 12 เดือน รวมเป็นเงิน 36,000 บาท/ปี
              ส่วนการทำงานจะทำในเวลาที่นักศึกษาว่างจากการเรียน
              ซึ่งจะไม่มีผลกระทบต่อการเรียน
            </p>

            {/* Highlight Quote Box */}
            <div className="bg-[#f4f7fb] border border-[#e1ebf5] p-6 rounded-2xl text-gray-700 leading-relaxed text-base font-medium mt-auto">
              "ซึ่งในปัจจุบันคือโครงการสวนดุสิตเสริมโอกาส
              การให้ทุนการศึกษาวิธีนี้จะช่วยฝึกให้นักศึกษารู้คุณค่าของเงินทุนที่ได้รับ
              มีความผูกพันกับมหาวิทยาลัยฯมากขึ้นและยังมีนิสัย “การให้”
              ตอบแทนผู้ที่ให้ความช่วยเหลือตนเมื่อมีโอกาสด้วย"
            </div>
          </div>

          {/* ฝั่งขวา: รูปภาพ */}
          <div className="w-full lg:w-[35%] min-h-[350px] lg:min-h-full relative rounded-2xl overflow-hidden shrink-0">
            {/* ใส่รูปภาพสถานที่จริงตรงนี้ (เช่น ../assets/campus.jpg) */}
            <img
              src={hour}
              alt="SDU Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* ไล่สีพื้นหลังดำโปร่งใสจากด้านล่าง (Gradient Overlay) เพื่อให้ตัวหนังสือชัดเจน */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* ข้อความซ้อนทับบนรูปภาพ */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="text-white/90 text-xs font-bold tracking-[0.15em] uppercase">
                Philosophy of opportunity
              </span>
            </div>
          </div>
        </div>

        {/* 5. Section ขั้นตอนการสมัคร */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 font-sans">
          {/* ฝั่งซ้าย: เกณฑ์คุณสมบัติผู้มีสิทธิ์ยื่นขอทุน */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f0f7ff] text-[#5cb5e5] rounded-full text-sm font-medium w-fit mb-6">
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

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#141b2d] tracking-tight mb-8">
              เกณฑ์คุณสมบัติผู้มีสิทธิ์ยื่นขอทุน
            </h3>

            {/* List Items */}
            <div className="space-y-4 mb-12 flex-1">
              {[
                {
                  num: 1,
                  title: "เป็นนักศึกษาของมหาวิทยาลัยสวนดุสิต",
                  desc: "กำลังศึกษาอยู่ในระดับปริญญาตรี ทุกสาขาวิชา",
                },
                {
                  num: 2,
                  title: "มีผลการเรียนผ่านเกณฑ์ของมหาวิทยาลัย",
                  desc: "มีผลการเรียนเฉลี่ยสะสมผ่านเกณฑ์ตามที่กำหนด",
                },
                {
                  num: 3,
                  title: "มีความประพฤติดีเหมาะสมกับการเป็นนักศึกษา",
                  desc: "มีความประพฤติดีเหมาะสมกับการเป็นนักศึกษาของมหาวิทยาลัย",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-center gap-4 bg-[#f8fafc] border border-[#eef2f6] p-4 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-full bg-[#bcdcf5] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-inner">
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

            {/* Footer Left Card */}
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-gray-500">
                ตรวจสอบคุณสมบัติผ่านระบบ SDU Portal
              </span>
              <span className="text-[#5cb5e5] font-medium">
                เกณฑ์เป็นไปตามประกาศ มสด.
              </span>
            </div>
          </div>

          {/* ฝั่งขวา: โครงสร้างค่าตอบแทนและการต่อสัญญา */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f0f7ff] text-[#5cb5e5] rounded-full text-sm font-medium w-fit mb-6">
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

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#141b2d] tracking-tight mb-8">
              โครงสร้างค่าตอบแทนและการต่อสัญญา
            </h3>

            {/* List Items */}
            <div className="space-y-4 mb-12 flex-1">
              {/* Box 1 */}
              <div className="bg-[#f8fafc] border border-[#eef2f6] p-5 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#141b2d]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#5cb5e5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    นักศึกษาที่ทำงานครบ 75 ชั่วโมง/เดือน หรือมากกว่า
                  </div>
                  <span className="bg-[#e1effe] text-[#5cb5e5] text-[11px] font-bold px-3 py-1 rounded-full">
                    เกณฑ์เต็ม
                  </span>
                </div>
                <div className="text-sm text-gray-600 pl-7">
                  จะได้รับค่าตอบแทน{" "}
                  <span className="font-bold text-[#141b2d] text-base">
                    เดือนละ 3,000 บาท
                  </span>
                </div>
              </div>

              {/* Box 2 */}
              <div className="bg-[#f8fafc] border border-[#eef2f6] p-5 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#141b2d]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#5cb5e5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    หากทำงานไม่ครบ 75 ชม. แต่มากกว่า 35 ชั่วโมง / เดือน
                  </div>
                  <span className="text-gray-500 text-[11px] font-bold">
                    รายชั่วโมง
                  </span>
                </div>
                <div className="text-sm text-gray-600 pl-7">
                  จะได้รับค่าตอบแทนเป็นรายชั่วโมงๆ ละ{" "}
                  <span className="font-bold text-[#141b2d] text-base">
                    40 บาท
                  </span>
                </div>
              </div>

              {/* Box 3 */}
              <div className="bg-[#f8fafc] border border-[#eef2f6] p-5 rounded-xl">
                <div className="text-[13px] text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#141b2d]">
                    เงื่อนไขการต่อสัญญา:{" "}
                  </span>
                  ทุนการศึกษานี้ เป็นประเภททุนเฉพาะปี
                  นักศึกษาที่ได้รับทุนแล้วถ้าประสงค์จะขอรับทุนในปีการศึกษาต่อไป
                  จะต้องยื่นเรื่องขอใหม่ทุกปีและต้องผ่านการพิจารณาจากคณะกรรมการพิจารณาทุนการศึกษาของมหาวิทยาลัย
                </div>
              </div>
            </div>

            <hr className="border-gray-100 mb-6" />

            {/* Footer Right Card */}
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-gray-500">
                จ่ายเงินผ่านระบบบัญชีทุกรอบสิ้นเดือน
              </span>
              <span className="text-[#5cb5e5] font-medium">
                ประเมินผลปีต่อปี
              </span>
            </div>
          </div>
        </div>

        {/* 6. Section ระเบียบการปฎิบัติ */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 font-sans mt-12">
          {/* ส่วนหัว (Header) */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            {/* Badge ซ้าย */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f0f7ff] text-[#5cb5e5] rounded-full text-sm font-medium w-fit">
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

            {/* ข้อความขวา */}
            <div className="text-[11px] text-gray-500 font-mono font-bold tracking-widest uppercase">
              OPERATIONAL DIRECTIVE
            </div>
          </div>

          {/* ชื่อหัวข้อหลัก */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#141b2d] tracking-tight mb-10">
            ระเบียบปฏิบัติและกระบวนการส่งบัญชีเวลาปฏิบัติงาน
          </h3>

          {/* Grid 4 คอลัมน์ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 01 */}
            <div className="bg-[#f8fafc] border border-[#eef2f6] p-6 rounded-2xl flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
              <div className="w-12 h-12 rounded-full bg-[#e1effe] text-[#5cb5e5] flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <div className="font-bold text-[#141b2d] text-[17px] mb-3">
                สถานที่ปฏิบัติงาน
              </div>
              <div className="text-[14px] text-gray-600 leading-relaxed flex-1">
                ทำงานในหน่วยงานของมหาวิทยาลัยหรือศูนย์การศึกษาของมหาวิทยาลัยที่รับผิดชอบไม่น้อยกว่า
                75 ชั่วโมง / เดือน
              </div>
              <div className="text-[11px] font-mono font-bold text-[#5cb5e5] mt-6">
                ≥ 75 Hours/Mo
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-[#f8fafc] border border-[#eef2f6] p-6 rounded-2xl flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
              <div className="w-12 h-12 rounded-full bg-[#e1effe] text-[#5cb5e5] flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <div className="font-bold text-[#141b2d] text-[17px] mb-3">
                เกณฑ์ชั่วโมงขั้นต่ำ
              </div>
              <div className="text-[14px] text-gray-600 leading-relaxed flex-1">
                กรณีที่ทำงานไม่ถึง 75 ชั่วโมง / เดือน แต่ไม่น้อยกว่า 35
                ชั่วโมง/เดือน ให้คิดค่าตอบแทนเป็นรายชั่วโมง (ชั่วโมงละ 40 บาท)
              </div>
              <div className="text-[11px] font-mono font-bold text-[#5cb5e5] mt-6">
                35 - 74 Hours
              </div>
            </div>

            {/* Card 03 (ธีมสีแดง/ชมพูตามรูป) */}
            <div className="bg-[#f8fafc] border border-[#eef2f6] p-6 rounded-2xl flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
              <div className="w-12 h-12 rounded-full bg-[#ffeceb] text-[#ff8080] flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <div className="font-bold text-[#141b2d] text-[17px] mb-3">
                เกณฑ์ที่ไม่ได้รับค่าตอบแทน
              </div>
              <div className="text-[14px] text-gray-600 leading-relaxed flex-1">
                ถ้าปฏิบัติงานไม่ถึงครึ่งหนึ่งหรือน้อยกว่า 35 ชั่วโมง / เดือน
                จะไม่ได้ค่าตอบแทนในเดือนนั้น
              </div>
              <div className="text-[11px] font-mono font-bold text-[#ff8080] mt-6">
                &lt; 35 Hours = 0 ฿
              </div>
            </div>

            {/* Card 04 */}
            <div className="bg-[#f8fafc] border border-[#eef2f6] p-6 rounded-2xl flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
              <div className="w-12 h-12 rounded-full bg-[#e1effe] text-[#5cb5e5] flex items-center justify-center font-bold text-lg mb-6">
                04
              </div>
              <div className="font-bold text-[#141b2d] text-[17px] mb-3">
                การส่งบัญชีเวลา
              </div>
              <div className="text-[14px] text-gray-600 leading-relaxed flex-1">
                นักศึกษาต้องเขียน “บัญชีเวลาปฏิบัติงานของนักศึกษา 75 ชั่วโมง”
                ส่งที่ศูนย์สนเทศฯ ทุกวันที่ 30 ของเดือน ที่มาปฏิบัติงาน
                ถ้าไม่ส่งตรงตามเวลาจะได้รับเงินล่าช้า
              </div>
              <div className="text-[11px] font-mono font-bold text-[#5cb5e5] mt-6">
                ส่งทุกวันที่ 30
              </div>
            </div>
          </div>
        </div>

        {/* 7. Section สมัคร 75 ชม. */}
        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 font-sans mt-12">
          {/* ฝั่งซ้าย: ไอคอนและข้อความ */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
            {/* ไอคอน */}
            <div className="w-14 h-14 bg-[#e6f0fe] rounded-2xl flex items-center justify-center text-[#1a5eb8] shrink-0">
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

            {/* ข้อความ */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#141b2d] mb-1">
                พร้อมก้าวสู่โอกาสใหม่กับเราหรือยัง?
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                เลือกสมัครโครงการ 75 ชั่วโมง
                หรือเข้าสู่ระบบบันทึกเวลาปฏิบัติงานประจำวัน
              </p>
            </div>
          </div>

          {/* ฝั่งขวา: ปุ่มกด */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
            {/* ปุ่มสมัครเข้าร่วมโครงการ */}
            <button className="flex items-center justify-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-[#003d7c] to-[#0070bc] rounded-full shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all hover:-translate-y-0.5 whitespace-nowrap">
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
            </button>

            {/* ปุ่มเข้าสู่ระบบ */}
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
                            ตารางเปรียบเทียบการทำงาน 75 ชั่วโมง
      *************************************************************************/}
      <div className="w-full font-sans py-12 bg-gradient-to-b from-[#f4f7fb]/60 to-transparent">
        {/* ส่วนหัว (Header Section) */}
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

        {/* ส่วนตาราง (Table Container) */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left border-collapse">
                {/* หัวตาราง */}
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

                {/* เนื้อหาตาราง */}
                <tbody className="text-[15px]">
                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">
                      หน่วยงานที่ปฏิบัติงาน
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      หน่วยงานภายในมหาวิทยาลัยสวนดุสิต และศูนย์การศึกษา
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      โรงเรียนสาธิตละอออุทิศ (บริเวณประตูทางเข้าและอาคารเรียน)
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">
                      ชั่วโมงปฏิบัติงานต่อเดือน
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      ไม่น้อยกว่า 75 ชั่วโมง / เดือน (จัดสรรตามเวลาว่าง)
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      ประมาณ 40 - 44 ชั่วโมง / เดือน (วันละ 2 ชั่วโมง ช่วงเช้า)
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">
                      ช่วงเวลาปฏิบัติงาน
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      เวลาที่นักศึกษาว่างจากการเรียน (จันทร์ - เสาร์)
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      ช่วงเช้าตรู่ 06:00 น. - 08:00 น. (จันทร์ - ศุกร์)
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">
                      อัตราค่าตอบแทน
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      <span className="font-bold text-[#5cb5e5]">
                        3,000 บาท/เดือน
                      </span>{" "}
                      (36,000 บ./ปี)
                      <br />
                      <span className="text-[14px]">
                        เศษชั่วโมง (35-74 ชม.) คิด 40 บ./ชม.
                      </span>
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      <span className="font-bold text-[#c4a4f9]">
                        50 บาท/ชั่วโมง (อัตราพิเศษ)
                      </span>
                      <br />
                      <span className="text-[14px]">
                        เฉลี่ย 2,000 - 2,200 บาท/เดือน
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">
                      คุณสมบัติเฉพาะที่ต้องการ
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      นักศึกษา มสด. ผลการเรียนผ่านเกณฑ์ มีจิตอาสา
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      ตรงต่อเวลา ตื่นเช้าได้
                      มีจิตวิทยาและใจรักในการดูแลเด็กปฐมวัย
                    </td>
                  </tr>

                  <tr className="transition-colors hover:bg-gray-50/50">
                    <td className="py-6 px-8 font-bold text-[#141b2d]">
                      การส่งบัญชีบันทึกเวลา
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      ส่งที่ศูนย์สนเทศฯ ทุกวันที่ 30 ของเดือน
                    </td>
                    <td className="py-6 px-8 text-gray-600">
                      สแกนลงเวลาผ่านระบบและส่งใบบันทึกรับรองจากครูเวรประจำวัน
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* *********************************************************************
                            ขั้นตอนการสมัครโครงการ 75 ชั่วโมง
      *************************************************************************/}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* ป้ายกำกับ (Badge) */}
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

        {/* หัวข้อหลักและคำอธิบาย */}
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#141b2d] mb-4 tracking-tight">
          เริ่มต้นก้าวสำคัญสู่อนาคตของคุณวันนี้
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-10 max-w-4xl leading-relaxed">
          ขั้นตอนและกระบวนการตั้งแต่การยื่นใบสมัครออนไลน์ การปฏิบัติงานจริง
          จนถึงการส่งบัญชีบันทึกเวลาเพื่อรับการอนุมัติเบิกจ่ายค่าตอบแทนอย่างเป็นระบบและโปร่งใส
        </p>

        {/* Grid 2 คอลัมน์ สำหรับการ์ดขั้นตอน */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* ขั้นตอนที่ 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex gap-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
            <div className="w-10 h-10 rounded-full bg-[#e1effe] text-[#1a5eb8] flex items-center justify-center font-bold text-lg shrink-0">
              1
            </div>
            <div>
              <h4 className="font-bold text-[#141b2d] text-[15px] mb-1.5">
                ขั้นตอนที่ 1 : กรอกแบบฟอร์มและเตรียมเอกสาร
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                ทำการกรอกแบบฟอร์มสมัครออนไลน์และดาวน์โหลดเอกสาร
                พร้อมแนบรูปถ่ายนักศึกษาและหลักฐานการศึกษาที่เกี่ยวข้องให้ครบถ้วน
              </p>
            </div>
          </div>

          {/* ขั้นตอนที่ 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex gap-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
            <div className="w-10 h-10 rounded-full bg-[#e1effe] text-[#1a5eb8] flex items-center justify-center font-bold text-lg shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold text-[#141b2d] text-[15px] mb-1.5">
                ขั้นตอนที่ 2 : ยื่นเอกสารและตรวจสอบสิทธิ์
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                ยื่นเอกสารต่อเจ้าหน้าที่ผู้รับผิดชอบ
                เพื่อตรวจสอบคุณสมบัติและบันทึกรายชื่อเข้าสู่ระบบ
                โดยสามารถเริ่มปฏิบัติงานได้ทันทีหลังผ่านการอนุมัติ
              </p>
            </div>
          </div>

          {/* ขั้นตอนที่ 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex gap-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
            <div className="w-10 h-10 rounded-full bg-[#e1effe] text-[#1a5eb8] flex items-center justify-center font-bold text-lg shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold text-[#141b2d] text-[15px] mb-1.5">
                ขั้นตอนที่ 3 : บันทึกเวลาปฏิบัติงานรายวัน
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                เข้าสู่ระบบออนไลน์ด้วย SDU Account (รหัสนักศึกษา)
                เพื่อลงเวลาปฏิบัติงานและบันทึกรายละเอียดงานที่ทำในแต่ละวันที่เข้าปฏิบัติงาน
              </p>
            </div>
          </div>

          {/* ขั้นตอนที่ 4 */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm flex gap-5 transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
            <div className="w-10 h-10 rounded-full bg-[#e1effe] text-[#1a5eb8] flex items-center justify-center font-bold text-lg shrink-0">
              4
            </div>
            <div>
              <h4 className="font-bold text-[#141b2d] text-[15px] mb-1.5">
                ขั้นตอนที่ 4 : สรุปส่งเอกสารและรับค่าตอบแทน
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                เมื่อครบสิ้นเดือน
                พิมพ์ใบบันทึกการปฏิบัติงานให้หัวหน้าหน่วยงานลงนามรับรอง
                แล้วส่งเอกสารเบิกจ่ายตามรอบเพื่อรอรับเงินค่าตอบแทนเข้าบัญชี
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* *********************************************************************
                            ติดต่อสอบถามข้อมูลเพิ่มเติม 75 ชั่วโมง
      *************************************************************************/}
      <div className="bg-white max-w-6xl mx-auto px-6 py-12 space-y-12 rounded-[2rem] shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col lg:flex-row gap-12 font-sans mt-12">
        {/* ฝั่งซ้าย: ข้อมูลการติดต่อ */}
        <div className="flex-1 flex flex-col justify-center">
          {/* ป้ายกำกับ (Subtitle) */}
          <div className="text-[#5cb5e5] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
            SUPPORT & INQUIRIES
          </div>

          {/* หัวข้อหลัก */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#141b2d] mb-4 tracking-tight">
            ติดต่อสอบถามข้อมูลเพิ่มเติม
          </h3>

          {/* คำอธิบาย */}
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-xl">
            หากมีข้อสงสัยเกี่ยวกับเกณฑ์การรับทุน การคัดเลือก
            การคำนวณชั่วโมงปฏิบัติงาน หรือการเบิกจ่ายค่าตอบแทน
            สามารถติดต่อเจ้าหน้าที่งานแนะแนวและทุนการศึกษาได้ทุกวันทำการ
          </p>

          {/* รายการข้อมูลติดต่อ */}
          <div className="space-y-5">
            {/* สถานที่ */}
            <div className="flex items-start gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#5cb5e5] shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-gray-600 text-[15px] leading-relaxed">
                ศูนย์สนเทศแนะแนวการศึกษาและอาชีพ กองพัฒนานักศึกษา
                มหาวิทยาลัยสวนดุสิต
              </span>
            </div>

            {/* เว็บไซต์ */}
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#5cb5e5] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <a
                href="http://guidance.dusit.ac.th/WEB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5cb5e5] font-medium text-[15px] hover:underline"
              >
                http://guidance.dusit.ac.th/WEB
              </a>
            </div>

            {/* เบอร์โทรศัพท์ */}
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#5cb5e5] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-gray-600 text-[15px]">
                02-244-5198 และ 02-244-5199
              </span>
            </div>
          </div>
        </div>

        {/* ฝั่งขวา: การ์ด SDU Help Desk */}
        <div className="w-full lg:w-[45%] bg-[#f8fafc] border border-[#eef2f6] p-8 md:p-10 rounded-[2rem] flex flex-col items-center justify-center text-center">
          {/* ไอคอน Help (รูปกล่องข้อความที่มีเครื่องหมายคำถาม) */}
          <div className="mb-5 text-[#141b2d]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 9.879a3 3 0 114.242 0c-.81.81-1.121 1.488-1.121 2.121v.5"
              />
              <circle cx="12" cy="15" r="0.5" fill="currentColor" />
            </svg>
          </div>

          {/* ชื่อหน่วยงาน */}
          <h4 className="font-bold text-[#141b2d] text-xl mb-3">
            ศูนย์บริการข้อมูลนักศึกษา (SDU Help Desk)
          </h4>

          {/* เวลาทำการ */}
          <p className="text-gray-500 text-[13px] mb-8">
            เปิดให้บริการทุกวันจันทร์ - ศุกร์ เวลา 08:30 น. - 16:30 น.
          </p>

          {/* ปุ่มลิงก์ */}
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-[14px] font-bold text-[#141b2d] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm w-fit mx-auto"
          >
            เข้าสู่เว็บไซต์หลักมหาวิทยาลัยสวนดุสิต
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* *********************************************************************
                                    Footer Section
      *************************************************************************/}
      <footer className="bg-white border-t border-gray-100 mt-16 py-10 font-sans">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* ฝั่งซ้าย: โลโก้และลิขสิทธิ์ */}
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            {/* ไอคอนหมวกปริญญา พร้อมเงาและแอนิเมชัน */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a5eb8] to-[#0d3b6f] flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-900/20 transition-transform hover:scale-105 cursor-default">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
              </svg>
            </div>

            {/* ข้อความ */}
            <div className="text-gray-500 text-sm leading-relaxed">
              <span className="font-semibold text-gray-800">
                © 2026 Suan Dusit University.
              </span>
              <br className="hidden md:block" />
              กองพัฒนานักศึกษา มหาวิทยาลัยสวนดุสิต
            </div>
          </div>

          {/* ฝั่งขวา: เมนูลิงก์ พร้อม Effect ขีดเส้นใต้ */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm text-gray-500 font-medium">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
              <a
                href="#"
                className="relative group hover:text-[#1a5eb8] transition-colors duration-300"
              >
                ข้อกำหนดและเงื่อนไข
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#1a5eb8] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#"
                className="relative group hover:text-[#1a5eb8] transition-colors duration-300"
              >
                นโยบายความเป็นส่วนตัว
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#1a5eb8] transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a
                href="#"
                className="relative group hover:text-[#1a5eb8] transition-colors duration-300"
              >
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
