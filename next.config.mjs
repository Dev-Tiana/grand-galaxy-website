/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'files.manuscdn.com' },
      { protocol: 'https', hostname: 'manus-storage' }
    ]
  }
};

export default nextConfig;
