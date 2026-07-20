import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Course Registration, Transfer & Cancellation Policy｜课程报名政策",
  description: "Registration, payment verification, transfer, cancellation and attendance policy for Qimen Strategy weekly courses in Singapore.",
  alternates: { canonical: "https://www.qmfeng.com/course-policy" },
};

const policies = [
  ["Seat Confirmation", "名额确认", "Submitting a form does not by itself confirm a seat. A place is confirmed after payment is verified and written confirmation is sent by Qimen Strategy.", "提交报名表本身不代表名额已确认。只有在付款核实并收到启明遁甲决策智库的书面确认后，名额才正式保留。"],
  ["Payment Reference", "付款资料", "Participants should enter the correct name, course batch and PayNow reference so payment can be matched to the registration.", "学员应填写正确姓名、课程班次与PayNow备注，以便核对付款与报名资料。"],
  ["Transfer Request", "转班申请", "A request to transfer to another available batch should normally be made at least 7 calendar days before the course starts. One transfer may be considered, subject to seat availability and written approval.", "如需转班，原则上应在开课前至少7个日历日提出。每位学员可申请一次转班，是否获批视新班次名额及书面确认为准。"],
  ["Late Changes and No-Show", "临时变更与缺席", "Requests made less than 7 days before the course, partial attendance or no-show cases are reviewed individually and may not qualify for a refund or transfer because teaching resources and seats have already been reserved.", "开课前少于7天提出的变更、只参加部分课程或无故缺席，将按个案处理。由于名额与教学资源已经预留，可能无法退款或转班。"],
  ["Organiser Changes", "主办方调整", "If Qimen Strategy must postpone or cancel a class, participants may choose an available replacement batch or receive a refund of the affected course fee.", "如启明遁甲决策智库需要延期或取消课程，学员可以选择其他可用班次，或退回受影响课程的费用。"],
  ["Learning Materials", "学习资料", "Course materials are for the registered participant's personal learning. Recording, copying, resale, public teaching or distribution requires written permission.", "课程资料仅供已报名学员个人学习。录音录像、复制、转售、公开教学或传播须取得书面允许。"],
];

export default function CoursePolicyPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="px-4 pb-24 pt-32 md:pt-40">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">Qimen Strategy Academy</p>
            <h1 className="mt-5 text-4xl font-semibold text-[#f4dfb0] md:text-6xl">Course Registration & Attendance Policy</h1>
            <h2 className="mt-4 text-2xl font-semibold text-[#e2bd6b] md:text-4xl">课程报名、转班与取消政策</h2>
            <p className="mt-8 text-base leading-8 text-white/72">This policy applies to weekly and scheduled courses unless a different written arrangement is stated in the registration confirmation.</p>
            <div className="mt-12 space-y-5">
              {policies.map(([title, zh, body, bodyZh]) => (
                <section key={title} className="border border-[#d6ad63]/20 bg-white/[0.035] p-7">
                  <h3 className="text-xl font-semibold text-[#f4dfb0]">{title}｜{zh}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{body}</p>
                  <p className="mt-3 text-sm leading-7 text-white/52">{bodyZh}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 border border-[#d6ad63]/30 bg-[#d6ad63]/10 p-7">
              <p className="text-sm leading-7 text-white/70">For transfer or attendance requests, contact WhatsApp +65 8959 3499 and include the registered participant name and course batch.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
