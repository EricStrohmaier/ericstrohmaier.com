/** @type {import('next').NextConfig} */
const nextConfig = {
  // @react-pdf/renderer v4 is ESM-only; let Next transpile it for the client.
  transpilePackages: ["@react-pdf/renderer"],
  // libSQL ships a native binary (only used for file:/embedded URLs — remote
  // Turso talks over HTTP/WS). Keep these out of the webpack bundle so the
  // `.node` binary isn't parsed at build time.
  experimental: {
    serverComponentsExternalPackages: [
      "@libsql/client",
      "@libsql/kysely-libsql",
      "libsql",
    ],
    // Ensure the OG-card font is bundled into the route's serverless function.
    outputFileTracingIncludes: {
      "/api/og-card": ["./public/fonts/**"],
    },
  },
  images: {
    remotePatterns: [
      { hostname: "avatar.vercel.sh" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "www.notion.so" },
      { hostname: "prod-files-secure.s3.us-west-2.amazonaws.com" },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.(ttf|woff|woff2|eot)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/fonts/",
        },
      },
    })
    return config
  },
}

export default nextConfig
