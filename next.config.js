/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "hi"],
    defaultLocale: "en",
    localeDetection: true  
  }
};

module.exports = nextConfig;
