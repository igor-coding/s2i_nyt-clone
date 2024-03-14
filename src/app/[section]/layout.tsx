import "@/styles/globals.css";

import SectionHeader from "@/components/header/SectionHeader";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SectionHeader />
      {children}
    </>
  );
}
