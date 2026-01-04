"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Tabs from "@/components/Tabs";
import PoW from "@/components/PoW";
import Learning from "@/components/Learning";

type Tab = "pow" | "learning";

export default function Home() {
  const [tab, setTab] = useState<Tab>("pow");

  return (
    <>
      <Hero />
      <div className="mt-16">
        <Tabs active={tab} onChange={setTab} />
        <div className="mt-10">
          {tab === "pow" && <PoW />}
          {tab === "learning" && <Learning />}
        </div>
      </div>
    </>
  );
}
