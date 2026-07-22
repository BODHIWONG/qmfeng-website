"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  HeartHandshake,
  Home,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRound,
  Video,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingActions from "@/components/floating-actions";
import { useLanguage } from "@/contexts/language-context";

type PersonalService = {
  id: string;
  icon: LucideIcon;
  titleZh: string;
  titleEn: string;
  focusZh: string;
  focusEn: string;
  bodyZh: string;
  bodyEn: string;
  examplesZh: string[];
  examplesEn: string[];
  href?: string;
  waText: string;
};

const services: PersonalService[] = [
  {
    id: "major-decisions",
    icon: Compass,
    titleZh: "个人重大决策咨询",
    titleEn: "Personal Strategic Decision Advisory",
    focusZh: "事业 · 合作 · 投资 · 买房搬迁 · 人生方向",
    focusEn: "Career · Partnership · Investment · Property · Life Direction",
    bodyZh:
      "当多个选择彼此牵连、风险难以判断时，以一个核心问题为中心，协助你看清时机、方向、人事关系、潜在风险与下一步行动。",
    bodyEn:
      "A focused review for important choices where timing, people, risk and direction are difficult to assess clearly.",
    examplesZh: ["事业去留与职业转型", "合作、投资与重要签约", "买房、搬迁与多方案比较"],
    examplesEn: ["Career and transition", "Partnership, investment and signing", "Property, relocation and option comparison"],
    href: "/decision",
    waText: "Hello Qimen Strategy, I would like to enquire about a personal strategic decision consultation.",
  },
  {
    id: "relationship-marriage",
    icon: HeartHandshake,
    titleZh: "感情与婚姻咨询",
    titleEn: "Relationship & Marriage Advisory",
    focusZh: "关系局势 · 婚姻选择 · 边界 · 修复与去留",
    focusEn: "Relationship Dynamics · Marriage · Boundaries · Repair or Exit",
    bodyZh:
      "帮助客户从关系现状、双方互动、时机与个人状态出发，看清真正的问题、可调整的空间以及更适合的下一步方向。",
    bodyEn:
      "Private relationship advisory to clarify dynamics, boundaries, timing and the realistic next direction.",
    examplesZh: ["感情是否值得继续", "婚姻关系与重大选择", "关系修复、放下与重新开始"],
    examplesEn: ["Whether to continue", "Marriage and major choices", "Repair, release or restart"],
    href: "/relationship-clarity-reading-singapore",
    waText: "Hello Qimen Strategy, I would like to enquire about a private relationship or marriage consultation.",
  },
  {
    id: "date-selection",
    icon: CalendarDays,
    titleZh: "择日服务",
    titleEn: "Auspicious Date Selection",
    focusZh: "结婚 · 开业 · 搬家 · 动工 · 签约 · 重要活动",
    focusEn: "Marriage · Opening · Moving · Renovation · Signing · Key Events",
    bodyZh:
      "结合事项性质、参与人资料、现实安排与可执行时间范围，筛选更适合的重要行动日期，并说明使用重点与注意事项。",
    bodyEn:
      "Date selection based on the event, people involved, practical constraints and the available action window.",
    examplesZh: ["结婚、注册与婚礼", "开业、搬家与动工", "签约、发布与重要活动"],
    examplesEn: ["Marriage and registration", "Opening, moving and renovation", "Signing, launch and important events"],
    waText: "Hello Qimen Strategy, I would like to enquire about auspicious date selection.",
  },
  {
    id: "mobile-number",
    icon: Smartphone,
    titleZh: "吉祥手机号码选择",
    titleEn: "Mobile Number Selection",
    focusZh: "个人需求 · 使用方向 · 数字组合 · 长期适配",
    focusEn: "Personal Needs · Usage · Number Pattern · Long-Term Fit",
    bodyZh:
      "根据个人资料、使用目的与现实可选号码，筛选更适合长期使用的手机号码。服务重点是匹配与取舍，而不是夸大号码能够保证结果。",
    bodyEn:
      "Personalised mobile number selection based on the user, intended purpose and realistically available options, without exaggerated guarantees.",
    examplesZh: ["个人长期使用号码", "事业与商务沟通号码", "现有号码比较与筛选"],
    examplesEn: ["Long-term personal use", "Business communication", "Comparison of available numbers"],
    waText: "Hello Qimen Strategy, I would like to enquire about mobile number selection.",
  },
  {
    id: "home-feng-shui",
    icon: Home,
    titleZh: "居家风水与空间能量净化",
    titleEn: "Residential Feng Shui & Space Clearing",
    focusZh: "住宅布局 · 睡眠 · 工作区域 · 空间动线 · 新居净化",
    focusEn: "Home Layout · Sleep · Work Area · Flow · Space Clearing",
    bodyZh:
      "结合住宅实际格局、居住者需求与空间状态，提供居家布局建议；如空间长期压抑、睡眠不稳或搬迁装修后需要调整，也可评估空间净化服务。",
    bodyEn:
      "Residential layout and space review for sleep, work areas, movement and overall support, with space clearing assessed where appropriate.",
    examplesZh: ["卧室、书桌与工作区域", "财位、动线与家庭关系", "新居、装修后与长期压抑空间"],
    examplesEn: ["Bedroom and work areas", "Flow, focus and family use", "New homes, post-renovation or heavy spaces"],
    waText: "Hello Qimen Strategy, I would like to enquire about residential Feng Shui or space clearing.",
  },
];

