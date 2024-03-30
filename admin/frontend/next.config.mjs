/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/dashboard",
  // distDir: "build",
  // output: "export",
  // generateBuildId: async () => {
  //   // This could be anything, using the latest git hash
  //   return "";
  // },
  // env: {
  //   customKey: "my-value",
  // },
  // async rewrites() {
  //   //CORS 문제 해결을 위한 설정(proxy 설정)
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: `http://joa13.site:path*`, //컨플루언스의 API주소
  //     },
  //   ];
  // },
};

export default nextConfig;
