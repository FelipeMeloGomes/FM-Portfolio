import { NextResponse } from "next/server";

export async function GET() {
  try {
    const startAt = new Date("2026-03-19").getTime();
    const endAt = Date.now();

    const apiUrl = process.env.UMAMI_API_URL;
    const siteId = process.env.UMAMI_SITE_ID;
    const apiKey = process.env.UMAMI_API_KEY;

    if (!apiUrl || !siteId || !apiKey) {
      throw new Error("Missing Umami environment variables");
    }

    const response = await fetch(
      `${apiUrl}/websites/${siteId}/stats?startAt=${startAt}&endAt=${endAt}`,
      {
        headers: {
          "x-umami-api-key": apiKey,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Umami API error:", error);
      throw new Error("Failed to fetch stats");
    }

    const data = await response.json();
    return NextResponse.json({
      totalVisits: data.pageviews?.value || 0,
      uniqueVisitors: data.visitors?.value || 0,
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json(
      { totalVisits: 0, uniqueVisitors: 0 },
      { status: 500 }
    );
  }
}
