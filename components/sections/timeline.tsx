import { timeline } from "@/src/data/timeline";
import { TimelineClient } from "./timeline-client";

export function Timeline() {
  return <TimelineClient items={timeline} />;
}
