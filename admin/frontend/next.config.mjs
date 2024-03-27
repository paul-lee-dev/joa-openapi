/** @type {import('next').NextConfig} */
// npx serve out
// admin

const nextConfig = {
  basePath: "/dashboard",
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `http://127.0.0.1:3000/:path*`,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
