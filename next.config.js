/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(webm)$/i,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.producthunt.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
