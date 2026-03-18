/** @type {import('next-sitemap').Config} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://felipemelo.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/404', '/500'],
}

module.exports = config
