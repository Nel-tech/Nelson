/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nelson-ade.vercel.app/', 
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
