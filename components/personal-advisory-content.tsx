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
    id: "bazi-analysis",
    icon: UserRound,
    titleZh: "八字命理分析",
    titleEn: "Bazi Analysis",
    focusZh: "S$168｜新客户入门分析",
    focusEn: "S$168 · Entry Analysis for New Clients",
    bodyZh: "适合希望先了解个人命理与人生方向的新客户。预约前，顾问会说明所需资料与服务内容。",
    bodyEn: "An entry service for new clients who want to understand their personal Bazi and life direction. Required information and service details are explained before booking.",
    examplesZh: ["个人命理与人生方向", "新客户入门咨询", "预约前确认资料"],
    examplesEn: ["Personal Bazi and life direction", "Entry consultation for new clients", "Information confirmed before booking"],
    waText: "Hello Qimen Strategy, I would like to enquire about the S$168 Bazi Analysis.",
  },
  {
    id: "qimen-consultation",
    icon: Compass,
    titleZh: "奇门遁甲咨询",
    titleEn: "Qi Men Dun Jia Consultation",
    focusZh: "S$396｜看清当前局势与方向",
    focusEn: "S$396 · Clarity on the Current Situation and Direction",
    bodyZh: "适用于事业、工作、合作、感情与人生方向等问题。顾问会结合客户情况与奇门盘面进行分析。",
    bodyEn: "Suitable for career, work, partnership, relationship and life-direction concerns. The consultant reviews the client’s situation together with the Qi Men chart.",
    examplesZh: ["事业与工作方向", "合作与行动时机", "感情与人生选择"],
    examplesEn: ["Career and work direction", "Partnerships and timing", "Relationship and life choices"],
    href: "/decision",
    waText: "Hello Qimen Strategy, I would like to enquire about the S$396 Qi Men Dun Jia consultation.",
  },
  {
    id: "major-decision-consultation",
    icon: Sparkles,
    titleZh: "重大决策咨询",
    titleEn: "Major Decision Consultation",
    focusZh: "S$1,696｜重大选择与深度分析",
    focusEn: "S$1,696 · Major Choices and In-Depth Analysis",
    bodyZh: "适用于影响较大、需要更深入判断的重要决策。请先通过 WhatsApp 说明情况，顾问会协助确认是否适合。",
    bodyEn: "For high-impact decisions that require deeper assessment. Briefly share the situation through WhatsApp and the consultant will confirm whether this service is suitable.",
    examplesZh: ["重大事业与投资决定", "买房、搬迁及重要人生选择", "需要更深入分析的复杂情况"],
    examplesEn: ["Major business and investment decisions", "Property, relocation and important life choices", "Complex situations requiring deeper analysis"],
    waText: "Hello Qimen Strategy, I would like to enquire about the S$1,696 Major Decision Consultation. My situation is:",
  },
  {
    id: "relationship-marriage",
    icon: HeartHandshake,
    titleZh: "感情与婚姻咨询",
    titleEn: "Relationship & Marriage Advisory",
    focusZh: "关系局势 · 婚姻选择 · 修复与去留",
    focusEn: "Relationship Dynamics · Marriage · Repair or Exit",
    bodyZh: "帮助客户看清关系现状、双方互动与下一步方向。具体咨询方式由顾问根据实际情况说明。",
    bodyEn: "Private advisory to clarify relationship dynamics and the next direction. The consultant explains the suitable format based on the actual situation.",
    examplesZh: ["感情关系困扰", "婚姻与重要选择", "修复、放下与重新开始"],
    examplesEn: ["Relationship concerns", "Marriage and important choices", "Repair, release or restart"],
    href: "/relationship-clarity-reading-singapore",
    waText: "Hello Qimen Strategy, I would like to enquire about a private relationship or marriage consultation.",
  },
  {
    id: "date-selection",
    icon: CalendarDays,
    titleZh: "择日服务",
    titleEn: "Auspicious Date Selection",
    focusZh: "结婚 · 开业 · 搬家 · 动工 · 签约",
    focusEn: "Marriage · Opening · Moving · Renovation · Signing",
    bodyZh: "为结婚、开业、搬家、动工、签约及重要活动选择合适日期。预约前由顾问确认所需资料。",
    bodyEn: "Date selection for marriage, openings, moving, renovation, signing and important events. Required information is confirmed before booking.",
    examplesZh: ["结婚与注册", "开业、搬家与动工", "签约与重要活动"],
    examplesEn: ["Marriage and registration", "Opening, moving and renovation", "Signing and important events"],
    waText: "Hello Qimen Strategy, I would like to enquire about auspicious date selection.",
  },
  {
    id: "mobile-number",
    icon: Smartphone,
    titleZh: "吉祥手机号码选择",
    titleEn: "Mobile Number Selection",
    focusZh: "个人需求 · 使用方向 · 号码筛选",
    focusEn: "Personal Needs · Usage · Number Selection",
    bodyZh: "根据个人资料、使用目的与现实可选号码进行筛选。具体流程由顾问在预约前说明。",
    bodyEn: "Selection based on personal information, intended use and realistically available numbers. The process is explained before booking.",
    examplesZh: ["个人长期使用", "事业与商务沟通", "现有号码比较"],
    examplesEn: ["Long-term personal use", "Business communication", "Comparison of available numbers"],
    waText: "Hello Qimen Strategy, I would like to enquire about mobile number selection.",
  },
  {
    id: "home-feng-shui",
    icon: Home,
    titleZh: "居家风水与空间能量净化",
    titleEn: "Residential Feng Shui & Space Clearing",
    focusZh: "住宅布局 · 睡眠 · 工作区域 · 空间调整",
    focusEn: "Home Layout · Sleep · Work Area · Space Alignment",
    bodyZh: "适用于住宅布局、睡眠环境、工作区域与空间状态的评估。上门服务将根据物业情况另行确认。",
    bodyEn: "For residential layout, sleep environment, work areas and space-condition review. On-site services are assessed separately according to the property.",
    examplesZh: ["卧室与工作区域", "住宅布局与动线", "新居与空间净化"],
    examplesEn: ["Bedroom and work areas", "Residential layout and flow", "New homes and space clearing"],
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
                {t("核心业务｜个人咨询", "Core Service｜Personal Advisory")}
              </p>
              <h1
                className="mt-6 text-4xl font-semibold leading-tight text-[#f4dfb0] md:text-6xl"
                style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}
              >
                {t("个人咨询与重大决策支持", "Personal Advisory & Major Decision Support")}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
                {t(
                  "启明遁甲为个人客户提供八字命理分析、奇门遁甲咨询、重大决策咨询、感情婚姻、择日、手机号码选择、居家风水与空间净化服务。请先说明情况，顾问会协助匹配适合的服务。",
                  "Qimen Strategy provides Bazi Analysis, Qi Men Dun Jia consultation, Major Decision Consultation, relationship and marriage advisory, date selection, mobile number selection, residential Feng Shui and space clearing. Share the situation first and the consultant will help match the appropriate service."
                )}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#e2bd6b]">
                <span className="border border-[#d6ad63]/35 px-4 py-2">Private & By Appointment</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">Online or Bedok</span>
                <span className="border border-[#d6ad63]/35 px-4 py-2">On-Site by Assessment</span>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappLink("Hello Qimen Strategy, I would like to enquire about a personal advisory service. My situation is:")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]"
                >
                  <MessageCircle size={18} />
                  {t("WhatsApp咨询", "WhatsApp Consultation")}
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
                {t("先了解服务，再由顾问协助匹配", "Understand the Services, Then Let the Consultant Help Match")}
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
                          {t("查看介绍", "View Details")}
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
                  "请先通过 WhatsApp 简要说明目前的情况。顾问会进一步说明适合的服务、咨询方式与所需资料。",
                  "Briefly share the current situation through WhatsApp. The consultant will explain the suitable service, consultation format and required information."
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d6ad63]/20 bg-black px-4 py-20 text-center md:py-24">
          <div className="container mx-auto max-w-4xl">
            <Sparkles className="mx-auto text-[#d6ad63]" size={28} />
            <h2 className="mt-6 text-3xl font-semibold text-[#f4dfb0] md:text-5xl" style={{ fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif" }}>
              {t("先说明情况，再匹配适合的服务", "Share the Situation First, Then Match the Right Service")}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
              {t(
                "不确定适合哪一种咨询，也可以直接联系我们。顾问会根据实际情况进一步说明。",
                "You may contact us directly even if you are unsure which service fits. The consultant will explain the next step based on the actual situation."
              )}
            </p>
            <a href={whatsappLink("Hello Qimen Strategy, I would like to enquire about a personal advisory service. My situation is:")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-3 bg-[#d6ad63] px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black hover:bg-[#f4dfb0]">
              <MessageCircle size={18} />
              {t("WhatsApp咨询", "WhatsApp Consultation")}
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
