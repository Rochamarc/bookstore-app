/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/authors/add-author',
          destination: '/admin/add-author',
        },
        // Outras reescritas, se necessário
      ];
    },
  };
  
  export default nextConfig;
  