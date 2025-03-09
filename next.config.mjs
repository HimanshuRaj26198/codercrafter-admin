/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_CLOUD_KEY: process.env.GOOGLE_CLOUD_KEY,
    }
};

export default nextConfig;
