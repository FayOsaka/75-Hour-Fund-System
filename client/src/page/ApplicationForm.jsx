import React from "react";

export default function ApplicationForm() {
  return (
    <>
      {/* Import Material Symbols Outlined Font */}
      <style>
        {`@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");`}
      </style>

      <div className="application-form-page relative min-h-screen overflow-x-hidden bg-surface-bg font-body-md text-neutral-dark antialiased selection:bg-primary-light selection:text-primary [&_table]:min-w-[760px]">
        <main className="flex min-h-screen w-full flex-col justify-center bg-surface-bg px-4 pt-0 sm:px-8 lg:px-24">
          <form className="w-full" onSubmit={(event) => event.preventDefault()}>
            <div className="flex w-full flex-col">
              {/* Interactive Form Master Container */}
              <div className="mx-auto w-full max-w-[1240px] pb-32 pt-8">
                {/* Top Status Banner & Header Card */}
                <div className="border-card-border relative mb-8 overflow-hidden rounded-2xl border bg-white p-5 shadow-sm sm:p-8">
                  <div className="bg-primary/5 pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full blur-3xl"></div>
                  <div className="bg-secondary/15 pointer-events-none absolute -bottom-20 right-40 h-60 w-60 rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex flex-col justify-between gap-6 pb-6 md:flex-row md:items-center">
                    <div className="space-y-3">
                      <div className="bg-secondary-light border-secondary/30 text-label-sm font-label-sm inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-neutral-dark">
                        <span className="bg-primary h-2 w-2 rounded-full"></span>
                        <span className="font-medium">
                          มหาวิทยาลัยสวนดุสิต • กองพัฒนานักศึกษา
                        </span>
                      </div>
                      <h1 className="text-headline-xl font-headline-xl tracking-tight text-neutral-dark text-2xl sm:text-headline-xl">
                        ใบสมัครขอรับทุนการศึกษา โครงการสวนดุสิตเสริมโอกาส (75 ชม.)
                      </h1>
                      <p className="text-body-md font-body-md text-neutral-muted flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          verified_user
                        </span>
                        ประจำปีการศึกษา 2567 • กรุณากรอกข้อมูลและแนบเอกสารให้ครบถ้วนถูกต้องตามความเป็นจริง
                      </p>
                    </div>
                    <div className="bg-tertiary-light/70 border-tertiary/20 flex items-center gap-3.5 self-start rounded-2xl border px-4 py-3 md:self-auto">
                      <div className="bg-tertiary text-headline-sm font-headline-sm flex h-11 w-11 items-center justify-center rounded-xl font-bold text-white shadow-sm">
                        75
                      </div>
                      <div>
                        <div className="text-label-sm font-label-sm text-tertiary font-semibold uppercase">
                          ประเภททุนการศึกษา
                        </div>
                        <div className="text-label-lg font-label-lg font-semibold text-neutral-dark">
                          ปฏิบัติงานเสริมทักษะวิชาชีพ
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Academic Step Tracker */}
                  <div className="border-card-border relative z-10 border-t pt-6">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                      {/* Step 1 (Active) */}
                      <div className="bg-primary-light border-primary/20 text-primary flex items-center gap-2.5 rounded-xl border p-2 transition-all">
                        <div className="bg-primary text-label-sm font-label-sm flex h-7 w-7 items-center justify-center rounded-lg font-bold text-white">
                          1
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <span className="text-label-sm font-label-sm text-primary truncate font-bold">
                            1. ข้อมูลส่วนตัว
                          </span>
                          <span className="text-body-sm font-body-sm text-primary/80 truncate">
                            ประวัตินักศึกษา
                          </span>
                        </div>
                      </div>
                      {/* Step 2 */}
                      <div className="bg-input-bg border-card-border/70 text-neutral-muted flex items-center gap-2.5 rounded-xl border p-2 transition-all hover:bg-slate-100">
                        <div className="text-label-sm font-label-sm flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200 font-semibold text-neutral-dark">
                          2
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <span className="text-label-sm font-label-sm truncate font-semibold text-neutral-dark">
                            2. ความสนใจ
                          </span>
                          <span className="text-body-sm font-body-sm text-neutral-muted truncate">
                            ลำดับตำแหน่ง
                          </span>
                        </div>
                      </div>
                      {/* Step 3 */}
                      <div className="bg-input-bg border-card-border/70 text-neutral-muted flex items-center gap-2.5 rounded-xl border p-2 transition-all hover:bg-slate-100">
                        <div className="text-label-sm font-label-sm flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200 font-semibold text-neutral-dark">
                          3
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <span className="text-label-sm font-label-sm truncate font-semibold text-neutral-dark">
                            3. ความสามารถ
                          </span>
                          <span className="text-body-sm font-body-sm text-neutral-muted truncate">
                            ทักษะเฉพาะทาง
                          </span>
                        </div>
                      </div>
                      {/* Step 4 */}
                      <div className="bg-input-bg border-card-border/70 text-neutral-muted flex items-center gap-2.5 rounded-xl border p-2 transition-all hover:bg-slate-100">
                        <div className="text-label-sm font-label-sm flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200 font-semibold text-neutral-dark">
                          4
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <span className="text-label-sm font-label-sm truncate font-semibold text-neutral-dark">
                            4. เวลา/สถานที่
                          </span>
                          <span className="text-body-sm font-body-sm text-neutral-muted truncate">
                            จัดตารางงาน
                          </span>
                        </div>
                      </div>
                      {/* Step 5 */}
                      <div className="bg-input-bg border-card-border/70 text-neutral-muted col-span-2 flex items-center gap-2.5 rounded-xl border p-2 transition-all hover:bg-slate-100 sm:col-span-1">
                        <div className="text-label-sm font-label-sm flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200 font-semibold text-neutral-dark">
                          5
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <span className="text-label-sm font-label-sm truncate font-semibold text-neutral-dark">
                            5. เอกสารแนบ
                          </span>
                          <span className="text-body-sm font-body-sm text-neutral-muted truncate">
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
                  <section className="border-card-border rounded-2xl border bg-white p-5 shadow-sm sm:p-8">
                    <div className="border-card-border mb-6 flex items-center justify-between border-b pb-6">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary-light text-primary text-headline-sm font-headline-sm flex h-9 w-9 items-center justify-center rounded-xl font-bold">
                          01
                        </span>
                        <div>
                          <h2 className="text-headline-md font-headline-md font-semibold text-neutral-dark">
                            ประวัติส่วนตัว (Personal Details)
                          </h2>
                          <p className="text-body-sm font-body-sm text-neutral-muted">
                            ระบุข้อมูลนักศึกษาปัจจุบันที่สามารถยืนยันตัวตนได้ในระบบทะเบียน
                          </p>
                        </div>
                      </div>
                      <span className="bg-primary-light text-primary border-primary/20 text-label-sm font-label-sm rounded-full border px-3 py-1 font-medium">
                        ส่วนข้อมูลบังคับ
                      </span>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-8">
                      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
                        {/* Full Name */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-label-md font-label-md flex items-center justify-between font-medium text-neutral-dark">
                            <span>ชื่อ - นามสกุล</span>
                            <span className="text-error text-label-sm font-label-sm">
                              * จำเป็น
                            </span>
                          </label>
                          <input
                            className="bg-input-bg border-card-border placeholder:text-neutral-muted/60 focus:ring-secondary/40 text-body-md font-body-md h-11 rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                            placeholder="ระบุคำนำหน้าชื่อ นาย / นางสาว และนามสกุล"
                            type="text"
                            defaultValue="นายณัฐดนัย รัตนกิจไพบูลย์"
                          />
                        </div>
                        {/* Student ID */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-label-md font-label-md flex items-center justify-between font-medium text-neutral-dark">
                            <span>รหัสนักศึกษา</span>
                            <span className="text-error text-label-sm font-label-sm">
                              * จำเป็น
                            </span>
                          </label>
                          <input
                            className="bg-input-bg border-card-border placeholder:text-neutral-muted/60 focus:ring-secondary/40 text-body-md font-body-md h-11 rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                            placeholder="เช่น 6511011860024"
                            type="text"
                            defaultValue="6511011860042"
                          />
                        </div>
                        {/* Major & Faculty */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-label-md font-label-md font-medium text-neutral-dark">
                            สาขาวิชา และ คณะ/โรงเรียน
                          </label>
                          <input
                            className="bg-input-bg border-card-border placeholder:text-neutral-muted/60 focus:ring-secondary/40 text-body-md font-body-md h-11 rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                            placeholder="เช่น สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์ คณะวิทยาศาสตร์และเทคโนโลยี"
                            type="text"
                            defaultValue="วิทยาการคอมพิวเตอร์ • คณะวิทยาศาสตร์และเทคโนโลยี"
                          />
                        </div>
                        {/* Year & GPAX Matrix */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-label-md font-label-md font-medium text-neutral-dark">
                              ชั้นปี
                            </label>
                            <div className="relative">
                              <select
                                className="bg-input-bg border-card-border text-body-md font-body-md focus:ring-secondary/40 h-11 w-full cursor-pointer appearance-none rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                                defaultValue="ชั้นปีที่ 3"
                              >
                                <option>ชั้นปีที่ 1</option>
                                <option>ชั้นปีที่ 2</option>
                                <option>ชั้นปีที่ 3</option>
                                <option>ชั้นปีที่ 4</option>
                              </select>
                              <span className="material-symbols-outlined text-neutral-muted pointer-events-none absolute right-3 top-3 text-[18px]">
                                expand_more
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-label-md font-label-md font-medium text-neutral-dark">
                              เกรดเฉลี่ย (GPAX)
                            </label>
                            <input
                              className="bg-input-bg border-card-border placeholder:text-neutral-muted/60 text-primary focus:ring-secondary/40 text-body-md font-body-md h-11 rounded-xl border px-4 font-semibold text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                              placeholder="3.50"
                              type="text"
                              defaultValue="3.68"
                            />
                          </div>
                        </div>
                        {/* Contact Address */}
                        <div className="flex flex-col gap-1.5 md:col-span-2">
                          <label className="text-label-md font-label-md font-medium text-neutral-dark">
                            ที่อยู่ปัจจุบันที่ติดต่อได้สะดวก
                          </label>
                          <input
                            className="bg-input-bg border-card-border placeholder:text-neutral-muted/60 focus:ring-secondary/40 text-body-md font-body-md h-11 rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                            placeholder="เลขที่ห้อง/หอพัก, ซอย, ถนน, แขวง/ตำบล, เขต/อำเภอ, จังหวัด, รหัสไปรษณีย์"
                            type="text"
                            defaultValue="295 ถนนนครราชสีมา แขวงดุสิต เขตดุสิต กรุงเทพมหานคร 10300"
                          />
                        </div>
                        {/* Phone Number */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-label-md font-label-md font-medium text-neutral-dark">
                            หมายเลขโทรศัพท์มือถือ
                          </label>
                          <input
                            className="bg-input-bg border-card-border placeholder:text-neutral-muted/60 focus:ring-secondary/40 text-body-md font-body-md h-11 rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                            placeholder="08x-xxx-xxxx"
                            type="tel"
                            defaultValue="089-423-8891"
                          />
                        </div>
                        {/* Emergency Relationship */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-label-md font-label-md font-medium text-neutral-dark">
                            ความสัมพันธ์ผู้ติดต่อฉุกเฉิน
                          </label>
                          <div className="relative">
                            <select
                              className="bg-input-bg border-card-border text-body-md font-body-md focus:ring-secondary/40 h-11 w-full cursor-pointer appearance-none rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                              defaultValue="บิดา"
                            >
                              <option>บิดา</option>
                              <option>มารดา</option>
                              <option>ผู้ปกครอง</option>
                              <option>ญาติสายตรง</option>
                            </select>
                            <span className="material-symbols-outlined text-neutral-muted pointer-events-none absolute right-3 top-3 text-[18px]">
                              expand_more
                            </span>
                          </div>
                        </div>
                        {/* Emergency Contact Details */}
                        <div className="bg-input-bg border-card-border grid w-full grid-cols-1 gap-3 rounded-xl border p-4 md:col-span-2 md:grid-cols-2">
                          <div className="flex flex-col gap-1">
                            <span className="text-label-sm font-label-sm text-neutral-muted font-medium">
                              ชื่อ-นามสกุล ผู้ติดต่อฉุกเฉิน
                            </span>
                            <input
                              className="border-card-border placeholder:text-neutral-muted/60 text-body-md font-body-md focus:ring-secondary/40 h-10 rounded-lg border bg-white px-3 text-neutral-dark outline-none focus:border-primary focus:ring-2"
                              placeholder="นาย/นาง/นางสาว..."
                              type="text"
                              defaultValue="นายสมศักดิ์ รัตนกิจไพบูลย์"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-label-sm font-label-sm text-neutral-muted font-medium">
                              โทรศัพท์ผู้ติดต่อกรณีฉุกเฉิน
                            </span>
                            <input
                              className="border-card-border placeholder:text-neutral-muted/60 text-body-md font-body-md focus:ring-secondary/40 h-10 rounded-lg border bg-white px-3 text-neutral-dark outline-none focus:border-primary focus:ring-2"
                              placeholder="08x-xxx-xxxx"
                              type="tel"
                              defaultValue="081-992-1209"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 2: Interested Positions */}
                  <section className="border-card-border rounded-2xl border bg-white p-5 shadow-sm sm:p-8">
                    <div className="mb-2 flex items-center justify-between pb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary-light text-primary text-headline-sm font-headline-sm flex h-9 w-9 items-center justify-center rounded-xl font-bold">
                          02
                        </span>
                        <div>
                          <h2 className="text-headline-md font-headline-md font-semibold text-neutral-dark">
                            ตำแหน่งงานที่สนใจ (Interested Positions)
                          </h2>
                          <p className="text-body-sm font-body-sm text-neutral-muted">
                            ระบุลักษณะงานหรือตำแหน่งที่ประสงค์จะปฏิบัติงานเรียงตามลำดับความต้องการ
                            (3 อันดับ)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-3">
                      {/* Rank 1 Card */}
                      <div className="bg-primary-light/40 border-primary/20 hover:bg-primary-light/60 flex flex-col justify-between rounded-2xl border p-5 transition-all">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="bg-primary text-label-sm font-label-sm rounded-md px-2.5 py-1 font-bold text-white">
                              อันดับที่ 1
                            </span>
                            <span className="material-symbols-outlined text-primary text-[20px]">
                              stars
                            </span>
                          </div>
                          <div className="relative">
                            <select
                              className="border-card-border text-body-md font-body-md focus:ring-secondary/40 h-11 w-full cursor-pointer appearance-none rounded-xl border bg-white px-3.5 text-neutral-dark outline-none focus:border-primary focus:ring-2"
                              defaultValue="งานสนับสนุนธุรการและสารบรรณ"
                            >
                              <option>งานสนับสนุนธุรการและสารบรรณ</option>
                              <option>งานบริการและช่วยกิจกรรมนักศึกษา</option>
                              <option>งานห้องปฏิบัติการคอมพิวเตอร์และโสตฯ</option>
                              <option>งานห้องสมุดและศูนย์สารสนเทศ</option>
                              <option>งานสื่อประชาสัมพันธ์และการออกแบบ</option>
                            </select>
                            <span className="material-symbols-outlined text-neutral-muted pointer-events-none absolute right-3 top-3 text-[18px]">
                              expand_more
                            </span>
                          </div>
                        </div>
                        <p className="text-body-sm font-body-sm text-primary mt-4 flex items-center gap-1.5 font-medium">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            check_circle
                          </span>
                          ความสนใจหลักอันดับแรก
                        </p>
                      </div>

                      {/* Rank 2 Card */}
                      <div className="bg-input-bg border-card-border flex flex-col justify-between rounded-2xl border p-5 transition-all hover:bg-slate-100">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-label-sm font-label-sm rounded-md bg-slate-200 px-2.5 py-1 font-bold text-neutral-dark">
                              อันดับที่ 2
                            </span>
                            <span className="material-symbols-outlined text-neutral-muted text-[20px]">
                              bookmark
                            </span>
                          </div>
                          <div className="relative">
                            <select
                              className="border-card-border text-body-md font-body-md focus:ring-secondary/40 h-11 w-full cursor-pointer appearance-none rounded-xl border bg-white px-3.5 text-neutral-dark outline-none focus:border-primary focus:ring-2"
                              defaultValue="งานห้องปฏิบัติการคอมพิวเตอร์และโสตฯ"
                            >
                              <option>งานสนับสนุนธุรการและสารบรรณ</option>
                              <option>งานบริการและช่วยกิจกรรมนักศึกษา</option>
                              <option>งานห้องปฏิบัติการคอมพิวเตอร์และโสตฯ</option>
                              <option>งานห้องสมุดและศูนย์สารสนเทศ</option>
                              <option>งานสื่อประชาสัมพันธ์และการออกแบบ</option>
                            </select>
                            <span className="material-symbols-outlined text-neutral-muted pointer-events-none absolute right-3 top-3 text-[18px]">
                              expand_more
                            </span>
                          </div>
                        </div>
                        <p className="text-body-sm font-body-sm text-neutral-muted mt-4 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-neutral-muted text-[16px]">
                            info
                          </span>
                          ความสนใจสำรองอันดับ 1
                        </p>
                      </div>

                      {/* Rank 3 Card */}
                      <div className="bg-input-bg border-card-border flex flex-col justify-between rounded-2xl border p-5 transition-all hover:bg-slate-100">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-label-sm font-label-sm rounded-md bg-slate-200 px-2.5 py-1 font-bold text-neutral-dark">
                              อันดับที่ 3
                            </span>
                            <span className="material-symbols-outlined text-neutral-muted text-[20px]">
                              bookmark_border
                            </span>
                          </div>
                          <div className="relative">
                            <select
                              className="border-card-border text-body-md font-body-md focus:ring-secondary/40 h-11 w-full cursor-pointer appearance-none rounded-xl border bg-white px-3.5 text-neutral-dark outline-none focus:border-primary focus:ring-2"
                              defaultValue="งานบริการและช่วยกิจกรรมนักศึกษา"
                            >
                              <option>งานสนับสนุนธุรการและสารบรรณ</option>
                              <option>งานบริการและช่วยกิจกรรมนักศึกษา</option>
                              <option>งานห้องปฏิบัติการคอมพิวเตอร์และโสตฯ</option>
                              <option>งานห้องสมุดและศูนย์สารสนเทศ</option>
                              <option>งานสื่อประชาสัมพันธ์และการออกแบบ</option>
                            </select>
                            <span className="material-symbols-outlined text-neutral-muted pointer-events-none absolute right-3 top-3 text-[18px]">
                              expand_more
                            </span>
                          </div>
                        </div>
                        <p className="text-body-sm font-body-sm text-neutral-muted mt-4 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-neutral-muted text-[16px]">
                            info
                          </span>
                          ความสนใจสำรองอันดับ 2
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 3: Special Skills */}
                  <section className="border-card-border rounded-2xl border bg-white p-5 shadow-sm sm:p-8">
                    <div className="mb-2 flex items-center justify-between pb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary-light text-primary text-headline-sm font-headline-sm flex h-9 w-9 items-center justify-center rounded-xl font-bold">
                          03
                        </span>
                        <div>
                          <h2 className="text-headline-md font-headline-md font-semibold text-neutral-dark">
                            ความสามารถพิเศษ (Special Skills)
                          </h2>
                          <p className="text-body-sm font-body-sm text-neutral-muted">
                            ระบุทักษะความสามารถเด่นเพื่อประโยชน์ในการพิจารณาจัดสรรหน่วยงานที่เหมาะสม
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
                      {/* Skill 1 */}
                      <div className="space-y-2">
                        <label className="text-label-md font-label-md flex items-center gap-2 font-medium text-neutral-dark">
                          <span className="bg-primary h-2 w-2 rounded-full"></span>
                          <span>ความสามารถพิเศษด้านที่ 1</span>
                        </label>
                        <input
                          className="bg-input-bg border-card-border placeholder:text-neutral-muted/60 focus:ring-secondary/40 text-body-md font-body-md h-11 w-full rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                          placeholder="เช่น การใช้โปรแกรม Microsoft Office ขั้นสูง, Photoshop, Canva, ถ่ายภาพ"
                          type="text"
                          defaultValue="การจัดการฐานข้อมูล Excel, กราฟิก Canva & Figma, ซ่อมบำรุงคอมพิวเตอร์เบื้องต้น"
                        />
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="bg-secondary-light border-secondary/40 text-label-sm font-label-sm rounded-full border px-2.5 py-0.5 font-medium text-neutral-dark">
                            #MS Office
                          </span>
                          <span className="bg-secondary-light border-secondary/40 text-label-sm font-label-sm rounded-full border px-2.5 py-0.5 font-medium text-neutral-dark">
                            #Canva Pro
                          </span>
                          <span className="bg-secondary-light border-secondary/40 text-label-sm font-label-sm rounded-full border px-2.5 py-0.5 font-medium text-neutral-dark">
                            #IT Support
                          </span>
                        </div>
                      </div>
                      {/* Skill 2 */}
                      <div className="space-y-2">
                        <label className="text-label-md font-label-md flex items-center gap-2 font-medium text-neutral-dark">
                          <span className="bg-secondary h-2 w-2 rounded-full"></span>
                          <span>ความสามารถพิเศษด้านที่ 2</span>
                        </label>
                        <input
                          className="bg-input-bg border-card-border placeholder:text-neutral-muted/60 focus:ring-secondary/40 text-body-md font-body-md h-11 w-full rounded-xl border px-4 text-neutral-dark transition-all outline-none focus:border-primary focus:bg-white focus:ring-2"
                          placeholder="เช่น ภาษาอังกฤษเพื่อการสื่อสาร, การตัดต่อวิดีโอ (Premiere Pro/CapCut), พิธีกร"
                          type="text"
                          defaultValue="การสื่อสารภาษาอังกฤษระดับดี, การตัดต่อคลิปวิดีโอสั้น TikTok/Reels, งานประสานงาน"
                        />
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="bg-secondary-light border-secondary/40 text-label-sm font-label-sm rounded-full border px-2.5 py-0.5 font-medium text-neutral-dark">
                            #English Communication
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>

                {/* SECTION 4: Work Location */}
            <section className="border-card-border rounded-2xl border bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-4 flex items-center justify-between pb-4">
                <div className="flex items-center gap-3">
                <span className="bg-primary-light text-primary text-headline-sm font-headline-sm flex h-9 w-9 items-center justify-center rounded-xl font-bold">
                    04
                </span>
                <div>
                    <h2 className="text-headline-md font-headline-md font-semibold text-neutral-dark">
                    สถานที่ปฏิบัติงาน (Work Location)
                    </h2>
                    <p className="text-body-sm font-body-sm text-neutral-muted">
                    เลือกพื้นที่วิทยาเขตหรือศูนย์การศึกษาที่ท่านประสงค์จะเข้าไปปฏิบัติงาน
                    </p>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3">
                {/* Location Option 1 */}
                <label className="bg-input-bg border-card-border hover:bg-slate-100 has-[:checked]:bg-primary-light/40 has-[:checked]:border-primary flex cursor-pointer flex-col justify-between rounded-2xl border p-5 transition-all has-[:checked]:border-2">
                <div className="flex items-start gap-3">
                    <input
                    type="radio"
                    name="work_location"
                    defaultChecked
                    className="accent-primary mt-1 h-4 w-4"
                    />
                    <div>
                    <h3 className="text-label-lg font-label-lg font-semibold text-neutral-dark">
                        ในมหาวิทยาลัย (กทม.)
                    </h3>
                    <p className="text-body-sm font-body-sm text-neutral-muted mt-1">
                        พื้นที่มหาวิทยาลัยสวนดุสิต ถ.นครราชสีมา และศูนย์วิทยาศาสตร์
                        ถ.สิรินธร
                    </p>
                    </div>
                </div>
                </label>

                {/* Location Option 2 */}
                <label className="bg-input-bg border-card-border hover:bg-slate-100 has-[:checked]:bg-primary-light/40 has-[:checked]:border-primary flex cursor-pointer flex-col justify-between rounded-2xl border p-5 transition-all has-[:checked]:border-2">
                <div className="flex items-start gap-3">
                    <input
                    type="radio"
                    name="work_location"
                    className="accent-primary mt-1 h-4 w-4"
                    />
                    <div>
                    <h3 className="text-label-lg font-label-lg font-semibold text-neutral-dark">
                        วิทยาเขตสุพรรณบุรี
                    </h3>
                    <p className="text-body-sm font-body-sm text-neutral-muted mt-1">
                        โครงการจัดตั้งวิทยาเขตสุพรรณบุรี ต.โคกโคเฒ่า อ.เมือง
                        จ.สุพรรณบุรี
                    </p>
                    </div>
                </div>
                </label>

                {/* Location Option 3 */}
                <label className="bg-input-bg border-card-border hover:bg-slate-100 has-[:checked]:bg-primary-light/40 has-[:checked]:border-primary flex cursor-pointer flex-col justify-between rounded-2xl border p-5 transition-all has-[:checked]:border-2">
                <div className="flex items-start gap-3">
                    <input
                    type="radio"
                    name="work_location"
                    className="accent-primary mt-1 h-4 w-4"
                    />
                    <div>
                    <h3 className="text-label-lg font-label-lg font-semibold text-neutral-dark">
                        ศูนย์การศึกษาภูมิภาค
                    </h3>
                    <p className="text-body-sm font-body-sm text-neutral-muted mt-1">
                        ศูนย์การศึกษา ลำปาง / ตรัง / นครนายก
                    </p>
                    </div>
                </div>
                </label>
            </div>
            </section>
                  {/* SECTION 5: Available Work Schedule */}
                  <section className="border-card-border rounded-2xl border bg-white p-5 shadow-sm sm:p-8">
                    <div className="mb-2 flex flex-col justify-between gap-4 pb-6 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary-light text-primary text-headline-sm font-headline-sm flex h-9 w-9 items-center justify-center rounded-xl font-bold">
                          05
                        </span>
                        <div>
                          <h2 className="text-headline-md font-headline-md font-semibold text-neutral-dark">
                            วันและเวลาที่สามารถปฏิบัติงานได้ (Available Work
                            Schedule)
                          </h2>
                          <p className="text-body-sm font-body-sm text-neutral-muted">
                            กาเลือกช่วงเวลาที่ไม่มีตารางเรียนและสะดวกเข้าปฏิบัติงานประจำสัปดาห์
                          </p>
                        </div>
                      </div>
                      <span className="bg-secondary-light border-secondary/30 text-neutral-dark text-label-sm font-label-sm self-start rounded-full border px-3.5 py-1.5 font-semibold sm:self-auto">
                        รวม 75 ชั่วโมงตลอดภาคเรียน
                      </span>
                    </div>

                    {/* Schedule Table Container */}
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[760px] border-collapse">
                        <thead>
                          <tr className="border-card-border text-label-md font-label-md text-neutral-muted border-b text-left">
                            <th className="pb-3 font-semibold">วันทำการ</th>
                            <th className="pb-3 text-center font-semibold">
                              ช่วงเช้า (08.30 - 12.30 น.)
                            </th>
                            <th className="pb-3 text-center font-semibold">
                              ช่วงบ่าย (13.00 - 16.30 น.)
                            </th>
                            <th className="pb-3 font-semibold">
                              ระบุเวลาว่างเพิ่มเติม / หมายเหตุ
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-body-md font-body-md divide-card-border/60 divide-y text-neutral-dark">
                          {/* Monday */}
                          <tr>
                            <td className="flex items-center gap-2 py-4 font-medium">
                              <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>{" "}
                              วันจันทร์
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                defaultChecked
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4">
                              <input
                                type="text"
                                defaultValue="เช่น ว่างตั้งแต่ 10.00 น."
                                className="bg-input-bg border-card-border text-body-sm h-10 w-full rounded-lg border px-3 text-neutral-dark outline-none focus:border-primary focus:bg-white"
                              />
                            </td>
                          </tr>
                          {/* Tuesday */}
                          <tr>
                            <td className="flex items-center gap-2 py-4 font-medium">
                              <span className="h-2.5 w-2.5 rounded-full bg-pink-400"></span>{" "}
                              วันอังคาร
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                defaultChecked
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4">
                              <input
                                type="text"
                                defaultValue="สะดวกปฏิบัติงานต่อเนื่องถึง 17.00 น."
                                className="bg-input-bg border-card-border text-body-sm h-10 w-full rounded-lg border px-3 text-neutral-dark outline-none focus:border-primary focus:bg-white"
                              />
                            </td>
                          </tr>
                          {/* Wednesday */}
                          <tr>
                            <td className="flex items-center gap-2 py-4 font-medium">
                              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>{" "}
                              วันพุธ
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                defaultChecked
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                defaultChecked
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4">
                              <input
                                type="text"
                                defaultValue="ไม่มีตารางเรียนทั้งวัน (ว่างเต็มวัน)"
                                className="bg-input-bg border-card-border text-body-sm h-10 w-full rounded-lg border px-3 text-neutral-dark outline-none focus:border-primary focus:bg-white"
                              />
                            </td>
                          </tr>
                          {/* Thursday */}
                          <tr>
                            <td className="flex items-center gap-2 py-4 font-medium">
                              <span className="h-2.5 w-2.5 rounded-full bg-orange-400"></span>{" "}
                              วันพฤหัสบดี
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4">
                              <input
                                type="text"
                                defaultValue="มีเรียนบรรยายเต็มวัน"
                                className="bg-input-bg border-card-border text-body-sm h-10 w-full rounded-lg border px-3 text-neutral-dark outline-none focus:border-primary focus:bg-white"
                              />
                            </td>
                          </tr>
                          {/* Friday */}
                          <tr>
                            <td className="flex items-center gap-2 py-4 font-medium">
                              <span className="h-2.5 w-2.5 rounded-full bg-sky-400"></span>{" "}
                              วันศุกร์
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                defaultChecked
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4 text-center">
                              <input
                                type="checkbox"
                                className="accent-primary h-4 w-4 cursor-pointer rounded"
                              />
                            </td>
                            <td className="py-4">
                              <input
                                type="text"
                                defaultValue="-"
                                className="bg-input-bg border-card-border text-body-sm h-10 w-full rounded-lg border px-3 text-neutral-dark outline-none focus:border-primary focus:bg-white"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* SECTION 6: Required Attachments */}
                  <section className="border-card-border rounded-2xl border bg-white p-5 shadow-sm sm:p-8">
                    <div className="mb-4 flex items-center justify-between pb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary-light text-primary text-headline-sm font-headline-sm flex h-9 w-9 items-center justify-center rounded-xl font-bold">
                          06
                        </span>
                        <div>
                          <h2 className="text-headline-md font-headline-md font-semibold text-neutral-dark">
                            หลักฐานที่ต้องแนบ (Required Attachments)
                          </h2>
                          <p className="text-body-sm font-body-sm text-neutral-muted">
                            รายการเอกสารหลักฐานสำคัญตามระเบียบการรับสมัคร
                            (โปรดตรวจสอบและลงลายมือชื่อรับรองสำเนาถูกต้อง)
                          </p>
                        </div>
                      </div>
                      <span className="border-card-border text-neutral-muted text-label-sm font-label-sm hidden rounded-full border bg-input-bg px-3 py-1 sm:inline-block">
                        เอกสารประกอบ 2 รายการ
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
                      {/* Attachment 1 */}
                      <div className="bg-input-bg border-card-border flex flex-col justify-between rounded-2xl border p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="bg-primary-light text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                              <span className="material-symbols-outlined text-[20px]">
                                badge
                              </span>
                            </div>
                            <div>
                              <h3 className="text-label-lg font-label-lg font-semibold text-neutral-dark">
                                สำเนาบัตรประจำตัวนักศึกษา
                              </h3>
                              <p className="text-body-sm font-body-sm text-neutral-muted">
                                (พร้อมลงชื่อรับรองสำเนาถูกต้อง)
                              </p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="accent-primary h-5 w-5 cursor-pointer rounded"
                          />
                        </div>
                        <div className="border-card-border text-primary text-body-sm font-body-sm mt-4 flex items-center gap-1.5 border-t pt-3 font-medium">
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>
                          ตรวจสอบเรียบร้อย
                        </div>
                      </div>

                      {/* Attachment 2 */}
                      <div className="bg-input-bg border-card-border flex flex-col justify-between rounded-2xl border p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="bg-primary-light text-primary flex h-10 w-10 items-center justify-center rounded-xl">
                              <span className="material-symbols-outlined text-[20px]">
                                credit_card
                              </span>
                            </div>
                            <div>
                              <h3 className="text-label-lg font-label-lg font-semibold text-neutral-dark">
                                สำเนาบัตรประจำตัวประชาชน
                              </h3>
                              <p className="text-body-sm font-body-sm text-neutral-muted">
                                (พร้อมลงชื่อรับรองสำเนาถูกต้อง)
                              </p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="accent-primary h-5 w-5 cursor-pointer rounded"
                          />
                        </div>
                        <div className="border-card-border text-primary text-body-sm font-body-sm mt-4 flex items-center gap-1.5 border-t pt-3 font-medium">
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>
                          ตรวจสอบเรียบร้อย
                        </div>
                      </div>
                    </div>

                    {/* Notice Box */}
                    <div className="bg-secondary-light/40 border-secondary/30 mt-6 flex items-start gap-3 rounded-xl border p-4">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-[20px]">
                        info
                      </span>
                      <p className="text-body-sm font-body-sm text-neutral-dark">
                        โปรดแนบเอกสารจริงที่มีการลงลายมือชื่อรับรองสำเนาถูกต้องฉบับจริงพร้อมใบสมัครยื่นต่อกองพัฒนานักศึกษา
                      </p>
                    </div>
                  </section>

                  {/* Bottom Confirmation & Action Bar */}
                  <div className="border-card-border mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border bg-white p-5 shadow-sm sm:flex-row sm:p-6">
                    <div className="flex w-full items-center gap-3 sm:w-auto">
                      <input
                        type="checkbox"
                        id="certify"
                        defaultChecked
                        className="accent-primary h-5 w-5 cursor-pointer rounded"
                      />
                      <label
                        htmlFor="certify"
                        className="text-body-md font-body-md cursor-pointer font-medium text-neutral-dark"
                      >
                        ข้าพเจ้ารับรองว่าข้อความดังกล่าวข้างต้นเป็นความจริงทุกประการ
                      </label>
                    </div>
                    <button
                      type="button"
                      className="bg-input-bg border-card-border text-label-md font-label-md hover:bg-slate-100 flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3 font-semibold text-neutral-dark transition-all sm:w-auto"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      ดาวน์โหลดฟอร์มใบสมัคร PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}