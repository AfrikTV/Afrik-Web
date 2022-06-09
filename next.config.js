//  @type {import('next').NextConfig} 
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["cloudflare-ipfs.com"],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  }
});
