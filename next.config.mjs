/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ]
  },
  images: {
    remotePatterns: [
      { hostname: "avatar.vercel.sh" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "www.notion.so" },
    ],
  },
}

export default nextConfig
