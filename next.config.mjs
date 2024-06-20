/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'image.tmdb.org',
            },
            {
                hostname: 'lh3.googleusercontent.com',
            },
        ],
        unoptimized: true,
    },
}

export default nextConfig
