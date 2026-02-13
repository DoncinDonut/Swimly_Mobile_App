const API_URL = process.env.NEXT_PUBLIC_API_URL;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/server/:path*',
        destination: `${API_URL}/server/:path*`,
      },
    ];
  },
};