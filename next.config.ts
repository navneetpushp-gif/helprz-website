import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Old indexed URL from a previous version of the site (unrelated
        // Hyderabad content). It 404s now — redirect it so Google stops
        // carrying stale signals about the domain and passes any residual
        // authority to the homepage instead.
        source: "/permanent-helpers/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
