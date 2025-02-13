import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src/app', 'src/components', 'src/config', 'src/lib'],
    ignoreDuringBuilds: false,
  },
  webpack: (config, { webpack }) => {
    const fileLoaderRule = config.module.rules.find((rule: { test: RegExp }) => rule.test?.test?.('.svg'));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    config.module.rules.push({ test: /\.po/, use: ['@lingui/loader'] });
    config.plugins.push(new webpack.DefinePlugin({ 'globalThis.__DEV__': false }));

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default nextConfig;
