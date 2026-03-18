'use client'

const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

export function UmamiAnalytics() {
  if (!UMAMI_WEBSITE_ID) {
    return null
  }

  return (
    <script
      defer
      src="https://analytics.umami.is/script.js"
      data-website-id={UMAMI_WEBSITE_ID}
    />
  )
}
