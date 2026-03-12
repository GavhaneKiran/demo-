"use client";
import { useState } from "react";
import type { Language } from "@/types";

import TopStrip from "@/components/layout/TopStrip";
import Header   from "@/components/layout/Header";
import Ticker   from "@/components/layout/Ticker";
import Footer   from "@/components/layout/Footer";

import Hero     from "@/components/sections/Hero";
import Tenders  from "@/components/sections/Tenders";
import Notices  from "@/components/sections/Notices";
import Projects from "@/components/sections/Projects";
import Careers  from "@/components/sections/Careers";
import About    from "@/components/sections/About";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  return (
    <main>
      <TopStrip lang={lang} onLangChange={setLang} />
      <Header />
      <Ticker />
      <Hero />
      <Tenders />
      <Notices />
      <Projects />
      <Careers />
      <About />
      <Footer />
    </main>
  );
}
