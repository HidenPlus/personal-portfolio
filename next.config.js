// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: '/es',
        destination: '/',
      },
      {
        source: '/en',
        destination: '/',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/es/cv/cv_es.pdf',
        destination: '/cv/cv_es.pdf',
        permanent: true,
      }
    ]
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL || "",
    POSTGRES_USER: process.env.POSTGRES_USER || "",
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "",
    POSTGRES_DB: process.env.POSTGRES_DB || "",
  }
}

module.exports = withBlitz(config)
