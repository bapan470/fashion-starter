const checkEnvVariables = require("./check-env-variables")
checkEnvVariables()

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    staticGenerationRetryCount: 0,
    staticGenerationMaxConcurrency: 1,
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "fashion-starter-demo.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
}
module.exports = nextConfig
