export default function Dashboard() {
  return (
    <div className="dashboard-page min-h-screen bg-[#F1F5F9] text-brand-neutral flex flex-col antialiased selection:bg-[#6CCDFF]/30">
      {/* BEGIN: MainHeader */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200/90 shadow-sm transition-all" data-purpose="site-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand & Identity */}
          <div className="flex items-center space-x-3.5" data-purpose="logo-container">
            <img alt="ตราสัญลักษณ์ มหาวิทยาลัยสวนดุสิต" className="h-14 w-auto object-contain drop-shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz88zTsPOqetlqDsTTkOdCISu2LD_Z-WKnwXHtjMSpRBbj3Nd0o_t6-Y2PvK5Tqi-nU7KUXbFxj530MPMsPG0fu6fIK60muZrITH1fTIVi9hAjbdHGV7ilQPFQHqIb23cJYwOE4qklQIQyB6_9mZanzIIARkPmXKzkZrKGC6pPtwArSC5ZOSpLxzRCPJHXdqf5INw2uYok-TKHY4EeppuhB2gBKnivyX7DBaf8DcrTKIOlAtAR1teBXh9qKSPyc4s_Pcg" />
            <div className="border-l border-slate-200 pl-3.5">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-tight">มหาวิทยาลัยสวนดุสิต</h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-brand-primary border border-blue-200/60">ระบบงาน</span>
              </div>
              <p className="text-xs text-slate-500 font-normal mt-0.5">ศูนย์สนเทศและแนะแนวการศึกษาและอาชีพ มหาวิทยาลัยสวนดุสิต</p>
            </div>
          </div>
          {/* User Profile & Action */}
          <div className="flex items-center space-x-3" data-purpose="user-actions">
    
            <button className="inline-flex items-center px-3.5 py-1.5 border border-slate-300 hover:border-red-300 text-xs sm:text-sm font-medium rounded-full text-slate-600 hover:text-red-600 bg-white hover:bg-red-50 transition-colors duration-150 shadow-sm" type="button">
              <svg className="w-4 h-4 mr-1.5 text-slate-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              ออกจากระบบ
            </button>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}
      {/* Main Content Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-7" data-purpose="main-dashboard">
        {/* BEGIN: BannerAndFilters */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6" data-purpose="dashboard-greeting-bar">
          {/* Title & Month */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2"><span>กิตติคุณ</span>
              <span className="inline-block animate-pulse w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span></h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1 flex items-center gap-2">
              <span>บันทึกการปฏิบัติงานเดือนตุลาคม 2569</span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-primary font-medium text-xs bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">รอบรายงานปกติ</span>
            </p>
          </div>
          {/* Selectors & Filters */}
          <div className="flex flex-wrap items-center gap-2.5" data-purpose="filter-controls">
            {/* Project Dropdown Pill */}
            <div className="relative">
              <select className="appearance-none bg-white text-slate-800 font-medium text-sm py-2 pl-4 pr-9 rounded-full border border-slate-300 hover:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 shadow-sm cursor-pointer transition">
                <option>โครงการสวนดุสิตเสริมโอกาส (75 ชม.)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
            </div>
            {/* Month Dropdown Pill */}
            <div className="relative">
              <select className="appearance-none bg-white text-slate-800 font-medium text-sm py-2 pl-4 pr-9 rounded-full border border-slate-300 hover:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 shadow-sm cursor-pointer transition">
                <option>ตุลาคม 2569</option>
                <option>พฤศจิกายน 2569</option>
                <option>ธันวาคม 2569</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
            </div>
          </div>
        </section>
        {/* END: BannerAndFilters */}
        {/* BEGIN: DashboardBodyGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" data-purpose="layout-columns">
          {/* LEFT COLUMN (~320px to 380px) */}
          <aside className="lg:col-span-4 space-y-6" data-purpose="left-sidebar">
            {/* Card A: Student Profile Info */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm relative overflow-hidden transition-all hover:shadow-md" data-purpose="user-profile-card">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-50 rounded-full blur-2xl pointer-events-none"></div>
              {/* Top profile badge */}
              <div className="flex items-center space-x-3.5 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-primary to-sky-500 text-white font-bold text-lg flex items-center justify-center shadow-md shadow-brand-primary/20 flex-shrink-0">
                  1
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-slate-900 truncate">นายกิตติคุณ รัตนสุวรรณ</h3>
                  <p className="text-xs font-mono text-slate-500 tracking-wide mt-0.5">9900000010012</p>
                </div>
              </div>
              {/* Profile Attributes Details */}
              <div className="py-4 space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="text-slate-400 block font-medium">คณะ / สาขาวิชา</span>
                  <span className="text-slate-800 font-semibold text-sm">idk / idkna</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">เบอร์โทรศัพท์</span>
                  <span className="text-slate-800 font-semibold text-sm">012-345-6789</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">สถานที่ปฏิบัติงาน</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <svg className="w-4 h-4 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    <span className="text-slate-900 font-bold text-sm">ศูนย์การศึกษา ลำปาง</span>
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">เบอร์โทรศัพท์หน่วยงาน</span>
                  <span className="text-slate-400 italic">ยังไม่ได้ระบุ</span>
                </div>
              </div>
              {/* Action Button */}
              <button className="w-full mt-2 py-2.5 px-4 bg-slate-50 hover:bg-brand-primary hover:text-white border border-slate-200 hover:border-brand-primary text-slate-700 font-medium text-xs rounded-xl transition duration-150 flex items-center justify-center gap-2 group" type="button">
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                แก้ไขสถานที่ปฏิบัติงาน
              </button>
            </div>
            {/* Card B: Document Printing Actions */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm transition-all hover:shadow-md" data-purpose="print-documents-card">
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  พิมพ์เอกสาร
                </h3>
                <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">3 แบบฟอร์ม</span>
              </div>
              <div className="space-y-2">
                {/* Active Print Button */}
                <button className="w-full flex items-center justify-start px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50/60 border border-brand-primary/40 text-brand-primary hover:bg-blue-100/70 font-semibold text-xs transition duration-150 shadow-sm" type="button">
                  <span className="p-1 rounded-md bg-brand-primary text-white mr-2.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </span>
                  <span>บันทึกการปฏิบัติงาน</span>
                  <svg className="w-3.5 h-3.5 ml-auto text-brand-primary opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </button>
                {/* Regular Print Button 1 */}
                <button className="w-full flex items-center justify-start px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 font-medium text-xs transition duration-150" type="button">
                  <span className="p-1 rounded-md bg-slate-100 text-slate-500 mr-2.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </span>
                  <span>ใบลงเวลา (สำหรับลงลายเซ็น)</span>
                </button>
                {/* Regular Print Button 2 */}
    
              </div>
              {/* Bottom guidance text */}
              <div className="mt-3.5 pt-3 border-t border-slate-100">
                <p className="text-[11px] leading-relaxed text-slate-500 flex items-start gap-1.5">
                  <svg className="w-3.5 h-3.5 text-brand-tertiary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fillRule="evenodd"></path></svg>
                  <span>พิมพ์ของเดือนตุลาคม 2569 - เลือก <span className="font-semibold text-slate-700">“บันทึกเป็น PDF”</span> ในหน้าต่างพิมพ์ถ้าต้องการไฟล์</span>
                </p>
              </div>
            </div>
            {/* Card C: Submission Step-by-Step Instructions */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm transition-all hover:shadow-md" data-purpose="submission-guide-card">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                วิธีส่งเอกสาร
              </h3>
              <ol className="space-y-4 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                {/* Step 1 */}
                <li className="flex items-start gap-3 relative">
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm z-10">
                    1
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">ลงเวลาให้ครบ</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">บันทึกทุกวันที่ปฏิบัติงานก่อนสิ้นเดือน ครบ 75 ชม. ได้เต็ม 3,000 บาท</p>
                  </div>
                </li>
                {/* Step 2 */}
                <li className="flex items-start gap-3 relative">
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm z-10">
                    2
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">พิมพ์บันทึกการปฏิบัติงาน</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">ระบบเติมวันที่ เวลา งานที่ทำ และรวมชั่วโมงให้ตามแบบฟอร์ม</p>
                  </div>
                </li>
                {/* Step 3 */}
                <li className="flex items-start gap-3 relative">
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm z-10">
                    3
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">ให้หัวหน้าหน่วยงานลงนาม</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">หัวหน้าหน่วยงานหรือผู้ควบคุมการปฏิบัติงานลงนามเมื่อครบเดือน</p>
                  </div>
                </li>
                {/* Step 4 */}
                <li className="flex items-start gap-3 relative">
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm z-10">
                    4
                  </div>
                  <div className="pt-0.5">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">ส่งที่ศูนย์สนเทศฯ</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">ยื่นเพื่อเบิกค่าตอบแทน</p>
                  </div>
                </li>
              </ol>
            </div>
          </aside>
          {/* END: LEFT COLUMN */}
          {/* RIGHT COLUMN (Expanded Area) */}
          <section className="lg:col-span-8 space-y-6" data-purpose="right-content-area">
            {/* BEGIN: OverviewStatsGrid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-purpose="stats-overview">
              {/* Stat 1: Hours Completed */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-medium text-slate-500">ชั่วโมงเดือนนี้</span>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight heading-font">91.52</span>
                  <span className="text-sm font-medium text-slate-400">/ 75 ชม.</span>
                </div>
                {/* Progress bar */}
                <div className="mt-3.5 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  {/* > 100% full bar in primary royal azure */}
                  <div className="bg-brand-primary h-2 rounded-full w-full"></div>
                </div>
              </div>
              {/* Stat 2: Total Days */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-medium text-slate-500">วันที่ปฏิบัติงาน</span>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight heading-font">4</span>
                  <span className="text-sm font-medium text-slate-400">วัน</span>
                </div>
                <div className="mt-3.5 flex items-center text-xs text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-sky-400 mr-1.5"></span>
                  <span>บันทึกต่อเนื่อง</span>
                </div>
              </div>
              {/* Stat 3: Compensation Received */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition">
                <span className="text-xs font-medium text-slate-500">ได้รับค่าตอบแทนแล้ว</span>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight heading-font">3,000</span>
                  <span className="text-sm font-medium text-slate-400">บาท</span>
                </div>
                {/* Status Badge */}
                <div className="mt-3.5 flex items-center">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                    จ่ายแล้ว
                  </span>
                </div>
              </div>
            </div>
            {/* END: OverviewStatsGrid */}
            {/* BEGIN: DailyWorkLogSection */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden" data-purpose="daily-logs-card">
              {/* Card Header & Add Daily Button */}
              <div className="px-6 py-4.5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">บันทึกรายวัน</h3>
                  <p className="text-xs text-slate-500">ประวัติการลงเวลาและสรุปภารกิจประจำเดือนตุลาคม 2569</p>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-brand-primary hover:bg-[#0e5ea6] text-white text-xs font-semibold rounded-xl shadow-sm hover:shadow transition duration-150 gap-1.5" type="button">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>เพิ่มรายวัน</span>
                </button>
              </div>
              {/* Data Table Container */}
              <div className="overflow-x-auto" data-purpose="work-log-table-container">
                <table className="w-full text-left border-collapse" id="work-logs-table">
                  <thead>
                    <tr className="bg-slate-50/80 text-slate-600 text-xs font-semibold uppercase tracking-wider border-b border-slate-100">
                      <th className="py-3.5 px-5" scope="col">วัน/เดือน/ปี</th>
                      <th className="py-3.5 px-4 font-mono" scope="col">เวลาปฏิบัติงาน</th>
                      <th className="py-3.5 px-4 text-center" scope="col">ชม.</th>
                      <th className="py-3.5 px-5" scope="col">บันทึกรายงานการปฏิบัติงาน</th>
                      <th className="py-3.5 px-5 text-right" scope="col">จัดการ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-medium text-slate-900 whitespace-nowrap">
                        อังคาร 13 ต.ค.
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-600 whitespace-nowrap">
                        01.30–22.30
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-brand-primary font-semibold text-xs">
                          21 ชม.
                        </span>
                      </td>
                      <td className="py-4 px-5 text-slate-700 max-w-xs truncate font-normal">
                        า
                      </td>
                      <td className="py-4 px-5 text-right whitespace-nowrap text-xs">
                        <button className="font-medium text-brand-primary hover:text-blue-700 mr-2.5 transition">แก้ไข</button>
                        <button className="font-medium text-red-500 hover:text-red-700 transition">ลบ</button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-medium text-slate-900 whitespace-nowrap">
                        อังคาร 20 ต.ค.
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-600 whitespace-nowrap">
                        01.00–23.30
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-brand-primary font-semibold text-xs">
                          22.5 ชม.
                        </span>
                      </td>
                      <td className="py-4 px-5 text-slate-700 max-w-xs truncate font-normal">
                        ด
                      </td>
                      <td className="py-4 px-5 text-right whitespace-nowrap text-xs">
                        <button className="font-medium text-brand-primary hover:text-blue-700 mr-2.5 transition">แก้ไข</button>
                        <button className="font-medium text-red-500 hover:text-red-700 transition">ลบ</button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-medium text-slate-900 whitespace-nowrap">
                        อังคาร 27 ต.ค.
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-600 whitespace-nowrap">
                        01.30–23.30
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-brand-primary font-semibold text-xs">
                          22 ชม.
                        </span>
                      </td>
                      <td className="py-4 px-5 text-slate-700 max-w-xs truncate font-normal">
                        ก
                      </td>
                      <td className="py-4 px-5 text-right whitespace-nowrap text-xs">
                        <button className="font-medium text-brand-primary hover:text-blue-700 mr-2.5 transition">แก้ไข</button>
                        <button className="font-medium text-red-500 hover:text-red-700 transition">ลบ</button>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-medium text-slate-900 whitespace-nowrap">
                        อังคาร 27 ต.ค.
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-600 whitespace-nowrap">
                        08.30–12.30
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-brand-primary font-semibold text-xs">
                          4 ชม.
                        </span>
                      </td>
                      <td className="py-4 px-5 text-slate-700 max-w-xs truncate font-normal">
                        ป/-
                      </td>
                      <td className="py-4 px-5 text-right whitespace-nowrap text-xs">
                        <button className="font-medium text-brand-primary hover:text-blue-700 mr-2.5 transition">แก้ไข</button>
                        <button className="font-medium text-red-500 hover:text-red-700 transition">ลบ</button>
                      </td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 font-medium text-slate-900 whitespace-nowrap">
                        พุธ 28 ต.ค.
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-600 whitespace-nowrap">
                        01.30–23.31
                      </td>
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-brand-primary font-semibold text-xs">
                          22.02 ชม.
                        </span>
                      </td>
                      <td className="py-4 px-5 text-slate-700 max-w-xs truncate font-normal">
                        เ
                      </td>
                      <td className="py-4 px-5 text-right whitespace-nowrap text-xs">
                        <button className="font-medium text-brand-primary hover:text-blue-700 mr-2.5 transition">แก้ไข</button>
                        <button className="font-medium text-red-500 hover:text-red-700 transition">ลบ</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Bottom Notice Card inside Table area */}
              <div className="p-4 m-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3" data-purpose="table-footer-notice">
                <div className="p-1 rounded-full bg-blue-100 text-brand-primary flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  กรอกครบเดือนแล้วกด <span className="font-semibold text-slate-900">“บันทึกการปฏิบัติงาน”</span> ทางซ้ายเพื่อพิมพ์ ระบบเติมข้อมูลลงแบบฟอร์มให้ แล้วนำไปให้หัวหน้าหน่วยงานลงนาม
                </p>
              </div>
            </div>
            {/* END: DailyWorkLogSection */}
          </section>
          {/* END: RIGHT COLUMN */}
        </div>
        {/* END: DashboardBodyGrid */}
      </main>
      {/* BEGIN: MainFooter */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-4" data-purpose="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© 2569 มหาวิทยาลัยสวนดุสิต — ศูนย์สนเทศและแนะแนวการศึกษาและอาชีพ</p>
          <div className="flex items-center space-x-4 text-slate-500">
            <span>เวอร์ชัน 2.4.0</span>
            <span>•</span>
            <a className="hover:text-brand-primary transition" href="#">คู่มือการใช้งาน</a>
            <span>•</span>
            <a className="hover:text-brand-primary transition" href="#">ติดต่อผู้ดูแลระบบ</a>
          </div>
        </div>
      </footer>
      {/* END: MainFooter */}
    </div>
  );
}
