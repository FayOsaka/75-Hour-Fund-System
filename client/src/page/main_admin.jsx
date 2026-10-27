import { useEffect, useState } from "react";

export default function MainAdmin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.body.classList.add("overflow-hidden");
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="admin-page bg-[#F4F7FC] text-[#0F172A] font-sans antialiased min-h-screen flex flex-col">
      {/* BEGIN: MainHeader */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1920px] mx-auto px-6 py-3 flex items-center justify-between">
          {/* Brand & University Info */}
          <div className="flex items-center space-x-3.5">
            <img alt="Suan Dusit University Logo" className="h-12 w-auto object-contain drop-shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK2lwYkvV7-6UIldSy-7A_pF6oPoyHQJ1tmDWjQD5amKxZbOTvbORzMJC5LWy2oU7EQaVvLLIqgFO7qMRNDY1puVbN8U5NgGYa3k2XmZbohXODVmgVJRMulehqp4cLLvWCiHjXiNadCFwUREjCxsUNtct-ekaGE9yhp-IByAriG66gpf3JkFPhCnvSsq05VyfziTUMXMbyy1cn9_Y3FEXQfwux3QkXzxas0RYCr_Bkzu_typAUdtbx0TfFl7PlJaYNx4k" />
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-brand-500 tracking-tight leading-snug">SDU เสริมโอกาส</span>
              <span className="text-xs text-slate-500 font-medium">ศูนย์สารสนเทศและแนะแนวการศึกษาและอาชีพ มหาวิทยาลัยสวนดุสิต</span>
            </div>
          </div>
          {/* User Profile & Action Controls */}
          <div className="flex items-center space-x-3">
            {/* Admin Profile Tag */}
            <div className="flex items-center bg-slate-100 hover:bg-slate-200/80 transition px-3.5 py-1.5 rounded-full border border-slate-200/70">
              <div className="w-7 h-7 rounded-full bg-brand-500 text-white flex items-center justify-center font-display font-medium text-xs shadow-inner">
                ผ
              </div>
              <span className="ml-2 text-sm font-medium text-slate-700">ผู้ดูแลระบบ</span>
            </div>
            {/* Logout Action Button */}
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all shadow-xs" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="log-out" aria-hidden="true" className="lucide lucide-log-out w-4 h-4"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
              <span>ออกจากระบบ</span>
            </button>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}
      {/* BEGIN: MainContentArea */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto px-6 py-6 space-y-6">
        {/* BEGIN: PageTitleAndFilters */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-200/70">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900 tracking-tight">ผู้เข้าร่วมโครงการ</h1>
            <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
              <span>โครงการสวนดุสิตเสริมโอกาส (75 ชม.)</span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-brand-50 text-brand-600 border border-brand-100">
                ปีการศึกษา 2569
              </span>
            </p>
          </div>
          {/* Action Selectors and Print Trigger */}
          <div className="flex items-center gap-3">
            {/* Month Filter Selector */}
            <div className="relative min-w-[170px]">
              <select defaultValue="ตุลาคม 2569" className="w-full appearance-none bg-white border border-slate-200 text-slate-700 text-sm font-medium py-2.5 pl-3.5 pr-8 rounded-lg shadow-xs focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition cursor-pointer">
                <option>ตุลาคม 2569</option>
                <option>กันยายน 2569</option>
                <option>สิงหาคม 2569</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="chevron-down" aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4"><path d="m6 9 6 6 6-6"></path></svg>
              </div>
            </div>
            {/* Print Roster Button */}
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="printer" aria-hidden="true" className="lucide lucide-printer w-4 h-4"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg>
              <span>ปริ้นรายชื่อผู้เข้าร่วม</span>
            </button>
          </div>
        </section>
        {/* END: PageTitleAndFilters */}
        {/* BEGIN: MetricCardsGrid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Metric 1: Total Participants */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs relative overflow-hidden flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">ผู้เข้าร่วมทั้งหมด</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-display font-bold text-slate-900">274</span>
                <span className="text-sm font-medium text-slate-500">คน</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-500 flex items-center justify-center border border-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="users" aria-hidden="true" className="lucide lucide-users w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            </div>
          </div>
          {/* Metric 2: Pending Hours Validation */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs relative overflow-hidden flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">มีชั่วโมงแต่ยังไม่ยืนยันการออกเงิน</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-display font-bold text-accent-warning">1</span>
                <span className="text-sm font-medium text-slate-500">คน</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-accent-warning flex items-center justify-center border border-amber-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="clock" aria-hidden="true" className="lucide lucide-clock w-6 h-6"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
            </div>
          </div>
          {/* Metric 3: Confirmed Monthly Disbursement */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs relative overflow-hidden flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">ยืนยันจ่ายแล้วเดือนนี้</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-display font-bold text-emerald-600">5,820</span>
                <span className="text-sm font-medium text-slate-500">บาท</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle-2" aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6"><circle cx="12" cy="12" r="10"></circle><path d="m16 9-5.5 5.5L8 12"></path></svg>
            </div>
          </div>
        </section>
        {/* END: MetricCardsGrid */}
        {/* BEGIN: MainTwoColumnLayout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN: Participants Table */}
          <div className="xl:col-span-8 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden flex flex-col">
            {/* Table Top Actions & Search Bar */}
            <div className="p-4 border-b border-slate-100 bg-white flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative w-full sm:flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="search" aria-hidden="true" className="lucide lucide-search w-4 h-4"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                </div>
                <input className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2 rounded-lg text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition" placeholder="ค้นหาชื่อหรือรหัสนักศึกษา..." type="text" />
              </div>
              {/* Quick Excel Import Action Button */}
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-brand-50 hover:bg-brand-100 text-brand-600 border border-brand-200 rounded-lg text-sm font-medium transition shadow-2xs whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="file-spreadsheet" aria-hidden="true" className="lucide lucide-file-spreadsheet w-4 h-4"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
                <span>นำเข้า Excel / CSV</span>
              </button>
            </div>
            {/* Participants Table Responsive Wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50/75 border-b border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                    <th className="py-3 px-4" scope="col">ชื่อ-สกุล</th>
                    <th className="py-3 px-4" scope="col">รหัสนักศึกษา</th>
                    <th className="py-3 px-4" scope="col">สถานที่ปฏิบัติงาน</th>
                    <th className="py-3 px-3 text-right" scope="col">ชม.</th>
                    <th className="py-3 px-3 text-right" scope="col">จำนวนเงิน</th>
                    <th className="py-3 px-4 text-center" scope="col">สถานะ</th>
                    <th className="py-3 px-4 text-center" scope="col">การจัดการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-900">นาย123 456</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 text-xs">9900000010012</td>
                    <td className="py-3.5 px-4 text-slate-600 text-xs">ศูนย์การศึกษา ลำปาง</td>
                    <td className="py-3.5 px-3 text-right font-medium">91.52</td>
                    <td className="py-3.5 px-3 text-right font-semibold text-slate-900">3,000</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        จ่ายแล้ว
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap text-xs">
                      <span className="text-slate-400 mr-1.5">ยืนยันแล้ว</span>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-900">นาย123 456</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 text-xs">9800000010013</td>
                    <td className="py-3.5 px-4 text-slate-500 text-xs italic">ไม่รู้</td>
                    <td className="py-3.5 px-3 text-right font-medium">44</td>
                    <td className="py-3.5 px-3 text-right font-semibold text-slate-900">1,760</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        จ่ายแล้ว
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap text-xs">
                      <span className="text-slate-400 mr-1.5">ยืนยันแล้ว</span>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-900">นาย123 456</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 text-xs">9800000010015</td>
                    <td className="py-3.5 px-4 text-slate-500 text-xs italic">ไม่รู้</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
                        ไม่มีชั่วโมง
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <button className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-brand-500 hover:text-white text-slate-700 rounded transition border border-slate-200">
                        ยืนยันการออกเงิน
                      </button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-900">นางสาว345 678</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 text-xs">9800000010014</td>
                    <td className="py-3.5 px-4 text-slate-500 text-xs italic">ไม่บอก</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
                        ไม่มีชั่วโมง
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <button className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-brand-500 hover:text-white text-slate-700 rounded transition border border-slate-200">
                        ยืนยันการออกเงิน
                      </button>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-900">นางสาว345 678</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 text-xs">98000000100166</td>
                    <td className="py-3.5 px-4 text-slate-500 text-xs italic">ไม่บอก</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
                        ไม่มีชั่วโมง
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <button className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-brand-500 hover:text-white text-slate-700 rounded transition border border-slate-200">
                        ยืนยันการออกเงิน
                      </button>
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-900">นางสาวกมลชนก เกียรติไพศาล</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 text-xs">9700000010193</td>
                    <td className="py-3.5 px-4 text-slate-600 text-xs">กองกลาง สำนักงานอธิการบดี</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
                        ไม่มีชั่วโมง
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <button className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-brand-500 hover:text-white text-slate-700 rounded transition border border-slate-200">
                        ยืนยันการออกเงิน
                      </button>
                    </td>
                  </tr>
                  {/* Row 7 */}
                  <tr className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-900">นางสาวกมลชนก เจริญสุข</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 text-xs">9700000010047</td>
                    <td className="py-3.5 px-4 text-slate-600 text-xs">กองพัฒนานักศึกษา</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
                        ไม่มีชั่วโมง
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <button className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-brand-500 hover:text-white text-slate-700 rounded transition border border-slate-200">
                        ยืนยันการออกเงิน
                      </button>
                    </td>
                  </tr>
                  {/* Row 8 */}
                  <tr className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-4 font-medium text-slate-900">นายกฤติน พงษ์พาณิชย์</td>
                    <td className="py-3.5 px-4 font-mono text-slate-600 text-xs">9700000010120</td>
                    <td className="py-3.5 px-4 text-slate-600 text-xs">กองกลาง สำนักงานอธิการบดี</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-3 text-right text-slate-400">0</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
                        ไม่มีชั่วโมง
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <button className="px-2.5 py-1 text-xs font-medium bg-slate-100 hover:bg-brand-500 hover:text-white text-slate-700 rounded transition border border-slate-200">
                        ยืนยันการออกเงิน
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Table Pagination Footer */}
            <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>แสดงรายการ 1 ถึง 8 จาก 274 รายการ</span>
              <div className="inline-flex items-center space-x-1">
                <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>ก่อนหน้า</button>
                <button className="px-2.5 py-1 rounded bg-brand-500 text-white font-medium">1</button>
                <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">2</button>
                <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">3</button>
                <span className="px-1 text-slate-400">...</span>
                <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">35</button>
                <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">ถัดไป</button>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN: Sidebar Controls */}
          <div className="xl:col-span-4 space-y-5">
            {/* SIDEBAR CARD 1: Payment Evidence Summary */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-display font-semibold text-slate-900 text-base">หลักฐานการจ่ายเงิน</h3>
                <div className="relative min-w-[130px]">
                  <select className="w-full bg-slate-50 border border-slate-200 text-xs font-medium py-1.5 pl-2.5 pr-6 rounded-md focus:ring-1 focus:ring-brand-500 focus:border-brand-500">
                    <option>ตุลาคม 2569</option>
                    <option>กันยายน 2569</option>
                  </select>
                </div>
              </div>
              {/* Totals summary box */}
              <div className="mt-4 p-3 bg-brand-50/50 rounded-lg border border-brand-100/70 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-500 block">จำนวนผู้รับเงิน</span>
                  <span className="text-lg font-display font-bold text-slate-800">4 <span className="text-xs font-normal text-slate-500">คน</span></span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">รวมยอดเงิน</span>
                  <span className="text-lg font-display font-bold text-brand-600">5,820.00 ฿</span>
                </div>
              </div>
              {/* Mini Payees List */}
              <div className="mt-4 divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-800 font-medium truncate max-w-[180px]">นายกิตติศักดิ์ บุญมา</span>
                  <span className="font-mono text-slate-600">740.00</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-800 font-medium truncate max-w-[180px]">นางสาวกัญญารัตน์ แก้วมณี</span>
                  <span className="font-mono text-slate-600">320.00</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-800 font-medium truncate max-w-[180px]">นาย123 456</span>
                  <span className="font-mono text-slate-600">3,000.00</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-slate-800 font-medium truncate max-w-[180px]">นาย123 456</span>
                  <span className="font-mono text-slate-600">1,760.00</span>
                </div>
              </div>
              {/* Print Evidence Button */}
              <button className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium shadow-xs transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="printer" aria-hidden="true" className="lucide lucide-printer w-4 h-4"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg>
                <span>ปริ้นใบหลักฐานการจ่ายเงิน</span>
              </button>
            </div>
            {/* SIDEBAR CARD 2: Add Participant Trigger Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50/20 to-blue-50/40 border border-brand-200/80 rounded-2xl p-5 shadow-xs group hover:border-brand-500/60 transition-all duration-300">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-brand-500/5 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
              <div className="flex items-start gap-3.5 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-md shadow-brand-500/20 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="user-plus" aria-hidden="true" className="lucide lucide-user-plus w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-slate-900 text-base">เพิ่มรายชื่อผู้เข้าร่วมโครงการ</h3>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-brand-100 text-brand-700">ฟอร์มใหม่</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">กรอกข้อมูลและบันทึกผู้เข้าร่วมรายบุคคลเข้าสู่ระบบ</p>
                </div>
              </div>
              <button className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold rounded-xl shadow-sm shadow-brand-500/25 hover:shadow-md hover:shadow-brand-500/35 active:scale-[0.99] transition-all duration-150 cursor-pointer" id="openAddParticipantModal" onClick={() => setIsModalOpen(true)} type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="plus" aria-hidden="true" className="lucide lucide-plus w-4 h-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                <span>เปิดฟอร์มเพิ่มผู้เข้าร่วม</span>
              </button>
            </div>
            {/* SIDEBAR CARD 3: Delete Yearly Data */}
            <div className="bg-white border border-rose-100 rounded-xl p-5 shadow-xs">
              <h3 className="font-display font-semibold text-rose-600 text-base mb-1.5 flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="alert-triangle" aria-hidden="true" className="lucide lucide-alert-triangle w-4 h-4 text-rose-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                ลบข้อมูลรายปี
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                ลบรายชื่อผู้เข้าร่วม ใบสมัคร บันทึกการปฏิบัติงาน และหลักฐานการจ่ายเงินทั้งหมดของปีที่เลือก
              </p>
              <div className="space-y-3">
                <select className="w-full bg-slate-50 border border-slate-200 text-xs font-medium py-2 px-3 rounded-lg focus:ring-1 focus:ring-rose-500 focus:border-rose-500">
                  <option>ปีการศึกษา 2569 (274 คน)</option>
                  <option>ปีการศึกษา 2568 (310 คน)</option>
                </select>
                <button className="w-full py-2 px-4 border border-rose-300 hover:bg-rose-50 text-rose-600 font-medium text-xs rounded-lg transition">
                  ลบข้อมูลทั้งปี
                </button>
              </div>
            </div>
            {/* SIDEBAR CARD 4: Project Settings */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-slate-900 text-base">ตั้งค่าโครงการ</h3>
                <button className="text-xs text-brand-500 hover:text-brand-600 font-medium flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="edit-2" aria-hidden="true" className="lucide lucide-edit-2 w-3 h-3"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                  แก้ไข
                </button>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
                ปีการศึกษา 2569 • 40 บาท/ชม. • สูงสุด 75 ชม. • <span className="text-emerald-600 font-medium">เปิดรับสมัคร</span>
              </p>
              <button className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-medium text-xs rounded-lg transition border border-slate-200 flex items-center justify-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="key" aria-hidden="true" className="lucide lucide-key w-3.5 h-3.5"><path d="m2 21 9.6-9.6"></path><path d="m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19"></path><circle cx="15.5" cy="7.5" r="5.5"></circle></svg>
                เปลี่ยนรหัสผ่านผู้ดูแลระบบ
              </button>
            </div>
          </div>
        </div>
        {/* END: MainTwoColumnLayout */}
      </main>
      {/* END: MainContentArea */}
      {/* BEGIN: Add Participant Modal Popup */}
      <div aria-labelledby="modalTitle" aria-modal="true" className={`fixed inset-0 z-50 items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-md transition-opacity duration-200 ${isModalOpen ? "flex" : "hidden"}`} id="participantModal" role="dialog" onClick={(event) => { if (event.target === event.currentTarget) setIsModalOpen(false); }}>
        <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden modal-animated my-auto flex flex-col max-h-[94vh]">
          {/* Modal Stepper Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-blue-50/70 via-white to-brand-50/50 border-b border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3.5">
              {/* Dynamic Step Badge */}
              <div className="w-12 h-12 rounded-2xl bg-brand-500 text-white flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-brand-500/25 shrink-0 ring-4 ring-brand-100" id="stepBadgeIcon">
                01
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 tracking-tight leading-snug" id="wizardTitle">
                    ข้อมูลพื้นฐานและประวัตินักศึกษา (Student Profile)
                  </h2>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-100 text-brand-700 font-mono" id="stepPillStatus">
                    ขั้นตอน 1/6
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5" id="wizardSubtitle">
                  หน้านี้กรอก: ชื่อ-สกุล, รหัสนักศึกษา, คณะ/สาขา, ผลการเรียน และข้อมูลติดต่อฉุกเฉิน
                </p>
              </div>
            </div>
            {/* Step Navigation Pills (01 to 06) + Close Button */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <div className="flex items-center bg-slate-100/90 p-1 rounded-full border border-slate-200/80 gap-1 text-xs font-semibold font-mono text-slate-500">
                <button className="px-3 py-1 rounded-full bg-brand-500 text-white shadow-xs transition-all duration-150" id="stepNavBtn1" type="button">01</button>
                <button className="px-2.5 py-1 rounded-full hover:bg-slate-200/80 hover:text-slate-800 transition-all" id="stepNavBtn2" type="button">02</button>
                <button className="px-2.5 py-1 rounded-full hover:bg-slate-200/80 hover:text-slate-800 transition-all" id="stepNavBtn3" type="button">03</button>
                <button className="px-2.5 py-1 rounded-full hover:bg-slate-200/80 hover:text-slate-800 transition-all" id="stepNavBtn4" type="button">04</button>
                <button className="px-2.5 py-1 rounded-full hover:bg-slate-200/80 hover:text-slate-800 transition-all" id="stepNavBtn5" type="button">05</button>
                <button className="px-2.5 py-1 rounded-full hover:bg-slate-200/80 hover:text-slate-800 transition-all" id="stepNavBtn6" type="button">06</button>
              </div>
              <button aria-label="ปิดหน้าต่าง" className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors focus:outline-none ml-1" id="closeParticipantModalBtn" onClick={() => setIsModalOpen(false)} type="button">
                <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              </button>
            </div>
          </div>
          {/* Modal Step Contents Scrollable Area */}
          <div className="p-6 overflow-y-auto space-y-5 text-xs bg-slate-50/30 flex-1">
            {/* STEP 1: Student Profile */}
            <div className="space-y-4" id="wizardStep1">
    
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">ชื่อ - นามสกุล <span className="text-rose-500">*</span></label>
                  <input className="w-full bg-white border border-slate-200 text-xs rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-xs" placeholder="นายณัฐดนัย รัตนกิจไพบูลย์" type="text" defaultValue="นายณัฐดนัย รัตนกิจไพบูลย์" />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">รหัสนักศึกษา <span className="text-rose-500">*</span></label>
                  <input className="w-full bg-white border border-slate-200 text-xs font-mono rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-xs" placeholder="6511011860042" type="text" defaultValue="6511011860042" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-6">
                  <label className="block font-medium text-slate-700 mb-1.5">สาขาวิชา และ คณะ/โรงเรียน</label>
                  <input className="w-full bg-white border border-slate-200 text-xs rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-xs" type="text" defaultValue="วิทยาการคอมพิวเตอร์ • คณะวิทยาศาสตร์และเทคโนโลยี" />
                </div>
                <div className="sm:col-span-3">
                  <label className="block font-medium text-slate-700 mb-1.5">ชั้นปี</label>
                  <select defaultValue="ชั้นปีที่ 3" className="w-full bg-white border border-slate-200 text-xs rounded-lg px-3 py-2.5 text-slate-800 focus:ring-2 focus:ring-brand-500 shadow-xs">
                    <option>ชั้นปีที่ 1</option>
                    <option>ชั้นปีที่ 2</option>
                    <option>ชั้นปีที่ 3</option>
                    <option>ชั้นปีที่ 4</option>
                  </select>
                </div>
                <div className="sm:col-span-3">
                  <label className="block font-medium text-slate-700 mb-1.5">เกรดเฉลี่ยสะสม (GPAX)</label>
                  <input className="w-full bg-white border border-slate-200 text-xs rounded-lg px-3.5 py-2.5 text-slate-800 focus:ring-2 focus:ring-brand-500 shadow-xs font-mono" type="text" defaultValue="3.68" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">หมายเลขโทรศัพท์มือถือ</label>
                  <input className="w-full bg-white border border-slate-200 text-xs font-mono rounded-lg px-3.5 py-2.5 text-slate-800 focus:ring-2 focus:ring-brand-500 shadow-xs" type="text" defaultValue="089-423-8891" />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1.5">อีเมลมหาวิทยาลัย (@mail.dusit.ac.th)</label>
                  <input className="w-full bg-white border border-slate-200 text-xs rounded-lg px-3.5 py-2.5 text-slate-800 focus:ring-2 focus:ring-brand-500 shadow-xs" type="email" defaultValue="natdanai_rat@mail.dusit.ac.th" />
                </div>
              </div>
              <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200 space-y-3">
                <span className="font-medium text-slate-800 block text-xs">ข้อมูลผู้ติดต่อกรณีฉุกเฉิน</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">ชื่อ-นามสกุล ผู้ติดต่อ</label>
                    <input className="w-full bg-white border border-slate-200 text-xs rounded-lg px-3 py-2 text-slate-800 shadow-2xs" type="text" defaultValue="นายสมศักดิ์ รัตนกิจไพบูลย์" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">ความสัมพันธ์</label>
                    <select defaultValue="บิดา" className="w-full bg-white border border-slate-200 text-xs rounded-lg px-3 py-2 text-slate-800 shadow-2xs">
                      <option>บิดา</option>
                      <option>มารดา</option>
                      <option>ผู้ปกครอง</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">เบอร์โทรศัพท์ฉุกเฉิน</label>
                    <input className="w-full bg-white border border-slate-200 text-xs font-mono rounded-lg px-3 py-2 text-slate-800 shadow-2xs" type="text" defaultValue="081-992-1209" />
                  </div>
                </div>
              </div>
            </div>
            {/* STEP 2: Position & Department Preference */}
            {/* STEP 3: Skills & Competencies */}
            {/* STEP 4: Work Location */}
            {/* STEP 5: Available Work Schedule Table (Matches IMAGE_1 exactly) */}
            {/* STEP 6: Summary Verification & Submission */}
          </div>
          {/* Modal Stepper Footer Navigation (Identical to IMAGE_1 Footer) */}
          <div className="px-6 py-4 bg-slate-50/90 border-t border-slate-200/80 flex items-center justify-between shrink-0">
            {/* Left: Back Button */}
            <button className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition shadow-2xs" id="wizardPrevBtn" type="button">
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
              <span>หมวดก่อนหน้า</span>
            </button>
            {/* Right: Close & Next/Submit Buttons */}
            <div className="flex items-center gap-2.5">
              <button className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-800 transition" id="cancelModalBtn" onClick={() => setIsModalOpen(false)} type="button">
                ปิดหน้าต่าง
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 active:scale-[0.99] text-white rounded-xl text-xs font-semibold shadow-md shadow-brand-500/25 transition-all duration-150 cursor-pointer" id="wizardNextBtn" type="button">
                <span id="wizardNextBtnText">บันทึกและไปหมวดถัดไป</span>
                <svg fill="none" height="16" id="wizardNextBtnIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* END: Add Participant Modal Popup */}
      {/* BEGIN: PageFooter */}
      <footer className="mt-auto bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-400">
        <p>© 2569 ศูนย์สารสนเทศและแนะแนวการศึกษาและอาชีพ มหาวิทยาลัยสวนดุสิต (SDU). สงวนลิขสิทธิ์.</p>
      </footer>
      {/* END: PageFooter */}
    </div>
  );
}
