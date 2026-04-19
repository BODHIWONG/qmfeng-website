"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

// 与新加坡总理黄循财合影
const PM_PHOTO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-04-15%20%E4%B8%8B%E5%8D%883.52.22-aJFvUqoPa0RDPUg6HdrrMl5fIRQn4M.png";
// 大师风水勘察现场
const WORK_PHOTO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%88%AA%E5%B1%8F2026-04-15%20%E4%B8%8B%E5%8D%883.54.32-YcE18RA9DDi9d8f23bGpeXudcc6WtT.png";
// 善济天下慈善字画
const CHARITY_CALLIGRAPHY = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4221776241387_.pic-giqbFtyleH4JpZvk1IqNyyqrvgLkYw.jpg";
// 清华大学证书（更清晰版本）
const TSINGHUA_CERT = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4241776242600_.pic_hd.jpg-6lYJ99aaazyodBj4R4gu94VdJItzk4.png";
// 客户上门道谢照片
const THANKS_PHOTO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4231776242309_.pic-FM67Ju9VxREEgqiE7Q6AIdWObF7iz7.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function HonorsSection() {
  const { t } = useLanguage();

  const honors = [
    // 第一行：3个竖版图片
    {
      img: PM_PHOTO,
      titleZh: "与新加坡总理黄循财合影",
      titleEn: "With Singapore Prime Minister Lawrence Wong",
      descZh: "启明大师受邀出席重要社区活动，与新加坡总理黄循财先生亲切交流，彰显大师在本地社区的影响力与认可度。",
      descEn: "Master Qiming was invited to attend important community events, having cordial exchanges with Singapore Prime Minister Lawrence Wong, demonstrating his influence and recognition in the local community.",
    },
    {
      img: CHARITY_CALLIGRAPHY,
      titleZh: "「善济天下」慈善荣誉",
      titleEn: "\"Benevolence for All\" Charity Honor",
      descZh: "新加坡知名慈善家亲手赠送「善济天下」字画予启明大师，表彰其在公益慈善领域的杰出贡献与善行义举。",
      descEn: "A renowned Singapore philanthropist personally presented this calligraphy 'Benevolence for All Under Heaven' to honor Master Qiming's outstanding contributions to charity and community welfare.",
    },
    {
      img: THANKS_PHOTO,
      titleZh: "客户专程上门道谢",
      titleEn: "Client Returns to Express Gratitude",
      descZh: "客户在受益后专程前来道谢，真诚的感谢是对大师服务最好的认可，也是我们持续前行的动力。",
      descEn: "Clients specially visit to express gratitude after experiencing positive changes — the most genuine recognition of Master's service and our motivation to keep moving forward.",
    },
    // 第二行：2个横版图片
    {
      img: TSINGHUA_CERT,
      titleZh: "清华大学专业认证",
      titleEn: "Tsinghua University Certification",
      descZh: "启明大师于2022年完成清华大学社会科学学院专业课程培训，获颁学习证书，印证其学术功底与专业素养。",
      descEn: "Master Qiming completed professional training at Tsinghua University's School of Social Sciences in 2022, receiving certification that validates his academic foundation and professional expertise.",
    },
    {
      img: WORK_PHOTO,
      titleZh: "专业风水勘察现场",
      titleEn: "Professional On-Site Consultation",
      descZh: "大师身着笔挺西装，手持风水罗盘与专业App，神情专注地审视空间能量格局，展现16年深厚功底与严谨的工作态度。",
      descEn: "Master in formal attire, using feng shui compass and professional tools, meticulously analyzing spatial energy patterns — showcasing 16 years of expertise and rigorous methodology.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[oklch(0.08_0.02_60)]">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase text-[oklch(0.60_0.08_65)] font-semibold"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {t("荣誉与认可", "Honors & Recognition")}
            </span>
            <div className="w-8 h-px bg-[oklch(0.60_0.08_65)]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
              color: "oklch(0.95 0.01 75)",
            }}
          >
            {t("社会影响力", "Social Impact")}
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
              color: "oklch(0.60 0.02 70)",
            }}
          >
            {t(
              "十六年来，启明大师不仅服务个人与企业，更积极参与社区公益，获得各界认可。",
              "Over 16 years, Master Qiming has not only served individuals and businesses, but also actively participated in community welfare, earning recognition from all sectors."
            )}
          </p>
        </motion.div>

        {/* Honors Grid - First Row: 3 portrait images */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {honors.slice(0, 3).map((honor, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-[oklch(0.12_0.02_60)]">
                <img
                  src={honor.img}
                  alt={t(honor.titleZh, honor.titleEn)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_60/0.8)] via-transparent to-transparent" />
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{
                  fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                  color: "oklch(0.95 0.01 75)",
                }}
              >
                {t(honor.titleZh, honor.titleEn)}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{
                  fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                  color: "oklch(0.55 0.02 70)",
                }}
              >
                {t(honor.descZh, honor.descEn)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honors Grid - Second Row: 2 landscape images (Certificate & Work Photo) */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 清华大学证书 - 横版正向展示 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-[oklch(0.12_0.02_60)] flex items-center justify-center">
              <img
                src={honors[3].img}
                alt={t(honors[3].titleZh, honors[3].titleEn)}
                className="w-auto h-full object-contain transition-transform duration-700 group-hover:scale-105"
                style={{ transform: "rotate(-90deg)", maxWidth: "133%", maxHeight: "100%" }}
              />
            </div>
            <h3
              className="text-base font-bold mb-2"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.95 0.01 75)",
              }}
            >
              {t(honors[3].titleZh, honors[3].titleEn)}
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.55 0.02 70)",
              }}
            >
              {t(honors[3].descZh, honors[3].descEn)}
            </p>
          </motion.div>

          {/* 风水勘察现场 */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-[oklch(0.12_0.02_60)]">
              <img
                src={honors[4].img}
                alt={t(honors[4].titleZh, honors[4].titleEn)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_60/0.8)] via-transparent to-transparent" />
            </div>
            <h3
              className="text-base font-bold mb-2"
              style={{
                fontFamily: "var(--font-cormorant), var(--font-noto-serif), serif",
                color: "oklch(0.95 0.01 75)",
              }}
            >
              {t(honors[4].titleZh, honors[4].titleEn)}
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: "var(--font-lato), var(--font-noto-sans), sans-serif",
                color: "oklch(0.55 0.02 70)",
              }}
            >
              {t(honors[4].descZh, honors[4].descEn)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
