const rootConfig = require("../webpack.config");

module.exports = async ({ config, mode }) => {
  config.module = rootConfig.module;

  config.resolve.extensions = rootConfig.resolve.extensions;

  return config;
};
