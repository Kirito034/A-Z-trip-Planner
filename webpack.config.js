const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "os": require.resolve("os-browserify/browser"),
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/"),
      "fs": false,
      "net": false,
      "http": false,
    },
  },
};
