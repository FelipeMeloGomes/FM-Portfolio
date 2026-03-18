"use client";

import { useLocale } from "next-intl";
import { timeline } from "@/src/data/timeline";
import { timelineEn } from "@/src/data/timeline.en";
import { TimelineClient } from "./timeline-client";

export function Timeline() {
  const locale = useLocale();
  const items = locale === "en" ? timelineEn : timeline;

  return <TimelineClient items={items} />;
}
