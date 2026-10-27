import React, { useState } from "react";
import logoSDU from "../assets/logoSDU2.webp"; 

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("student"); // 'student' | 'admin'

  return (
    // เปลี่ยนเป็น h-screen และเพิ่ม overflow-hidden เพื่อล็อกขนาดหน้าจอ
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#edf2f9] flex flex-col justify-center items-center p-4 font-sans text-gray-800">
      
      {/* การ์ด Login - ปรับ padding เล็กน้อยเพื่อให้กะทัดรัดขึ้น */}
      <div className="w-full max-w-[420px] bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-6 sm:p-8 relative">
        
        {/* ส่วนหัว: โลโก้และชื่อระบบ */}
        <div className="flex flex-col items-center text-center mb-6">
          {/* โลโก้ */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full overflow-hidden flex items-center justify-center">
            <img 
              src={logoSDU} 
              alt="SDU Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#eef5ff] text-[#1a5eb8] text-[10px] sm:text-[11px] font-bold rounded-full mb-2 tracking-wide">
            <div className="w-1.5 h-1.5 bg-[#1a5eb8] rounded-full"></div>
            SDU ACADEMIC E-SERVICE
          </div>

          {/* ชื่อระบบ */}
          <h2 className="text-lg sm:text-xl font-bold text-[#141b2d] mb-0.5">
            ระบบกรอกแบบฟอร์มโครงการ
          </h2>
          <p className="text-[12px] sm:text-[13px] text-gray-500">
            มหาวิทยาลัยสวนดุสิต (Suan Dusit University)
          </p>
        </div>

        {/* Tabs สำหรับเลือกประเภทผู้ใช้งาน */}
        <div className="flex bg-[#f3f4f6] rounded-xl p-1 mb-5">
          <button
            onClick={() => setActiveTab("student")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold rounded-lg transition-all ${
              activeTab === "student"
                ? "bg-[#1a5eb8] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            ผู้ใช้งานทั่วไป
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold rounded-lg transition-all ${
              activeTab === "admin"
                ? "bg-[#1a5eb8] text-white shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
            ผู้ดูแลระบบ
          </button>
        </div>

        {/* ฟอร์มเข้าสู่ระบบ (ลด space-y ลง) */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* ช่องกรอกชื่อผู้ใช้งาน */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[12px] sm:text-[13px] font-bold text-[#141b2d]">
                {activeTab === "student" ? "ชื่อผู้ใช้งาน / รหัสนักศึกษา" : "ชื่อผู้ดูแลระบบ (Username)"}
              </label>
              <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">รหัส 10 หลัก</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="เช่น 6401123456"
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1a5eb8] transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* ช่องกรอกรหัสผ่าน */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[12px] sm:text-[13px] font-bold text-[#141b2d]">รหัสผ่าน</label>
              <a href="#" className="text-[11px] sm:text-[12px] font-bold text-[#1a5eb8] hover:underline">
                ลืมรหัสผ่าน?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="รหัสผ่านเข้าใช้งาน"
                className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1a5eb8] transition-all placeholder:text-gray-400"
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* จดจำการเข้าสู่ระบบ & SSL */}
          <div className="flex justify-between items-center pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-[#1a5eb8] focus:ring-[#1a5eb8] cursor-pointer" />
              <span className="text-[11px] sm:text-[12px] text-gray-600">จดจำการเข้าสู่ระบบ</span>
            </label>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#1a5eb8] font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              SSL เข้ารหัส 256-bit
            </div>
          </div>

          {/* ปุ่มเข้าสู่ระบบ */}
          <div className="pt-2">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#1a5eb8] hover:bg-[#144b94] text-white text-[14px] sm:text-[15px] font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-0.5">
              เข้าสู่ระบบ
            </button>
          </div>

        </form>

        <hr className="border-gray-100 my-5" />

        {/* ส่วนช่วยเหลือด้านล่าง */}
        <div className="flex items-start justify-center gap-2 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[10px] sm:text-[11px] text-gray-500 leading-relaxed">
            หากพบปัญหาการเข้าสู่ระบบ กรุณาติดต่อสำนักวิทยบริการและเทคโนโลยี
            <br />
            สารสนเทศ โทร <a href="tel:022445000" className="text-[#1a5eb8] font-bold hover:underline">02-244-5000</a>
          </p>
        </div>

      </div>

      {/* ข้อความเครดิตด้านนอกกล่อง */}
      <div className="mt-6 flex items-center justify-center gap-1.5 text-gray-400 text-[10px] sm:text-[11px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>ระบบบริหารจัดการข้อเสนอโครงการ มหาวิทยาลัยสวนดุสิต © 2569</span>
      </div>

    </div>
  );
}