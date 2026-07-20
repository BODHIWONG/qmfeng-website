import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Registration & PayNow｜启明遁甲课程报名",
  description:
    "Register for the Qi Men Dun Jia Foundation Course by Qimen Strategy Singapore. Submit participant details and complete payment by PayNow to Qiming Feng Shui Wisdom Pte. Ltd.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CourseRegistrationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
