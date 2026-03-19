"use client";

import { useEffect, useState } from "react";

interface Stats {
  totalVisits: number;
  uniqueVisitors: number;
}

export function useStats() {
  const [stats, setStats] = useState<Stats>({
    totalVisits: 0,
    uniqueVisitors: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { stats, loading };
}
