/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn0.iconfinder.com",
      "media.istockphoto.com",
      "img.freepik.com",      // ✅ NEW domain for avatar image
    ],
  },
};

module.exports = nextConfig;
