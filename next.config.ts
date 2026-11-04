import type { NextConfig } from 'next';
const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    deviceSizes: [320, 390, 640, 768, 1024, 1280, 1536],
    imageSizes: [32, 64, 128, 256],
  },
};
export default config;
