/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/dashboard/:path*",
        destination: `http://127.0.0.1:3000/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
