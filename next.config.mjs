/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/emporium-web',
  assetPrefix: '/emporium-web',
  trailingSlash: true,
}

export default nextConfig