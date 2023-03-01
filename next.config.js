const withPlugins = require("next-compose-plugins");
const nextTranslate = require("next-translate");
const { version } = require("./package.json");
// https://github.com/vercel/next.js/discussions/15341
const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  publicRuntimeConfig: {
    version,
  },
};
module.exports = withPlugins(
  [[withTM, { transpileModules: [] }], nextTranslate],
  nextConfig
);
