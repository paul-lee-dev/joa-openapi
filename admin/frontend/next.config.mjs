/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "export",
  async rewrites() {
    //CORS 문제 해결을 위한 설정(proxy 설정)
    return [
      {
        source: "/:path*",
        destination: `http://joa13.site:path*`, //컨플루언스의 API주소
      },
    ];
  },
};

export default nextConfig;
