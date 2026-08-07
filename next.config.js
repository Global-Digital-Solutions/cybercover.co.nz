/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'cybercover.co.nz' }],
        destination: 'https://www.cybercover.co.nz/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
