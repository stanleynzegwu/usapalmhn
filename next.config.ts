import type { NextConfig } from "next";
import { voiceRedirects } from "./content/voices/manifest";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    return voiceRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async rewrites() {
    return [
      { source: "/index.html", destination: "/" },
      { source: "/:page.html", destination: "/:page" },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
