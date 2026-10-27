import "./ApplicationForm.css";

export default function ApplicationForm() {
  return (
    <div className="application-form-page min-h-screen bg-surface-bg font-body-md text-neutral-dark antialiased selection:bg-primary-light selection:text-primary relative overflow-x-hidden">
      <main className="w-full pt-0 bg-surface-bg min-h-screen px-4 sm:px-8 lg:px-24 flex flex-col justify-center">
        <form className="w-full" onSubmit={(event) => event.preventDefault()}>
          <div className="flex flex-col w-full">
            {/* Interactive Form Master Container */}
            <div className="max-w-[1240px] w-full mx-auto pb-32 pt-8">
              {/* Top Status Banner & Header Card */}
              <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-card-border mb-8 relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none">
                </div>
                <div className="absolute right-40 -bottom-20 w-60 h-60 bg-secondary/15 rounded-full blur-2xl pointer-events-none">
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-light border border-secondary/30 text-neutral-dark font-label-sm text-label-sm">
                      <span className="w-2 h-2 rounded-full bg-primary">
                      </span>
                      <span className="font-medium">
                        มหาวิทยาลัยสวนดุสิต • กองพัฒนานักศึกษา
                      </span>
                    </div>
                    <h1 className="font-headline-xl text-2xl sm:text-headline-xl text-neutral-dark tracking-tight">
                      ใบสมัครขอรับทุนการศึกษา โครงการสวนดุสิตเสริมโอกาส (75 ชม.)
                    </h1>
                    <p className="font-body-md text-body-md text-neutral-muted flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        verified_user
                      </span>
                      ประจำปีการศึกษา 2567 • กรุณากรอกข้อมูลและแนบเอกสารให้ครบถ้วนถูกต้องตามความเป็นจริง
                    </p>
                  </div>
                  <div className="flex items-center gap-3.5 self-start md:self-auto bg-tertiary-light/70 border border-tertiary/20 px-4 py-3 rounded-2xl">
                    <div className="w-11 h-11 rounded-xl bg-tertiary text-white flex items-center justify-center font-headline-sm text-headline-sm shadow-sm font-bold">
                      75
                    </div>
                    <div>
                      <div className="font-label-sm text-label-sm text-tertiary font-semibold uppercase">
                        ประเภททุนการศึกษา
                      </div>
                      <div className="font-label-lg text-label-lg text-neutral-dark font-semibold">
                        ปฏิบัติงานเสริมทักษะวิชาชีพ
                      </div>
                    </div>
                  </div>
                </div>
                {/* Academic Step Tracker */}
                <div className="relative z-10 pt-6 border-t border-card-border">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {/* Step 1 (Active) */}
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-primary-light border border-primary/20 text-primary transition-all">
                      <div className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center font-label-sm text-label-sm font-bold">
                        1
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm font-bold text-primary truncate">
                          1. ข้อมูลส่วนตัว
                        </span>
                        <span className="font-body-sm text-body-sm text-primary/80 truncate">
                          ประวัตินักศึกษา
                        </span>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-input-bg border border-card-border/70 text-neutral-muted hover:bg-slate-100 transition-all">
                      <div className="w-7 h-7 rounded-lg bg-slate-200 text-neutral-dark flex items-center justify-center font-label-sm text-label-sm font-semibold">
                        2
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm font-semibold text-neutral-dark truncate">
                          2. ความสนใจ
                        </span>
                        <span className="font-body-sm text-body-sm text-neutral-muted truncate">
                          ลำดับตำแหน่ง
                        </span>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-input-bg border border-card-border/70 text-neutral-muted hover:bg-slate-100 transition-all">
                      <div className="w-7 h-7 rounded-lg bg-slate-200 text-neutral-dark flex items-center justify-center font-label-sm text-label-sm font-semibold">
                        3
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm font-semibold text-neutral-dark truncate">
                          3. ความสามารถ
                        </span>
                        <span className="font-body-sm text-body-sm text-neutral-muted truncate">
                          ทักษะเฉพาะทาง
                        </span>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-input-bg border border-card-border/70 text-neutral-muted hover:bg-slate-100 transition-all">
                      <div className="w-7 h-7 rounded-lg bg-slate-200 text-neutral-dark flex items-center justify-center font-label-sm text-label-sm font-semibold">
                        4
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm font-semibold text-neutral-dark truncate">
                          4. เวลา/สถานที่
                        </span>
                        <span className="font-body-sm text-body-sm text-neutral-muted truncate">
                          จัดตารางงาน
                        </span>
                      </div>
                    </div>
                    {/* Step 5 */}
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-input-bg border border-card-border/70 text-neutral-muted hover:bg-slate-100 transition-all col-span-2 sm:col-span-1">
                      <div className="w-7 h-7 rounded-lg bg-slate-200 text-neutral-dark flex items-center justify-center font-label-sm text-label-sm font-semibold">
                        5
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm font-semibold text-neutral-dark truncate">
                          5. เอกสารแนบ
                        </span>
                        <span className="font-body-sm text-body-sm text-neutral-muted truncate">
                          ตรวจสอบ 3 รายการ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Content Form Stack */}
              <div className="flex flex-col gap-8">
                {/* SECTION 1: Personal Details */}
                <section className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-card-border">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-card-border">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        01
                      </span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-neutral-dark font-semibold">
                          ประวัติส่วนตัว (Personal Details)
                        </h2>
                        <p className="font-body-sm text-body-sm text-neutral-muted">
                          ระบุข้อมูลนักศึกษาปัจจุบันที่สามารถยืนยันตัวตนได้ในระบบทะเบียน
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-primary-light text-primary border border-primary/20 text-label-sm font-label-sm rounded-full font-medium">
                      ส่วนข้อมูลบังคับ
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-8 items-start">
                    {/* 2-Column Fields Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full">
                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-neutral-dark font-medium flex items-center justify-between">
                          <span className="">
                            ชื่อ - นามสกุล
                          </span>
                          <span className="text-error text-label-sm font-label-sm">
                            * จำเป็น
                          </span>
                        </label>
                        <input className="h-11 px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border placeholder:text-neutral-muted/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 outline-none transition-all font-body-md text-body-md" placeholder="ระบุคำนำหน้าชื่อ นาย / นางสาว และนามสกุล" type="text" defaultValue="นายณัฐดนัย รัตนกิจไพบูลย์" />
                      </div>
                      {/* Student ID */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-neutral-dark font-medium flex items-center justify-between">
                          <span className="">
                            รหัสนักศึกษา
                          </span>
                          <span className="text-error text-label-sm font-label-sm">
                            * จำเป็น
                          </span>
                        </label>
                        <input className="h-11 px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border placeholder:text-neutral-muted/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 outline-none transition-all font-body-md text-body-md" placeholder="เช่น 6511011860024" type="text" defaultValue="6511011860042" />
                      </div>
                      {/* Major & Faculty */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-neutral-dark font-medium">
                          สาขาวิชา และ คณะ/โรงเรียน
                        </label>
                        <input className="h-11 px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border placeholder:text-neutral-muted/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 outline-none transition-all font-body-md text-body-md" placeholder="เช่น สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์ คณะวิทยาศาสตร์และเทคโนโลยี" type="text" defaultValue="วิทยาการคอมพิวเตอร์ • คณะวิทยาศาสตร์และเทคโนโลยี" />
                      </div>
                      {/* Year & GPAX Matrix */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-md text-label-md text-neutral-dark font-medium">
                            ชั้นปี
                          </label>
                          <div className="relative">
                            <select className="h-11 w-full px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border outline-none appearance-none font-body-md text-body-md cursor-pointer focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 transition-all" defaultValue="ชั้นปีที่ 3">
                              <option>
                                ชั้นปีที่ 1
                              </option>
                              <option>
                                ชั้นปีที่ 2
                              </option>
                              <option>
                                ชั้นปีที่ 3
                              </option>
                              <option>
                                ชั้นปีที่ 4
                              </option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-neutral-muted pointer-events-none">
                              expand_more
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-label-md text-label-md text-neutral-dark font-medium">
                            เกรดเฉลี่ย (GPAX)
                          </label>
                          <input className="h-11 px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border placeholder:text-neutral-muted/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 outline-none transition-all font-body-md text-body-md font-semibold text-primary" placeholder="3.50" type="text" defaultValue="3.68" />
                        </div>
                      </div>
                      {/* Contact Address */}
                      <div className="md:col-span-2 flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-neutral-dark font-medium">
                          ที่อยู่ปัจจุบันที่ติดต่อได้สะดวก
                        </label>
                        <input className="h-11 px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border placeholder:text-neutral-muted/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 outline-none transition-all font-body-md text-body-md" placeholder="เลขที่ห้อง/หอพัก, ซอย, ถนน, แขวง/ตำบล, เขต/อำเภอ, จังหวัด, รหัสไปรษณีย์" type="text" defaultValue="295 ถนนนครราชสีมา แขวงดุสิต เขตดุสิต กรุงเทพมหานคร 10300" />
                      </div>
                      {/* Phone Number */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-neutral-dark font-medium">
                          หมายเลขโทรศัพท์มือถือ
                        </label>
                        <input className="h-11 px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border placeholder:text-neutral-muted/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 outline-none transition-all font-body-md text-body-md" placeholder="08x-xxx-xxxx" type="tel" defaultValue="089-423-8891" />
                      </div>
                      {/* Emergency Relationship */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-neutral-dark font-medium">
                          ความสัมพันธ์ผู้ติดต่อฉุกเฉิน
                        </label>
                        <div className="relative">
                          <select className="h-11 w-full px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border outline-none appearance-none font-body-md text-body-md cursor-pointer focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 transition-all" defaultValue="บิดา">
                            <option>
                              บิดา
                            </option>
                            <option>
                              มารดา
                            </option>
                            <option>
                              ผู้ปกครอง
                            </option>
                            <option>
                              ญาติสายตรง
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-neutral-muted pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                      {/* Emergency Contact Details */}
                      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-input-bg border border-card-border rounded-xl w-full">
                        <div className="flex flex-col gap-1">
                          <span className="font-label-sm text-label-sm text-neutral-muted font-medium">
                            ชื่อ-นามสกุล ผู้ติดต่อฉุกเฉิน
                          </span>
                          <input className="h-10 px-3 rounded-lg bg-white border border-card-border text-neutral-dark placeholder:text-neutral-muted/60 outline-none text-body-md font-body-md focus:border-primary focus:ring-2 focus:ring-secondary/40" placeholder="นาย/นาง/นางสาว..." type="text" defaultValue="นายสมศักดิ์ รัตนกิจไพบูลย์" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-label-sm text-label-sm text-neutral-muted font-medium">
                            โทรศัพท์ผู้ติดต่อกรณีฉุกเฉิน
                          </span>
                          <input className="h-10 px-3 rounded-lg bg-white border border-card-border text-neutral-dark placeholder:text-neutral-muted/60 outline-none text-body-md font-body-md focus:border-primary focus:ring-2 focus:ring-secondary/40" placeholder="08x-xxx-xxxx" type="tel" defaultValue="081-992-1209" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* SECTION 2: Interested Positions */}
                <section className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-card-border">
                  <div className="flex items-center justify-between pb-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        02
                      </span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-neutral-dark font-semibold">
                          ตำแหน่งงานที่สนใจ (Interested Positions)
                        </h2>
                        <p className="font-body-sm text-body-sm text-neutral-muted">
                          ระบุลักษณะงานหรือตำแหน่งที่ประสงค์จะปฏิบัติงานเรียงตามลำดับความต้องการ (3 อันดับ)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    {/* Rank 1 Card */}
                    <div className="p-5 rounded-2xl bg-primary-light/40 border border-primary/20 flex flex-col justify-between hover:bg-primary-light/60 transition-all">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-md bg-primary text-white font-label-sm text-label-sm font-bold">
                            อันดับที่ 1
                          </span>
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            stars
                          </span>
                        </div>
                        <div className="relative">
                          <select className="w-full h-11 px-3.5 rounded-xl bg-white text-neutral-dark font-body-md text-body-md appearance-none outline-none border border-card-border focus:border-primary focus:ring-2 focus:ring-secondary/40 cursor-pointer" defaultValue="งานสนับสนุนธุรการและสารบรรณ">
                            <option>
                              งานสนับสนุนธุรการและสารบรรณ
                            </option>
                            <option>
                              งานบริการและช่วยกิจกรรมนักศึกษา
                            </option>
                            <option>
                              งานห้องปฏิบัติการคอมพิวเตอร์และโสตฯ
                            </option>
                            <option>
                              งานห้องสมุดและศูนย์สารสนเทศ
                            </option>
                            <option>
                              งานสื่อประชาสัมพันธ์และการออกแบบ
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-neutral-muted pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 font-body-sm text-body-sm text-primary font-medium flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          check_circle
                        </span>
                        ความสนใจหลักอันดับแรก
                      </p>
                    </div>
                    {/* Rank 2 Card */}
                    <div className="p-5 rounded-2xl bg-input-bg border border-card-border flex flex-col justify-between hover:bg-slate-100 transition-all">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-md bg-slate-200 text-neutral-dark font-label-sm text-label-sm font-bold">
                            อันดับที่ 2
                          </span>
                          <span className="material-symbols-outlined text-neutral-muted text-[20px]">
                            bookmark
                          </span>
                        </div>
                        <div className="relative">
                          <select className="w-full h-11 px-3.5 rounded-xl bg-white text-neutral-dark font-body-md text-body-md appearance-none outline-none border border-card-border focus:border-primary focus:ring-2 focus:ring-secondary/40 cursor-pointer" defaultValue="งานห้องปฏิบัติการคอมพิวเตอร์และโสตฯ">
                            <option>
                              งานสนับสนุนธุรการและสารบรรณ
                            </option>
                            <option>
                              งานบริการและช่วยกิจกรรมนักศึกษา
                            </option>
                            <option>
                              งานห้องปฏิบัติการคอมพิวเตอร์และโสตฯ
                            </option>
                            <option>
                              งานห้องสมุดและศูนย์สารสนเทศ
                            </option>
                            <option>
                              งานสื่อประชาสัมพันธ์และการออกแบบ
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-neutral-muted pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 font-body-sm text-body-sm text-neutral-muted flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-neutral-muted">
                          info
                        </span>
                        ความสนใจสำรองอันดับ 1
                      </p>
                    </div>
                    {/* Rank 3 Card */}
                    <div className="p-5 rounded-2xl bg-input-bg border border-card-border flex flex-col justify-between hover:bg-slate-100 transition-all">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-md bg-slate-200 text-neutral-dark font-label-sm text-label-sm font-bold">
                            อันดับที่ 3
                          </span>
                          <span className="material-symbols-outlined text-neutral-muted text-[20px]">
                            bookmark_border
                          </span>
                        </div>
                        <div className="relative">
                          <select className="w-full h-11 px-3.5 rounded-xl bg-white text-neutral-dark font-body-md text-body-md appearance-none outline-none border border-card-border focus:border-primary focus:ring-2 focus:ring-secondary/40 cursor-pointer" defaultValue="งานบริการและช่วยกิจกรรมนักศึกษา">
                            <option>
                              งานสนับสนุนธุรการและสารบรรณ
                            </option>
                            <option>
                              งานบริการและช่วยกิจกรรมนักศึกษา
                            </option>
                            <option>
                              งานห้องปฏิบัติการคอมพิวเตอร์และโสตฯ
                            </option>
                            <option>
                              งานห้องสมุดและศูนย์สารสนเทศ
                            </option>
                            <option>
                              งานสื่อประชาสัมพันธ์และการออกแบบ
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-neutral-muted pointer-events-none">
                            expand_more
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 font-body-sm text-body-sm text-neutral-muted flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-neutral-muted">
                          info
                        </span>
                        ความสนใจสำรองอันดับ 2
                      </p>
                    </div>
                  </div>
                </section>
                {/* SECTION 3: Special Skills */}
                <section className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-card-border">
                  <div className="flex items-center justify-between pb-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        03
                      </span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-neutral-dark font-semibold">
                          ความสามารถพิเศษ (Special Skills)
                        </h2>
                        <p className="font-body-sm text-body-sm text-neutral-muted">
                          ระบุทักษะความสามารถเด่นเพื่อประโยชน์ในการพิจารณาจัดสรรหน่วยงานที่เหมาะสม
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {/* Skill 1 */}
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-neutral-dark font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary">
                        </span>
                        <span className="">
                          ความสามารถพิเศษด้านที่ 1
                        </span>
                      </label>
                      <input className="w-full h-11 px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border placeholder:text-neutral-muted/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 outline-none transition-all font-body-md text-body-md" placeholder="เช่น การใช้โปรแกรม Microsoft Office ขั้นสูง, Photoshop, Canva, ถ่ายภาพ" type="text" defaultValue="การจัดการฐานข้อมูล Excel, กราฟิก Canva & Figma, ซ่อมบำรุงคอมพิวเตอร์เบื้องต้น" />
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-light border border-secondary/40 text-neutral-dark font-label-sm text-label-sm font-medium">
                          #MS Office
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-light border border-secondary/40 text-neutral-dark font-label-sm text-label-sm font-medium">
                          #Canva Pro
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-light border border-secondary/40 text-neutral-dark font-label-sm text-label-sm font-medium">
                          #IT Support
                        </span>
                      </div>
                    </div>
                    {/* Skill 2 */}
                    <div className="space-y-2">
                      <label className="font-label-md text-label-md text-neutral-dark font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary">
                        </span>
                        <span className="">
                          ความสามารถพิเศษด้านที่ 2
                        </span>
                      </label>
                      <input className="w-full h-11 px-4 rounded-xl bg-input-bg text-neutral-dark border border-card-border placeholder:text-neutral-muted/60 focus:bg-white focus:border-primary focus:ring-2 focus:ring-secondary/40 outline-none transition-all font-body-md text-body-md" placeholder="เช่น ภาษาอังกฤษเพื่อการสื่อสาร, การตัดต่อวิดีโอ (Premiere Pro/CapCut), พิธีกร" type="text" defaultValue="การสื่อสารภาษาอังกฤษระดับดี, การตัดต่อคลิปวิดีโอสั้น TikTok/Reels, งานประสานงาน" />
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-light border border-secondary/40 text-neutral-dark font-label-sm text-label-sm font-medium">
                          #English Communication
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-light border border-secondary/40 text-neutral-dark font-label-sm text-label-sm font-medium">
                          #Video Editing
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-light border border-secondary/40 text-neutral-dark font-label-sm text-label-sm font-medium">
                          #Coordination
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                {/* SECTION 4: Work Location */}
                <section className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-card-border">
                  <div className="flex items-center justify-between pb-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        04
                      </span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-neutral-dark font-semibold">
                          สถานที่ปฏิบัติงาน (Work Location)
                        </h2>
                        <p className="font-body-sm text-body-sm text-neutral-muted">
                          เลือกพื้นที่วิทยาเขตหรือศูนย์การศึกษาที่ท่านประสงค์จะเข้าปฏิบัติงาน
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    {/* Location 1 */}
                    <label className="cursor-pointer">
                      <input defaultChecked className="peer sr-only" name="work_location" type="radio" />
                      <div className="p-5 rounded-2xl bg-input-bg border border-card-border peer-checked:bg-primary-light/50 peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-secondary/40 transition-all flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center mt-0.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary">
                          </span>
                        </div>
                        <div>
                          <div className="font-label-lg text-label-lg font-semibold text-neutral-dark">
                            ในมหาวิทยาลัย (กทม.)
                          </div>
                          <p className="font-body-sm text-body-sm text-neutral-muted mt-1">
                            พื้นที่มหาวิทยาลัยสวนดุสิต ถ.นครราชสีมา และศูนย์วิทยาศาสตร์ ถ.สิรินธร
                          </p>
                        </div>
                      </div>
                    </label>
                    {/* Location 2 */}
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="work_location" type="radio" />
                      <div className="p-5 rounded-2xl bg-input-bg border border-card-border peer-checked:bg-primary-light/50 peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-secondary/40 transition-all flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-white border border-card-border flex items-center justify-center mt-0.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-transparent">
                          </span>
                        </div>
                        <div>
                          <div className="font-label-lg text-label-lg font-semibold text-neutral-dark">
                            วิทยาเขตสุพรรณบุรี
                          </div>
                          <p className="font-body-sm text-body-sm text-neutral-muted mt-1">
                            โครงการจัดตั้งวิทยาเขตสุพรรณบุรี ต.โคกโคเฒ่า อ.เมือง จ.สุพรรณบุรี
                          </p>
                        </div>
                      </div>
                    </label>
                    {/* Location 3 */}
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="work_location" type="radio" />
                      <div className="p-5 rounded-2xl bg-input-bg border border-card-border peer-checked:bg-primary-light/50 peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-secondary/40 transition-all flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-white border border-card-border flex items-center justify-center mt-0.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-transparent">
                          </span>
                        </div>
                        <div>
                          <div className="font-label-lg text-label-lg font-semibold text-neutral-dark">
                            ศูนย์การศึกษาภูมิภาค
                          </div>
                          <p className="font-body-sm text-body-sm text-neutral-muted mt-1">
                            ศูนย์การศึกษา ลำปาง / หัวหิน / ตรัง / นครนายก
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </section>
                {/* SECTION 5: Available Work Schedule */}
                <section className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-card-border">
                  <div className="flex items-center justify-between pb-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        05
                      </span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-neutral-dark font-semibold">
                          วันและเวลาที่สามารถปฏิบัติงานได้ (Available Work Schedule)
                        </h2>
                        <p className="font-body-sm text-body-sm text-neutral-muted">
                          กาเลือกช่วงเวลาที่ไม่มีตารางเรียนและสะดวกเข้าปฏิบัติงานประจำสัปดาห์
                        </p>
                      </div>
                    </div>
                    <span className="text-label-sm font-label-sm text-tertiary bg-tertiary-light border border-tertiary/30 px-3 py-1 rounded-full font-semibold">
                      รวม 75 ชั่วโมงตลอดภาคเรียน
                    </span>
                  </div>
                  {/* Schedule Planner Matrix */}
                  <div className="overflow-x-auto pt-4">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-input-bg border-y border-card-border text-neutral-muted font-label-sm text-label-sm">
                          <th className="py-3.5 px-4 font-semibold text-neutral-dark">
                            วันทำการ
                          </th>
                          <th className="py-3.5 px-4 font-semibold text-center text-neutral-dark">
                            ช่วงเช้า (08.30 - 12.30 น.)
                          </th>
                          <th className="py-3.5 px-4 font-semibold text-center text-neutral-dark">
                            ช่วงบ่าย (13.00 - 16.30 น.)
                          </th>
                          <th className="py-3.5 px-4 font-semibold text-neutral-dark">
                            ระบุเวลาว่างเพิ่มเติม / หมายเหตุ
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-card-border font-body-md text-body-md">
                        {/* Monday */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-medium text-neutral-dark flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400">
                            </span>
                            วันจันทร์
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4">
                            <input className="h-8 px-3 rounded-lg bg-input-bg border border-card-border text-body-sm font-body-sm text-neutral-dark outline-none w-full max-w-xs focus:bg-white focus:border-primary focus:ring-1 focus:ring-secondary" placeholder="เช่น ว่างตั้งแต่ 10.00 น." type="text" />
                          </td>
                        </tr>
                        {/* Tuesday */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-medium text-neutral-dark flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-pink-400">
                            </span>
                            วันอังคาร
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4">
                            <input className="h-8 px-3 rounded-lg bg-input-bg border border-card-border text-body-sm font-body-sm text-neutral-dark outline-none w-full max-w-xs focus:bg-white focus:border-primary focus:ring-1 focus:ring-secondary" placeholder="ว่างเต็มช่วงบ่าย" type="text" defaultValue="สะดวกปฏิบัติงานต่อเนื่องถึง 17.00 น." />
                          </td>
                        </tr>
                        {/* Wednesday */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-medium text-neutral-dark flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400">
                            </span>
                            วันพุธ
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4">
                            <input className="h-8 px-3 rounded-lg bg-input-bg border border-card-border text-body-sm font-body-sm text-neutral-dark outline-none w-full max-w-xs focus:bg-white focus:border-primary focus:ring-1 focus:ring-secondary" placeholder="เช่น ไม่มีเรียนทั้งวัน" type="text" defaultValue="ไม่มีตารางเรียนทั้งวัน (ว่างเต็มวัน)" />
                          </td>
                        </tr>
                        {/* Thursday */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-medium text-neutral-dark flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-orange-400">
                            </span>
                            วันพฤหัสบดี
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4">
                            <input className="h-8 px-3 rounded-lg bg-input-bg border border-card-border text-body-sm font-body-sm text-neutral-dark outline-none w-full max-w-xs focus:bg-white focus:border-primary focus:ring-1 focus:ring-secondary" placeholder="มีเรียนบรรยายเต็มวัน" type="text" />
                          </td>
                        </tr>
                        {/* Friday */}
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-3.5 px-4 font-medium text-neutral-dark flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400">
                            </span>
                            วันศุกร์
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <input className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                          </td>
                          <td className="py-3.5 px-4">
                            <input className="h-8 px-3 rounded-lg bg-input-bg border border-card-border text-body-sm font-body-sm text-neutral-dark outline-none w-full max-w-xs focus:bg-white focus:border-primary focus:ring-1 focus:ring-secondary" placeholder="-" type="text" />
                          </td>
                        </tr>
                        {/* Weekend Days (Sat / Sun) */}
                      </tbody>
                    </table>
                  </div>
                </section>
                {/* SECTION 6: Required Attachments */}
                <section className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-card-border">
                  <div className="flex items-center justify-between pb-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                        06
                      </span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-neutral-dark font-semibold">
                          หลักฐานที่ต้องแนบ (Required Attachments)
                        </h2>
                        <p className="font-body-sm text-body-sm text-neutral-muted">
                          รายการเอกสารหลักฐานสำคัญตามระเบียบการรับสมัคร (โปรดตรวจสอบและลงลายมือชื่อรับรองสำเนาถูกต้อง)
                        </p>
                      </div>
                    </div>
                    <span className="text-label-sm font-label-sm text-neutral-muted bg-input-bg border border-card-border px-3 py-1 rounded-full">
                      เอกสารประกอบ 2 รายการ
                    </span>
                  </div>
                  <div className="grid grid-cols-1 pt-4 md:grid-cols-2 gap-6">
                    <label className="p-5 rounded-2xl bg-input-bg border border-card-border flex flex-col justify-between cursor-pointer hover:bg-slate-100 transition-all">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-[22px]">
                              badge
                            </span>
                          </div>
                          <input defaultChecked className="w-5 h-5 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                        </div>
                        <div>
                          <h3 className="font-label-lg text-label-lg font-semibold text-neutral-dark">
                            สำเนาบัตรประจำตัวนักศึกษา
                          </h3>
                          <p className="font-body-sm text-body-sm text-neutral-muted mt-1">
                            (พร้อมลงชื่อรับรองสำเนาถูกต้อง)
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 font-body-sm text-body-sm text-primary font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          check_circle
                        </span>
                        ตรวจสอบเรียบร้อย
                      </p>
                    </label>
                    <label className="p-5 rounded-2xl bg-input-bg border border-card-border flex flex-col justify-between cursor-pointer hover:bg-slate-100 transition-all">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-[22px]">
                              id_card
                            </span>
                          </div>
                          <input defaultChecked className="w-5 h-5 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                        </div>
                        <div>
                          <h3 className="font-label-lg text-label-lg font-semibold text-neutral-dark">
                            สำเนาบัตรประจำตัวประชาชน
                          </h3>
                          <p className="font-body-sm text-body-sm text-neutral-muted mt-1">
                            (พร้อมลงชื่อรับรองสำเนาถูกต้อง)
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 font-body-sm text-body-sm text-primary font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          check_circle
                        </span>
                        ตรวจสอบเรียบร้อย
                      </p>
                    </label>
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-secondary-light/50 border border-secondary/30 flex items-center gap-3 text-neutral-dark">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      info
                    </span>
                    <span className="font-body-sm text-body-sm">
                      โปรดแนบเอกสารจริงที่มีการลงลายมือชื่อรับรองสำเนาถูกต้องฉบับจริงพร้อมใบสมัครยื่นต่อกองพัฒนานักศึกษา
                    </span>
                  </div>
                </section>
              </div>
            </div>
            {/* Bottom Floating Pill Action Bar (Widescreen Centered) */}
            <div className="fixed bottom-6 inset-x-0 z-30 flex justify-center px-4 pointer-events-none">
              <div className="w-full max-w-4xl bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-full p-4 md:p-2.5 md:px-6 shadow-xl border border-card-border flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto">
                {/* Legal Checkbox Acknowledgment */}
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-secondary border-card-border accent-primary cursor-pointer" type="checkbox" />
                  <span className="font-body-sm text-body-sm text-neutral-dark font-medium">
                    ข้าพเจ้าขอรับรองว่าข้อความดังกล่าวข้างต้นเป็นความจริงทุกประการ
                  </span>
                </label>
                {/* Action Buttons */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  {/* Download Draft PDF */}
                  <button className="px-4 py-2.5 rounded-full bg-input-bg border border-card-border text-neutral-dark font-label-md text-label-md hover:bg-slate-100 transition-colors flex items-center gap-2" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    <span className="hidden sm:inline">
                      ดาวน์โหลดฟอร์มใบสมัคร PDF
                    </span>
                  </button>
                  {/* Primary CTA Submit */}
                  <button className="px-5 py-2.5 rounded-full bg-primary text-white font-label-md text-label-md font-semibold shadow-md shadow-primary/20 hover:bg-primary-hover transition-colors flex items-center gap-2" type="submit">
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                    <span>ยืนยันและส่งใบสมัคร</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
      <footer className="w-full bg-transparent py-space-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-label-sm text-label-sm text-neutral-muted">
            © 2025 Suan Dusit University • ระบบสารสนเทศการพัฒนาโครงการนักศึกษา มหาวิทยาลัยสวนดุสิต
          </p>
        </div>
      </footer>
    </div>
  );
}