function whatsappLink(text: string) {
  return `https://wa.me/6589593499?text=${encodeURIComponent(text)}`;
}

export default function PersonalAdvisoryContent() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[oklch(0.07_0.02_60)] text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-[#d6ad63]/20 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(214,173,99,0.16),transparent_34%)]" />
          <div className="container relative mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6ad63]">
                {t("第三大核心业务支柱｜个人咨询", "Third Core Pillar｜Personal Advisory")}
              </p>
              <h1
                className="mt-6 text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t("个人重大决策与生活优化咨询", "Personal Advisory for Important Life Decisions")}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
                {t(
                  "启明遁甲决策智库为个人客户提供感情婚姻、重大决策、择日、吉祥手机号码、居家风水布局与空间能量净化服务。所有服务以实际问题与现实条件为基础，帮助你在重要行动前看清局势、边界与下一步方向。",
                  "Qimen Strategy provides private personal advisory for relationships and marriage, major decisions, auspicious date selection, mobile number selection, residential Feng Shui and space clearing. Each service is grounded in the client’s actual situation and practical constraints."
                )}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#e2bd6b]">
                <span className="border border-[#d6ad63]/35 px-4 py-2">Private & By Appointment</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">Online or Bedok</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">On-Site by Assessment</span>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappLink("Hello Qimen Strategy, I would like to enquire about a personal advisory service.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
                >
                  <MessageCircle size={18} />
                  {t("说明你的咨询需求", "Share Your Enquiry")}
                </a>
                <a
                  href="#personal-services"
                  className="inline-flex items-center justify-center gap-3 border border-[#d6ad63]/70 px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#f4dfb0] hover:bg-[#d6ad63]/10"
                >
                  {t("查看服务项目", "View Services")}
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="personal-services" className="bg-[oklch(0.96_0.012_75)] px-4 py-20 text-[oklch(0.16_0.02_60)] md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[oklch(0.60_0.08_65)]">
                {t("个人咨询服务范围", "Personal Advisory Services")}
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
                {t("根据问题性质，选择最适合的咨询入口", "Choose the Service That Matches the Actual Issue")}
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                const examples = lang === "zh" ? service.examplesZh : service.examplesEn;
                return (
                  <article key={service.id} id={service.id} className="scroll-mt-28 border border-[oklch(0.82_0.035_70)] bg-white p-7 shadow-sm md:p-8">
                    <div className="flex h-13 w-13 items-center justify-center border border-[oklch(0.65_0.09_70)] text-[oklch(0.58_0.08_65)]">
                      <Icon size={23} />
                    </div>
                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[oklch(0.58_0.08_65)]">{t(service.titleZh, service.titleEn)}</p>
                    <h3 className="mt-2 text-2xl font-bold leading-tight">{t(service.focusZh, service.focusEn)}</h3>
                    <p className="mt-5 text-sm leading-7 text-[oklch(0.38_0.02_60)]">{t(service.bodyZh, service.bodyEn)}</p>
                    <div className="mt-6 space-y-2 border-t border-[oklch(0.88_0.018_70)] pt-5">
                      {examples.map((example) => (
                        <p key={example} className="flex items-start gap-3 text-sm leading-6 text-[oklch(0.42_0.02_60)]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.60_0.08_65)]" />
                          {example}
                        </p>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {service.href && (
                        <Link href={service.href} className="inline-flex items-center justify-center gap-2 border border-[oklch(0.60_0.08_65)] px-5 py-3 text-sm font-bold text-[oklch(0.38_0.04_65)] hover:bg-[oklch(0.60_0.08_65)] hover:text-white">
                          {t("查看详细介绍", "View Details")}
                          <ArrowRight size={15} />
                        </Link>
                      )}
                      <a href={whatsappLink(service.waText)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[oklch(0.60_0.08_65)] px-5 py-3 text-sm font-bold text-white hover:opacity-90">
                        <MessageCircle size={16} />
                        {t("WhatsApp咨询", "Enquire on WhatsApp")}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            <div className="border border-[#d6ad63]/22 bg-white/[0.035] p-7">
              <ShieldCheck className="text-[#d6ad63]" size={24} />
              <h2 className="mt-5 text-2xl font-semibold text-[#f4dfb0]">{t("专业边界", "Professional Boundaries")}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {t(
                  "咨询提供判断、风险提示与行动参考，不保证特定财务、关系、健康或其他结果，也不替代法律、金融、医疗、心理等专业意见。",
                  "Advisory provides insight, risk awareness and action reference. It does not guarantee financial, relationship, health or other outcomes and does not replace regulated professional advice."
                )}
              </p>
            </div>
            <div className="border border-[#d6ad63]/22 bg-white/[0.035] p-7">
              <Video className="text-[#d6ad63]" size={24} />
              <h2 className="mt-5 text-2xl font-semibold text-[#f4dfb0]">{t("线上与面谈", "Online & In Person")}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {t(
                  "多数个人咨询可线上进行，也可预约在Bedok面谈。居家风水及空间服务如需上门，将根据物业类型、面积与地点另行评估。",
                  "Most personal consultations are available online or in person at Bedok. On-site residential and space services are assessed according to property type, size and location."
                )}
              </p>
            </div>
            <div className="border border-[#d6ad63]/22 bg-white/[0.035] p-7">
              <MapPin className="text-[#d6ad63]" size={24} />
              <h2 className="mt-5 text-2xl font-semibold text-[#f4dfb0]">{t("预约前准备", "Before Booking")}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {t(
                  "请先简要说明你需要解决的问题、相关背景、希望作出决定的时间；涉及住宅空间时，请准备地址、户型、面积、平面图或现场照片。",
                  "Briefly share the issue, relevant background and decision timeline. For residential matters, prepare the address, property type, size, floor plan or relevant photos."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d6ad63]/20 bg-black px-4 py-20 text-center md:py-24">
          <div className="container mx-auto max-w-4xl">
            <Sparkles className="mx-auto text-[#d6ad63]" size={28} />
            <h2 className="mt-6 text-3xl font-semibold text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("先说明你的真实需要，再匹配适合的服务", "Share the Real Need First, Then Match the Right Service")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
              {t(
                "你不需要先判断自己属于哪一种服务。通过WhatsApp简要说明情况，我们会先确认问题范围、咨询方式与所需资料。",
                "You do not need to identify the service category yourself. Share the situation by WhatsApp and we will first confirm the scope, format and information required."
              )}
            </p>
            <a href={whatsappLink("Hello Qimen Strategy, I would like to enquire about a personal advisory service. My main concern is:")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
              <UserRound size={18} />
              {t("联系启明老师", "Contact Mr.Qiming")}
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
